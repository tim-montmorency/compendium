// Lit + déplacement avec tessellation (URP, Unity 6, Forward et Forward+)
// Pensé pour les matériaux PBR d'ambientCG : Color, NormalGL, Roughness, Metalness,
// AmbientOcclusion, Displacement.
// La tessellation subdivise les triangles près de la caméra avant le déplacement,
// ce qui permet un vrai relief même sur un maillage simple.
Shader "Custom/Lit Deplacement"
{
    Properties
    {
        [MainTexture] _BaseMap ("Couleur (_Color)", 2D) = "white" {}
        [MainColor]   _BaseColor ("Teinte", Color) = (1,1,1,1)

        [Normal][NoScaleOffset] _BumpMap ("Normal Map (_NormalGL)", 2D) = "bump" {}
        _BumpScale ("Intensite normal", Range(0, 2)) = 1

        [NoScaleOffset] _RoughnessMap ("Roughness (_Roughness)", 2D) = "white" {}
        _Roughness ("Roughness (multiplicateur)", Range(0, 1)) = 1

        [NoScaleOffset] _MetallicMap ("Metallic (_Metalness)", 2D) = "white" {}
        _Metallic ("Metallic (multiplicateur)", Range(0, 1)) = 0

        [NoScaleOffset] _OcclusionMap ("Occlusion (_AmbientOcclusion)", 2D) = "white" {}
        _OcclusionStrength ("Intensite AO", Range(0, 1)) = 1

        [NoScaleOffset] _HeightMap ("Deplacement (_Displacement)", 2D) = "gray" {}
        _HeightAmount ("Amplitude du deplacement", Range(0, 1)) = 0.05
        _HeightMidpoint ("Niveau neutre", Range(0, 1)) = 0.5

        [Header(Tessellation)]
        _TessValue ("Subdivision max", Range(1, 64)) = 16
        _TessMin ("Distance pleine subdivision", Float) = 10
        _TessMax ("Distance sans subdivision", Float) = 25
    }

    SubShader
    {
        Tags { "RenderPipeline"="UniversalPipeline" "RenderType"="Opaque" "Queue"="Geometry" }

        HLSLINCLUDE
        #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"

        TEXTURE2D(_BaseMap);      SAMPLER(sampler_BaseMap);
        TEXTURE2D(_BumpMap);
        TEXTURE2D(_RoughnessMap);
        TEXTURE2D(_MetallicMap);
        TEXTURE2D(_OcclusionMap);
        TEXTURE2D(_HeightMap);    SAMPLER(sampler_HeightMap);

        CBUFFER_START(UnityPerMaterial)
            float4 _BaseMap_ST;
            half4  _BaseColor;
            half   _BumpScale;
            half   _Roughness;
            half   _Metallic;
            half   _OcclusionStrength;
            float  _HeightAmount;
            float  _HeightMidpoint;
            float  _TessValue;
            float  _TessMin;
            float  _TessMax;
        CBUFFER_END

        // ---------- Données de sommet communes à toutes les passes ----------
        struct Attributes
        {
            float4 positionOS : POSITION;
            float3 normalOS   : NORMAL;
            float4 tangentOS  : TANGENT;
            float2 uv         : TEXCOORD0;
            UNITY_VERTEX_INPUT_INSTANCE_ID
        };

        struct ControlPoint
        {
            float4 positionOS : INTERNALTESSPOS;
            float3 normalOS   : NORMAL;
            float4 tangentOS  : TANGENT;
            float2 uv         : TEXCOORD0;
            UNITY_VERTEX_INPUT_INSTANCE_ID
        };

        struct TessFactors
        {
            float edge[3] : SV_TessFactor;
            float inside  : SV_InsideTessFactor;
        };

        // Pousse le sommet le long de sa normale selon la texture de hauteur
        float3 Deplacer(float3 positionOS, float3 normalOS, float2 uv)
        {
            float h = SAMPLE_TEXTURE2D_LOD(_HeightMap, sampler_HeightMap, uv, 0).r;
            return positionOS + normalOS * (h - _HeightMidpoint) * _HeightAmount;
        }

        // ---------- Tessellation (même principe que WorldMat : selon la distance) ----------
        ControlPoint TessVert(Attributes v)
        {
            ControlPoint o;
            UNITY_SETUP_INSTANCE_ID(v);
            UNITY_TRANSFER_INSTANCE_ID(v, o);
            o.positionOS = v.positionOS;
            o.normalOS   = v.normalOS;
            o.tangentOS  = v.tangentOS;
            o.uv         = v.uv;
            return o;
        }

        float FacteurDistance(float4 positionOS)
        {
            float d = distance(TransformObjectToWorld(positionOS.xyz), _WorldSpaceCameraPos);
            return clamp(1.0 - (d - _TessMin) / max(_TessMax - _TessMin, 0.001), 0.01, 1.0) * _TessValue;
        }

        TessFactors PatchConstant(InputPatch<ControlPoint, 3> p)
        {
            float3 f = float3(FacteurDistance(p[0].positionOS),
                              FacteurDistance(p[1].positionOS),
                              FacteurDistance(p[2].positionOS));
            TessFactors o;
            o.edge[0] = 0.5 * (f.y + f.z);
            o.edge[1] = 0.5 * (f.x + f.z);
            o.edge[2] = 0.5 * (f.x + f.y);
            o.inside  = (f.x + f.y + f.z) / 3.0;
            return o;
        }

        [domain("tri")]
        [partitioning("fractional_odd")]
        [outputtopology("triangle_cw")]
        [patchconstantfunc("PatchConstant")]
        [outputcontrolpoints(3)]
        ControlPoint TessHull(InputPatch<ControlPoint, 3> p, uint id : SV_OutputControlPointID)
        {
            return p[id];
        }

        // Reconstruit un sommet à l'intérieur du triangle subdivisé
        Attributes Interpoler(OutputPatch<ControlPoint, 3> p, float3 b)
        {
            Attributes a = (Attributes)0;
            a.positionOS = p[0].positionOS * b.x + p[1].positionOS * b.y + p[2].positionOS * b.z;
            a.normalOS   = normalize(p[0].normalOS * b.x + p[1].normalOS * b.y + p[2].normalOS * b.z);
            a.tangentOS  = p[0].tangentOS * b.x + p[1].tangentOS * b.y + p[2].tangentOS * b.z;
            a.uv         = p[0].uv * b.x + p[1].uv * b.y + p[2].uv * b.z;
            UNITY_TRANSFER_INSTANCE_ID(p[0], a);
            return a;
        }

        // Chaque passe définit Varyings et VertexLogic(Attributes) ; ce domaine les relie.
        #define DOMAINE_TESSELLATION \
            [domain("tri")] \
            Varyings TessDomain(TessFactors f, OutputPatch<ControlPoint, 3> p, float3 b : SV_DomainLocation) \
            { return VertexLogic(Interpoler(p, b)); }
        ENDHLSL

        // ---------------------------------------------------------------- Rendu
        Pass
        {
            Name "ForwardLit"
            Tags { "LightMode"="UniversalForward" }

            HLSLPROGRAM
            #pragma require tessellation tessHW
            #pragma vertex TessVert
            #pragma hull TessHull
            #pragma domain TessDomain
            #pragma fragment frag

            #pragma multi_compile _ _MAIN_LIGHT_SHADOWS _MAIN_LIGHT_SHADOWS_CASCADE
            #pragma multi_compile _ _ADDITIONAL_LIGHTS
            #pragma multi_compile _ _CLUSTER_LIGHT_LOOP
            #pragma multi_compile_fragment _ _ADDITIONAL_LIGHT_SHADOWS
            #pragma multi_compile_fragment _ _SHADOWS_SOFT _SHADOWS_SOFT_LOW _SHADOWS_SOFT_MEDIUM _SHADOWS_SOFT_HIGH
            #pragma multi_compile_fragment _ _SCREEN_SPACE_OCCLUSION
            #pragma multi_compile_fragment _ _REFLECTION_PROBE_BLENDING
            #pragma multi_compile_fragment _ _REFLECTION_PROBE_BOX_PROJECTION
            #pragma multi_compile_fragment _ _REFLECTION_PROBE_ATLAS
            #pragma multi_compile_fragment _ _LIGHT_COOKIES
            #pragma multi_compile_fog
            #pragma multi_compile_instancing

            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Lighting.hlsl"

            struct Varyings
            {
                float4 positionCS : SV_POSITION;
                float2 uv         : TEXCOORD0;
                float3 positionWS : TEXCOORD1;
                float3 normalWS   : TEXCOORD2;
                float4 tangentWS  : TEXCOORD3;
                half   fogFactor  : TEXCOORD4;
                UNITY_VERTEX_INPUT_INSTANCE_ID
            };

            Varyings VertexLogic(Attributes v)
            {
                Varyings o = (Varyings)0;
                UNITY_SETUP_INSTANCE_ID(v);
                UNITY_TRANSFER_INSTANCE_ID(v, o);

                o.uv = TRANSFORM_TEX(v.uv, _BaseMap);
                float3 positionOS = Deplacer(v.positionOS.xyz, v.normalOS, o.uv);

                VertexPositionInputs pos = GetVertexPositionInputs(positionOS);
                VertexNormalInputs   nrm = GetVertexNormalInputs(v.normalOS, v.tangentOS);

                o.positionCS = pos.positionCS;
                o.positionWS = pos.positionWS;
                o.normalWS   = nrm.normalWS;
                o.tangentWS  = float4(nrm.tangentWS, v.tangentOS.w * GetOddNegativeScale());
                o.fogFactor  = ComputeFogFactor(pos.positionCS.z);
                return o;
            }

            DOMAINE_TESSELLATION

            half4 frag(Varyings i) : SV_Target
            {
                UNITY_SETUP_INSTANCE_ID(i);

                half4 albedo    = SAMPLE_TEXTURE2D(_BaseMap, sampler_BaseMap, i.uv) * _BaseColor;
                half3 normalTS  = UnpackNormalScale(SAMPLE_TEXTURE2D(_BumpMap, sampler_BaseMap, i.uv), _BumpScale);
                half  roughness = SAMPLE_TEXTURE2D(_RoughnessMap, sampler_BaseMap, i.uv).r * _Roughness;
                half  metallic  = SAMPLE_TEXTURE2D(_MetallicMap,  sampler_BaseMap, i.uv).r * _Metallic;
                half  occlusion = LerpWhiteTo(SAMPLE_TEXTURE2D(_OcclusionMap, sampler_BaseMap, i.uv).r, _OcclusionStrength);

                float3 bitangent = i.tangentWS.w * cross(i.normalWS, i.tangentWS.xyz);
                half3x3 tbn = half3x3(i.tangentWS.xyz, bitangent, i.normalWS);

                InputData d = (InputData)0;
                d.positionWS              = i.positionWS;
                d.positionCS              = i.positionCS;
                d.normalWS                = NormalizeNormalPerPixel(TransformTangentToWorld(normalTS, tbn));
                d.viewDirectionWS         = GetWorldSpaceNormalizeViewDir(i.positionWS);
                d.shadowCoord             = TransformWorldToShadowCoord(i.positionWS);
                d.fogCoord                = i.fogFactor;
                d.bakedGI                 = SampleSH(d.normalWS);
                d.normalizedScreenSpaceUV = GetNormalizedScreenSpaceUV(i.positionCS);
                d.shadowMask              = half4(1, 1, 1, 1);

                SurfaceData s = (SurfaceData)0;
                s.albedo     = albedo.rgb;
                s.alpha      = 1;
                s.metallic   = metallic;
                s.smoothness = 1 - roughness;   // ambientCG fournit la rugosité : on l'inverse
                s.normalTS   = normalTS;
                s.occlusion  = occlusion;

                half4 c = UniversalFragmentPBR(d, s);
                c.rgb = MixFog(c.rgb, d.fogCoord);
                c.a = 1;
                return c;
            }
            ENDHLSL
        }

        // ---------------------------------------------------------------- Ombres
        Pass
        {
            Name "ShadowCaster"
            Tags { "LightMode"="ShadowCaster" }
            ZWrite On
            ZTest LEqual
            ColorMask 0

            HLSLPROGRAM
            #pragma require tessellation tessHW
            #pragma vertex TessVert
            #pragma hull TessHull
            #pragma domain TessDomain
            #pragma fragment fragVide
            #pragma multi_compile_instancing
            #pragma multi_compile_vertex _ _CASTING_PUNCTUAL_LIGHT_SHADOW

            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Shadows.hlsl"

            float3 _LightDirection;
            float3 _LightPosition;

            struct Varyings { float4 positionCS : SV_POSITION; };

            Varyings VertexLogic(Attributes v)
            {
                UNITY_SETUP_INSTANCE_ID(v);
                Varyings o;
                float3 positionOS = Deplacer(v.positionOS.xyz, v.normalOS, TRANSFORM_TEX(v.uv, _BaseMap));
                float3 positionWS = TransformObjectToWorld(positionOS);
                float3 normalWS   = TransformObjectToWorldNormal(v.normalOS);
                #if _CASTING_PUNCTUAL_LIGHT_SHADOW
                    float3 lightDir = normalize(_LightPosition - positionWS);
                #else
                    float3 lightDir = _LightDirection;
                #endif
                o.positionCS = ApplyShadowClamping(TransformWorldToHClip(ApplyShadowBias(positionWS, normalWS, lightDir)));
                return o;
            }

            DOMAINE_TESSELLATION

            half4 fragVide(Varyings i) : SV_Target { return 0; }
            ENDHLSL
        }

        // ---------------------------------------------------------------- Profondeur
        Pass
        {
            Name "DepthOnly"
            Tags { "LightMode"="DepthOnly" }
            ZWrite On
            ColorMask R

            HLSLPROGRAM
            #pragma require tessellation tessHW
            #pragma vertex TessVert
            #pragma hull TessHull
            #pragma domain TessDomain
            #pragma fragment fragProf
            #pragma multi_compile_instancing

            struct Varyings { float4 positionCS : SV_POSITION; };

            Varyings VertexLogic(Attributes v)
            {
                UNITY_SETUP_INSTANCE_ID(v);
                Varyings o;
                o.positionCS = TransformObjectToHClip(Deplacer(v.positionOS.xyz, v.normalOS, TRANSFORM_TEX(v.uv, _BaseMap)));
                return o;
            }

            DOMAINE_TESSELLATION

            half fragProf(Varyings i) : SV_Target { return i.positionCS.z; }
            ENDHLSL
        }

        // ---------------------------------------------------------------- Profondeur + normales (SSAO, etc.)
        Pass
        {
            Name "DepthNormals"
            Tags { "LightMode"="DepthNormals" }
            ZWrite On

            HLSLPROGRAM
            #pragma require tessellation tessHW
            #pragma vertex TessVert
            #pragma hull TessHull
            #pragma domain TessDomain
            #pragma fragment fragDN
            #pragma multi_compile_instancing
            #pragma multi_compile_fragment _ _GBUFFER_NORMALS_OCT
            #include_with_pragmas "Packages/com.unity.render-pipelines.universal/ShaderLibrary/RenderingLayers.hlsl"

            struct Varyings
            {
                float4 positionCS : SV_POSITION;
                float3 normalWS   : TEXCOORD0;
            };

            Varyings VertexLogic(Attributes v)
            {
                UNITY_SETUP_INSTANCE_ID(v);
                Varyings o;
                o.positionCS = TransformObjectToHClip(Deplacer(v.positionOS.xyz, v.normalOS, TRANSFORM_TEX(v.uv, _BaseMap)));
                o.normalWS   = TransformObjectToWorldNormal(v.normalOS);
                return o;
            }

            DOMAINE_TESSELLATION

            void fragDN(Varyings i
                , out half4 outNormalWS : SV_Target0
            #ifdef _WRITE_RENDERING_LAYERS
                , out uint outRenderingLayers : SV_Target1
            #endif
            )
            {
                float3 n = normalize(i.normalWS);
                #if defined(_GBUFFER_NORMALS_OCT)
                    float2 oct = saturate(PackNormalOctQuadEncode(n) * 0.5 + 0.5);
                    outNormalWS = half4(PackFloat2To888(oct), 0);
                #else
                    outNormalWS = half4(n, 0);
                #endif
                #ifdef _WRITE_RENDERING_LAYERS
                    outRenderingLayers = EncodeMeshRenderingLayer();
                #endif
            }
            ENDHLSL
        }
    }

    FallBack "Hidden/Universal Render Pipeline/FallbackError"
}
