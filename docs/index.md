# Compendium

## Session 1

* [582-111 | Web 1](./582-111-web1)
* [582-121 | Illustration numérique](./582-121–illustration-numerique)

## Session 2

* [582-201 | Design graphique](./582-201-design-graphique)
* [582-211 | Web 2](./582-211-web2)
* [582-212 | Vidéo 1](./582-212-video1)
* [582-214 | Animation 2D](./582-214-animation2d-jf-mm)

## Session 3

* [582-301 | Interactivité ludique](./582-301-interactivite-ludique)
* [582-311 | Web 3](./582-311-web3)
* [582-312 | Vidéo 2](./582-312–video2)

## Session 4

* [582-401 | Réalité mixte](./582-401-realite-mixte)
* [582-411 | Web 4](./582-411-web4)

## Session 5

* [582-511 | Web 5](./582-511-web5)
* [582-533 | Controle qualité](./582-533-controle-qualite)
* [582-541 | Préparation en milieu de travail](./582-541–preparation-milieu-travail)

 <!-- Container where the browser information will be displayed -->
  <div id="browser-info-display" style="padding: 15px; margin: 20px; border: 1px solid #ccc; background: #f9f9f9; font-family: monospace; white-space: pre-wrap;">
    Loading browser data...
  </div>

  <script>
    (async function() {
      const display = document.getElementById('browser-info-display');
      
      // 1. Gather basic, universally available information
      let info = {
        "User Agent String": navigator.userAgent,
        "Language": navigator.language,
        "Cookies Enabled": navigator.cookieEnabled,
        "Online Status": navigator.onLine,
        "Screen Resolution": `${window.screen.width}x${window.screen.height}`,
        "Window Inner Size": `${window.innerWidth}x${window.innerHeight}`,
        "Device Memory (GB approx)": navigator.deviceMemory || "N/A",
        "Hardware Concurrency (CPU Cores)": navigator.hardwareConcurrency || "N/A"
      };

      // 2. Gather modern Client Hints if the browser supports it
      if (navigator.userAgentData) {
        info["Modern Data (High-Level)"] = {
          "Mobile Device": navigator.userAgentData.mobile,
          "Platform/OS": navigator.userAgentData.platform,
          "Brands": navigator.userAgentData.brands.map(b => `${b.brand} (v${b.version})`)
        };

        // Optional: Request high-entropy (detailed) modern data (async)
        try {
          const highEntropyData = await navigator.userAgentData.getHighEntropyValues([
            "architecture", 
            "model", 
            "platformVersion", 
            "uaFullVersion"
          ]);
          info["Modern Data (Detailed)"] = highEntropyData;
        } catch (e) {
          info["Modern Data (Detailed)"] = "Permission denied or error fetching.";
        }
      } else {
        info["Modern Data"] = "Client Hints API not supported by this browser (e.g., Safari/Firefox).";
      }

      // 3. Format and print the object neatly onto the page
      display.textContent = JSON.stringify(info, null, 2);
    })();
  </script>