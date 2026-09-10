<style>
/* =========================
   Styles de projet (ajout temporaire Marie-Michelle)
   ========================= */

:root{
  --proj-coral: oklch(72% 0.14 27);
  --proj-teal: oklch(72% 0.12 200);
  --proj-amber: oklch(76% 0.12 85);
  --proj-card-bg: oklch(24% 0.016 264);
  --proj-card-border: oklch(30% 0.018 264);
  --proj-text: oklch(80% 0.006 264);
  --proj-text-dim: oklch(72% 0.008 264);
  --proj-text-faint: oklch(60% 0.008 264);
  --proj-divider: oklch(28% 0.015 264);
  --proj-divider-2: oklch(32% 0.02 264);
}
.proj-content{font-family:-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:var(--proj-text);max-width:900px;}
.proj-content h1{font-size:26px;font-weight:800;letter-spacing:.01em;margin:0 0 16px;color:#fff;}
.proj-content h2{font-size:18px;font-weight:700;color:#fff;margin:32px 0 16px;padding-top:20px;border-top:1px solid var(--proj-divider);}
.proj-content p{font-size:14.5px;line-height:1.75;margin:0 0 10px;}

/* repere badges under h1 */
.proj-badges{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:26px;}
.proj-badge{display:flex;align-items:center;gap:8px;background:var(--proj-card-bg);border:1px solid var(--proj-divider-2);border-radius:6px;padding:8px 14px;font-size:12.5px;}
.proj-badge strong{color:#fff;}
.proj-badge svg{flex:none;}

/* role / tech cards grid */
.proj-role-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;}
.proj-role-card{background:var(--proj-card-bg);border:1px solid var(--proj-card-border);border-radius:8px;padding:16px;}
.proj-role-head{display:flex;align-items:center;gap:8px;margin-bottom:10px;}
.proj-role-head span{font-weight:700;font-size:13.5px;color:#fff;}

/* checklists (checkmark bullets) */
.proj-check-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px;}
.proj-check-list li{position:relative;padding-left:22px;font-size:12px;line-height:1.5;color:var(--proj-text-dim);}
.proj-check-list li::before{content:"✓";position:absolute;left:0;top:0;width:15px;height:15px;font-size:11px;font-weight:700;color:var(--proj-coral);border:1.5px solid var(--proj-coral);border-radius:4px;display:flex;align-items:center;justify-content:center;line-height:1;}
.proj-check-grid-2{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:1fr 1fr;gap:8px 20px;}
.proj-check-grid-2 li{position:relative;padding-left:22px;font-size:12.5px;line-height:1.5;color:var(--proj-text);}
.proj-check-grid-2 li::before{content:"✓";position:absolute;left:0;top:1px;width:15px;height:15px;font-size:10px;font-weight:700;color:#fff;background:var(--proj-coral);border-radius:50%;display:flex;align-items:center;justify-content:center;line-height:1;}

.proj-block{margin-bottom:24px;}
.proj-block-title{font-weight:700;font-size:14px;color:#fff;margin-bottom:10px;}
.proj-subtext{font-size:12.5px;color:var(--proj-text-dim);line-height:1.6;margin:0 0 12px;}

/* callout boxes (format livrable, IA) */
.proj-callout{display:flex;gap:10px;background:transparent;padding:0;margin-bottom:16px;font-size:13.5px;line-height:1.65;color:var(--proj-text);}
.proj-callout svg{flex:none;margin-top:2px;}
.proj-callout strong{color:#fff;}
.proj-callout-amber{background:oklch(25% 0.025 55);border:1px solid oklch(35% 0.03 55);border-radius:8px;padding:14px 16px;font-size:12.5px;color:oklch(82% 0.01 85);}
.proj-callout-amber strong{color:#fff;}

/* tech choices tile grid */
.proj-tech-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;}
.proj-tech-tile{background:var(--proj-card-bg);border:1px solid var(--proj-card-border);border-radius:8px;padding:12px;}
.proj-tech-tile svg{margin-bottom:6px;}
.proj-tech-tile .proj-tech-name{font-size:11.5px;font-weight:700;color:#fff;margin-bottom:3px;}
.proj-tech-tile .proj-tech-desc{font-size:11px;line-height:1.5;color:var(--proj-text-dim);}

/* journal de bord numbered timeline */
.proj-timeline{position:relative;padding-left:6px;}
.proj-timeline::before{content:"";position:absolute;left:15px;top:4px;bottom:4px;width:1px;background:var(--proj-divider-2);}
.proj-timeline ol{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:12px;}
.proj-timeline li{position:relative;display:flex;gap:14px;align-items:flex-start;font-size:13px;color:var(--proj-text);}
.proj-timeline li .proj-num{position:relative;z-index:1;flex:none;width:30px;height:30px;border-radius:50%;background:oklch(30% 0.02 264);border:1px solid oklch(38% 0.02 264);color:var(--proj-coral);font-weight:700;font-size:12.5px;display:flex;align-items:center;justify-content:center;}
.proj-timeline li .proj-q{padding-top:5px;}

.proj-two-col{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px;}
.proj-mini-card{background:var(--proj-card-bg);border:1px solid var(--proj-card-border);border-radius:8px;padding:14px;}
.proj-mini-card-head{display:flex;gap:8px;align-items:center;margin-bottom:6px;}
.proj-mini-card-head strong{font-size:13px;color:#fff;}
.proj-mini-card p{font-size:12px;line-height:1.6;color:var(--proj-text-dim);margin:0;}

/* stat block (40%) */
.proj-stat-block{display:flex;align-items:center;gap:18px;background:var(--proj-card-bg);border:1px solid var(--proj-card-border);border-radius:8px;padding:16px 20px;}
.proj-stat-block .proj-stat{font-size:34px;font-weight:800;color:var(--proj-coral);flex:none;}
.proj-stat-block p{font-size:13px;line-height:1.65;margin:0;}
.proj-stat-block strong{color:#fff;}

/* section labels (formative / sommative) */
.proj-section-label{display:flex;align-items:center;gap:8px;margin-bottom:14px;font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;}
.proj-section-label::before{content:"";width:9px;height:9px;border-radius:50%;flex:none;}
.proj-label-teal{color:var(--proj-teal);}
.proj-label-teal::before{background:var(--proj-teal);}
.proj-label-coral{color:var(--proj-coral);}
.proj-label-coral::before{background:var(--proj-coral);}
.proj-indent{margin:-6px 0 18px 17px;}

/* 3-step stepper */
.proj-stepper{position:relative;display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:6px;}
.proj-stepper::before{content:"";position:absolute;top:16px;left:25%;right:25%;height:2px;background:var(--proj-divider-2);z-index:0;}
.proj-step{position:relative;z-index:1;text-align:center;}
.proj-step .proj-step-num{width:32px;height:32px;border-radius:50%;background:oklch(28% 0.02 264);border:2px solid var(--proj-teal);color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;margin:0 auto 8px;font-size:13px;}
.proj-step .proj-step-week{font-size:11px;font-weight:700;color:var(--proj-teal);text-transform:uppercase;letter-spacing:.03em;}
.proj-step .proj-step-title{font-size:12px;font-weight:700;color:#fff;margin-top:2px;}

.proj-deliverable-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;font-size:11.5px;line-height:1.55;color:var(--proj-text-dim);margin-bottom:28px;}
.proj-deliverable-grid ul{margin:0;padding:0 6px 0 18px;}
.proj-deliverable-grid li{margin-bottom:5px;}

/* final summative block */
.proj-final-block{display:flex;gap:18px;align-items:center;background:oklch(25% 0.028 27);border:1px solid oklch(38% 0.05 27);border-radius:10px;padding:18px 22px;}
.proj-final-block .proj-final-num{flex:none;display:flex;flex-direction:column;align-items:center;}
.proj-final-block .proj-final-circle{width:46px;height:46px;border-radius:50%;background:var(--proj-coral);color:#fff;font-weight:800;display:flex;align-items:center;justify-content:center;font-size:15px;margin-bottom:6px;}
.proj-final-block .proj-final-week{font-size:11px;font-weight:800;color:var(--proj-coral);text-transform:uppercase;letter-spacing:.03em;white-space:nowrap;}
.proj-final-block .proj-final-dates{font-size:10px;font-weight:600;color:var(--proj-text-dim);text-transform:none;letter-spacing:0;white-space:nowrap;margin-top:3px;}
.proj-final-block .proj-final-text{font-size:13px;line-height:1.6;color:oklch(85% 0.006 264);}
.proj-final-block .proj-final-text strong{color:#fff;display:block;margin-bottom:6px;}
.proj-final-block ul{margin:0;padding-left:18px;}
.proj-final-block li{margin-bottom:4px;}

@media (max-width:700px){
  .proj-role-grid,.proj-tech-grid,.proj-check-grid-2,.proj-two-col,.proj-deliverable-grid,.proj-stepper{grid-template-columns:1fr;}
  .proj-stepper::before{display:none;}
}

#proj1a.proj-content h2{font-size:18px;font-weight:700;margin:32px 0 16px;padding-top:20px;border-top:1px solid var(--proj-divider);color:#fff;}
#proj1a.proj-content ul,
#proj1a.proj-content ol{margin:0;padding:0;}
#proj1a.proj-content li{margin:0;}
#proj1a.proj-content .proj-check-list,
#proj1a.proj-content .proj-check-grid-2{list-style:none;}
#proj1a.proj-content .proj-check-list li,
#proj1a.proj-content .proj-check-grid-2 li{padding-left:22px;}
#proj1a.proj-content .proj-deliverable-grid ul{padding:0 6px 0 18px;}
#proj1a.proj-content .proj-final-block ul{padding-left:18px;}
#proj1a.proj-content .proj-timeline ol{padding:0;}
#proj1a.proj-content .proj-timeline li{padding-left:0;}
#proj1a.proj-content,
#proj1a.proj-content *,
#proj1a.proj-content *::before,
#proj1a.proj-content *::after{box-sizing:border-box;}
#proj1a.proj-content{display:block;float:none;columns:auto;width:auto;}
#proj1a.proj-content > *{float:none;clear:both;width:auto;max-width:100%;position:static;}
#proj1a.proj-content > .proj-badges{display:flex;}
#proj1a.proj-content > .proj-role-grid{display:grid;grid-template-columns:repeat(3,1fr);}
#proj1a.proj-content > .proj-two-col{display:grid;grid-template-columns:1fr 1fr;}
#proj1a.proj-content > .proj-stat-block{display:flex;}
#proj1a.proj-content > .proj-section-label{display:flex;}
#proj1a.proj-content > .proj-stepper{display:grid;grid-template-columns:repeat(2,1fr);position:relative;}
#proj1a.proj-content > .proj-deliverable-grid{display:grid;grid-template-columns:repeat(2,1fr);}
#proj1a.proj-content > .proj-final-block{display:flex;}
#proj1a.proj-content > .proj-callout{display:flex;}
#proj1a.proj-content > .proj-callout-amber{display:block;}
#proj1a.proj-content .proj-role-grid > *,
#proj1a.proj-content .proj-tech-grid > *,
#proj1a.proj-content .proj-two-col > *,
#proj1a.proj-content .proj-deliverable-grid > *,
#proj1a.proj-content .proj-stepper > *{min-width:0;float:none;}
#proj1a.proj-content .proj-final-block > .proj-final-text{flex:1;min-width:0;}
#proj1a.proj-content .proj-final-block > .proj-final-num{flex:none;}
/* listes de liens de référence (inspirations, tendances, portfolios) : taille du texte courant, liens gris pâle */
.proj-ref-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px;}
.proj-ref-list li{font-size:14.5px;line-height:1.75;color:var(--proj-text);}
.proj-ref-list a{color:var(--proj-text-dim);text-decoration:underline;}

#proj1a.proj-content h3{font-size:16px !important;font-weight:600 !important;}
</style>



<div class="proj-content" id="proj1a">

<h1>Projet Portfolio : consignes sommaires</h1>

<div class="proj-badges">
  <div class="proj-badge"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--proj-coral)" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5L16 9"/></svg><span><strong>40%</strong> de la note finale</span></div>
  <div class="proj-badge"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--proj-coral)" stroke-width="1.8"><circle cx="9" cy="8" r="3"/><path d="M4 20c0-3.3 2.2-5.5 5-5.5s5 2.2 5 5.5"/></svg><span>Évaluation <strong>individuelle</strong></span></div>
  <div class="proj-badge"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--proj-coral)" stroke-width="1.8"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/></svg><span>Remise finale <strong>semaine 7</strong></span></div>
</div>

<p>Vous êtes un·e intégrateur·rice multimédia junior sur le point de postuler pour un premier stage dans une agence web ou une entreprise créative. Pour convaincre un employeur potentiel de vous accorder une entrevue, vous devez lui soumettre votre portfolio en ligne : votre carte de visite numérique.</p>
<p>Soumettre un portfolio, ce n'est pas seulement livrer un beau site. C'est démontrer que vous savez concevoir un produit web de qualité professionnelle, de la planification initiale jusqu'au contrôle de la qualité finale, en prenant des décisions techniques réfléchies et en étant capable de les justifier.</p>
<p style="margin-bottom:30px;">À la mi-session, vous présenterez votre portfolio devant un jury composé de votre enseignante et, si possible, d'un·e professionnel·le invité·e du milieu, qui incarnera le rôle de l'employeur potentiel.</p>

<h2>Responsabilités</h2>
<div class="proj-role-grid">
  <div class="proj-role-card">
    <div class="proj-role-head"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--proj-coral)" stroke-width="1.8"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.9 3.1-6.5 7-6.5s7 2.6 7 6.5"/></svg><span>Étudiant·e</span></div>
    <ul class="proj-check-list">
      <li>Planifier et justifier ses choix technologiques</li>
      <li>Concevoir les maquettes</li>
      <li>Développer et commenter le code</li>
      <li>Tenir un journal de bord</li>
      <li>Utiliser Git</li>
      <li>Mener le contrôle de qualité</li>
      <li>Déployer</li>
      <li>Défendre devant le jury</li>
    </ul>
  </div>
  <div class="proj-role-card">
    <div class="proj-role-head"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--proj-teal)" stroke-width="1.8"><rect x="4" y="4" width="16" height="12" rx="1.5"/><path d="M9 20h6M12 16v4"/></svg><span>Enseignante</span></div>
    <ul class="proj-check-list">
      <li>Fournir consignes, journal et grilles</li>
      <li>Offrir la rétroaction (collective puis individuelle)</li>
      <li>Coordonner l'invité·e</li>
      <li>Évaluer selon la grille critériée</li>
    </ul>
  </div>
  <div class="proj-role-card">
    <div class="proj-role-head"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--proj-amber)" stroke-width="1.8"><path d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8z"/></svg><span>Invité·e (le cas échéant)</span></div>
    <ul class="proj-check-list">
      <li>Jouer le rôle de l'employeur·e potentiel·le</li>
      <li>Poser des questions sur les choix de conception</li>
      <li>Offrir une rétroaction informelle du milieu</li>
    </ul>
  </div>
</div>

<h2>Consignes</h2>

<div class="proj-callout">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--proj-coral)" stroke-width="1.8"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/></svg>
  <div><strong>Format du livrable</strong> : un site fait entièrement à la main, sans CMS ni thème préfabriqué. C'est ce qui démontre le mieux que vous savez concevoir et coder un site de zéro, une compétence directement valorisée par les employeurs du milieu.</div>
</div>

<div class="proj-block">
  <div class="proj-block-title">Base obligatoire pour tous</div>
  <ul class="proj-check-grid-2">
    <li>Dépôt GitHub, commits réguliers et bien nommés</li>
    <li>Site responsive (mobile et desktop), sans bogue majeur</li>
    <li>Code commenté dans vos propres mots</li>
    <li>Déploiement en ligne (GitHub Pages recommandé)</li>
    <li>Planification documentée (<em>PLANIFICATION.md</em>)</li>
    <li>Journal de bord complété (<em>JOURNAL.md</em>)</li>
    <li>Démarche de contrôle de qualité documentée</li>
  </ul>
</div>

<div class="proj-block">
  <div class="proj-block-title">Vos choix technologiques : à justifier dans votre planification</div>
  <p class="proj-subtext">Pour chacun des éléments suivants, choisissez l'approche qui convient le mieux à votre projet et expliquez la raison dans <em>PLANIFICATION.md</em> :</p>
  <div class="proj-tech-grid">
    <div class="proj-tech-tile"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--proj-coral)" stroke-width="1.7"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></svg><div class="proj-tech-name">Données</div><div class="proj-tech-desc">BD ou fichier externe (JSON), affiché de façon asynchrone.</div></div>

    <div class="proj-tech-tile"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--proj-amber)" stroke-width="1.7"><path d="M4 18l5-9 3 5 2-3 6 7"/></svg><div class="proj-tech-name">Animations</div><div class="proj-tech-desc">GSAP, une autre librairie, ou CSS pur. Précisez quoi animer, comment, sur quel événement.</div></div>
    <div class="proj-tech-tile"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--proj-coral)" stroke-width="1.7"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h4M13 8.5l3-1.5M13 15.5l3 1.5"/></svg><div class="proj-tech-name">Navigation</div><div class="proj-tech-desc">One-pager, multipages, ou autre.</div></div>
    <div class="proj-tech-tile"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--proj-teal)" stroke-width="1.7"><path d="M4 14a5 5 0 015-5 4 4 0 018 0 4 4 0 010 8H6a4 4 0 01-2-7.5"/></svg><div class="proj-tech-name">Hébergement</div><div class="proj-tech-desc">GitHub Pages ou un autre service.</div></div>
  </div>
</div>

<div class="proj-block">
  <div class="proj-block-title">Journal de bord : 5 questions à chaque bloc de cours</div>
  <div class="proj-timeline">
    <ol>
      <li><span class="proj-num">1</span><span class="proj-q">Qu'est-ce que j'ai accompli depuis le dernier bloc?</span></li>
      <li><span class="proj-num">2</span><span class="proj-q">Quelle a été ma principale difficulté et comment je l'ai surmontée?</span></li>
      <li><span class="proj-num">3</span><span class="proj-q">Qu'est-ce que j'ai appris que je ne savais pas avant?</span></li>
      <li><span class="proj-num">4</span><span class="proj-q">Quelle est ma prochaine étape concrète?</span></li>
      <li><span class="proj-num">5</span><span class="proj-q">Est-ce que j'ai utilisé l'IA? Si oui, pour quoi et qu'est-ce que ça m'a appris?</span></li>
    </ol>
  </div>
</div>

<div class="proj-two-col">
  <div class="proj-mini-card">
    <div class="proj-mini-card-head"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--proj-coral)" stroke-width="1.8"><path d="M9 11l2 2 4-4"/><path d="M20.5 12A8.5 8.5 0 1112 3.5"/></svg><strong>Auto-évaluation</strong></div>
    <p>À l'aide de la grille critériée fournie, vous évaluez vous-même votre portfolio avant la remise 3.</p>
  </div>
  <div class="proj-mini-card">
    <div class="proj-mini-card-head"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--proj-teal)" stroke-width="1.8"><circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-3 2.2-5 5-5s5 2 5 5M14 15.5c2.6.2 4.5 1.8 4.5 4.5"/></svg><strong>Tests par les pairs</strong></div>
    <p>Un·e collègue teste votre portfolio à partir d'une grille guidée; vous documentez les correctifs apportés.</p>
  </div>
</div>

<div class="proj-callout proj-callout-amber" style="margin-bottom:32px;" id="utilisation-de-lia">
  <h3>Utilisation de l'IA</h3>
  <p>Utilisation de l'IA : permise pour vous aider à apprendre et à déboguer, mais pas pour remplacer votre compréhension. Tout usage doit être documenté dans le journal de bord. Vous devez en tout temps être en mesure d'expliquer et de modifier votre code en direct.</p>

  <h3>Comment citer?</h3>

  <p>Pour ce cours, cette citation se fait directement dans votre <code>JOURNAL.md</code>.</p>

  <p>Vous ne devez pas inclure les autocomplétions de Copilot (VS Code) dans votre journal, mais vous devez inclure toute question posée à l'IA que ce soit avec Co-Pilot intégré VS Code ou autre outil IAG (Figma, ChatGPT, etc.).</p>

  <h3>Éléments à inclure</h3>

  -<strong>Date :</strong> La date précise du prompt ou de la question posée à l'IA.<br>
  -<strong>Prompt :</strong> Le texte exact utilisé en <em>italique</em>.<br>
  -<strong>Outil :</strong> Le nom du logiciel utilisé.<br>
  -<strong>Résultat :</strong> Une description de ce que l'IA a généré, et ce que vous avez fait avec ce résultat (accepté tel quel, modifié, rejeté, etc.).

  <br>

</div>

<h2>Critères d'évaluation</h2>
<div class="proj-stat-block" style="margin-bottom:32px;">
  <div class="proj-stat">40%</div>
  <p>de la note finale du cours Web 5, évalué de façon <strong>individuelle</strong> (100% de la note est individuelle).</p>
</div>

<style>
.proj-rubric-intro{margin:0 0 8px;}
.proj-rubric-crit{margin:26px 0 10px;}
.proj-rubric-crit-head{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;margin-bottom:10px;}
.proj-rubric-crit-head .num{font-size:13px;font-weight:800;color:var(--proj-coral);}
.proj-rubric-crit-head .title{font-size:15px;font-weight:700;color:var(--proj-text);}
.proj-rubric-crit-head .meta{font-size:11px;font-weight:700;letter-spacing:.03em;text-transform:uppercase;color:var(--proj-text-faint);}
.proj-rubric-scroll{overflow-x:auto;border:1px solid var(--proj-card-border);border-radius:10px;}
table.proj-rubric{border-collapse:collapse;width:100%;min-width:880px;font-size:11.5px;line-height:1.5;color:var(--proj-text-dim);margin:0;}
table.proj-rubric th,table.proj-rubric td{border:1px solid var(--proj-divider);padding:8px 10px;vertical-align:top;text-align:left;}
table.proj-rubric thead th{font-size:10.5px;font-weight:800;letter-spacing:.03em;text-transform:uppercase;background:var(--proj-card-bg);}
table.proj-rubric th.ind-col{width:22%;color:var(--proj-text);}
table.proj-rubric td.ind{font-weight:600;color:var(--proj-text);background:var(--proj-card-bg);width:22%;}
table.proj-rubric th.lv-insuff{color:var(--proj-coral);}
table.proj-rubric th.lv-accept{color:var(--proj-amber);}
table.proj-rubric th.lv-tb{color:var(--proj-teal);}
table.proj-rubric th.lv-exc{color:var(--proj-teal);}
.proj-rubric-note{font-size:12px;color:var(--proj-text-faint);margin:16px 0 0;}
</style>
<p class="proj-rubric-intro">Votre portfolio est évalué selon la grille critériée suivante. La qualité de la langue est évaluée séparément. Total : /40.</p>
<div class="proj-rubric-crit">
  <div class="proj-rubric-crit-head"><span class="num">1</span><span class="title">Conception structurée et complète du projet</span><span class="meta">015T · /15</span></div>
  <div class="proj-rubric-scroll">
    <table class="proj-rubric">
      <thead><tr><th class="ind-col">Indicateur</th><th class="lv-insuff">Insuffisant</th><th class="lv-accept">Acceptable</th><th class="lv-tb">Très bien</th><th class="lv-exc">Excellent</th></tr></thead>
      <tbody>
        <tr><td class="ind">Proposition d'une interface cohérente sur le plan visuel (palette de couleurs, typographie, hiérarchie visuelle) qui reflète l'identité du portfolio et facilite la lecture du contenu.</td><td>L'interface présente une cohérence visuelle insuffisante (palette de couleurs, typographie, hiérarchie visuelle) : les choix nuisent à la lecture du contenu ou ne reflètent pas l'identité du portfolio.</td><td>L'interface présente une cohérence visuelle partielle (palette de couleurs, typographie, hiérarchie visuelle) : certains éléments facilitent la lecture du contenu, mais l'ensemble manque d'harmonie.</td><td>L'interface présente une cohérence visuelle satisfaisante (palette de couleurs, typographie, hiérarchie visuelle) qui reflète l'identité du portfolio et facilite la lecture du contenu.</td><td>L'interface présente une cohérence visuelle remarquable (palette de couleurs, typographie, hiérarchie visuelle) qui reflète clairement l'identité du portfolio et optimise la lecture du contenu.</td></tr>
        <tr><td class="ind">Planification de l'arborescence du site et structuration logique des pages/sections, démontrée par un document de planification.</td><td>La structuration des pages/sections est peu logique ou incomplète : le document de planification est absent ou très lacunaire.</td><td>La structuration des pages/sections est partiellement logique : le document de planification présente quelques lacunes qui nuisent à la compréhension de l'arborescence.</td><td>La structuration des pages/sections est logique et démontrée par un document de planification clair (plan du site, wireframe ou schéma).</td><td>La structuration des pages/sections est rigoureusement logique et démontrée par un document de planification complet et précis qui facilite une compréhension immédiate de l'arborescence.</td></tr>
        <tr><td class="ind">Justification adéquate de chaque technologie choisie (langages, librairies, outils) en fonction des besoins spécifiques du projet.</td><td>La justification des technologies choisies est absente ou ne tient pas compte des besoins spécifiques du projet.</td><td>La justification des technologies choisies est sommaire : le lien avec les besoins spécifiques du projet est établi pour certaines technologies seulement.</td><td>La justification de chaque technologie choisie est adéquate et démontre un lien clair avec les besoins spécifiques du projet.</td><td>La justification de chaque technologie choisie est rigoureuse et approfondie, démontrant un lien précis et pertinent avec les besoins spécifiques du projet.</td></tr>
        <tr><td class="ind">Organisation des fichiers selon une structure de dossiers cohérente et une convention de nommage uniforme facilitant le repérage des ressources.</td><td>La structure de dossiers présente des incohérences et la convention de nommage est peu uniforme, ce qui rend le repérage des ressources difficile.</td><td>La structure de dossiers est partiellement cohérente et la convention de nommage est partiellement uniforme, ce qui complique parfois le repérage des ressources.</td><td>La structure de dossiers est cohérente et la convention de nommage est uniforme, facilitant le repérage des ressources.</td><td>La structure de dossiers est rigoureusement cohérente et la convention de nommage parfaitement uniforme, ce qui rend le repérage des ressources immédiat et intuitif.</td></tr>
        <tr><td class="ind">Traitement optimisé des médias pour le web : format adapté à l'usage, compression appropriée (poids réduit sans perte visuelle notable), dimensions adéquates.</td><td>Le traitement des médias n'est pas optimisé pour le web : formats inadaptés, compression absente ou excessive (perte de qualité visible) et/ou dimensions inadéquates.</td><td>Le traitement des médias est partiellement optimisé pour le web : certains formats, compressions ou dimensions sont à revoir.</td><td>Le traitement des médias est optimisé pour le web : formats adaptés à l'usage, compression appropriée (poids réduit sans perte visuelle notable) et dimensions adéquates.</td><td>Le traitement des médias est optimisé de façon exemplaire pour le web : formats parfaitement adaptés, compression maximisée sans aucune perte visuelle perceptible et dimensions précisément adéquates.</td></tr>
        <tr><td class="ind">Justification orale, devant le jury, des choix de conception et de réalisation du portfolio (design, structure, choix techniques), en réponse aux questions posées.</td><td>Lors de la présentation devant le jury, la personne étudiante ne parvient pas à expliquer ses choix ou les justifie de façon erronée; elle ne répond pas aux questions ou démontre qu'elle ne maîtrise pas le contenu présenté (par exemple, du code qu'elle ne comprend pas).</td><td>Lors de la présentation devant le jury, la personne étudiante explique ses principaux choix et répond aux questions, mais ses justifications restent superficielles ou incomplètes; elle comprend l'essentiel de son travail, avec quelques hésitations.</td><td>Lors de la présentation devant le jury, la personne étudiante justifie clairement ses choix de conception et de réalisation et répond aux questions avec assurance; ses explications sont pertinentes et démontrent une bonne compréhension de son travail.</td><td>Lors de la présentation devant le jury, la personne étudiante justifie ses choix avec rigueur et nuance, en établissant des liens avec les besoins des personnes représentatives visées; elle répond aux questions avec aisance et démontre une maîtrise complète de son travail, y compris ses choix techniques non évidents.</td></tr>
      </tbody>
    </table>
  </div>
</div>
<div class="proj-rubric-crit">
  <div class="proj-rubric-crit-head"><span class="num">2</span><span class="title">Programmation fonctionnelle et optimale de l'interactivité de l'interface</span><span class="meta">015T · /15</span></div>
  <div class="proj-rubric-scroll">
    <table class="proj-rubric">
      <thead><tr><th class="ind-col">Indicateur</th><th class="lv-insuff">Insuffisant</th><th class="lv-accept">Acceptable</th><th class="lv-tb">Très bien</th><th class="lv-exc">Excellent</th></tr></thead>
      <tbody>
        <tr><td class="ind">Codification d'une mise en page flexible et adaptative (responsive) assurant un affichage cohérent sur mobile, tablette et ordinateur.</td><td>La mise en page est peu adaptative (responsive) et présente des problèmes d'affichage importants sur au moins un type d'appareil (mobile, tablette, ordinateur).</td><td>La mise en page est partiellement adaptative (responsive) : l'affichage est cohérent sur certains appareils seulement, avec quelques problèmes visibles.</td><td>La mise en page est flexible et adaptative (responsive), assurant un affichage cohérent sur mobile, tablette et ordinateur.</td><td>La mise en page est flexible et parfaitement adaptative (responsive), assurant un affichage cohérent et optimisé sur l'ensemble des formats d'écran testés.</td></tr>
        <tr><td class="ind">Programmation d'une navigation fonctionnelle (menu, liens, ancres) et d'éléments interactifs qui répondent correctement aux actions de l'utilisateur, sans erreur bloquante.</td><td>La navigation et/ou les éléments interactifs présentent des erreurs bloquantes qui empêchent l'utilisation normale de l'interface.</td><td>La navigation et les éléments interactifs fonctionnent globalement, mais présentent quelques erreurs mineures non bloquantes.</td><td>La navigation (menu, liens, ancres) et les éléments interactifs sont fonctionnels et répondent correctement aux actions de l'utilisateur, sans erreur bloquante.</td><td>La navigation et les éléments interactifs sont entièrement fonctionnels et répondent avec précision et fluidité à toutes les actions de l'utilisateur, sans aucune erreur.</td></tr>
        <tr><td class="ind">Application rigoureuse des normes d'accessibilité WCAG, niveau AA: balises sémantiques HTML5, attributs alt, contraste suffisant, navigation au clavier fonctionnelle.</td><td>Les normes d'accessibilité WCAG (niveau AA) sont peu appliquées : les balises sémantiques, les attributs alt, le contraste et la navigation au clavier présentent plusieurs lacunes importantes.</td><td>Les normes d'accessibilité WCAG (niveau AA) sont partiellement appliquées : certains éléments (balises sémantiques, attributs alt, contraste, navigation au clavier) sont manquants ou incomplets.</td><td>Les normes d'accessibilité WCAG (niveau AA) sont appliquées de façon rigoureuse : balises sémantiques HTML5, attributs alt, contraste suffisant et navigation au clavier fonctionnelle.</td><td>Les normes d'accessibilité WCAG (niveau AA) sont appliquées de façon rigoureuse et systématique sur l'ensemble du site, sans aucune exception.</td></tr>
        <tr><td class="ind">Insertion de commentaires pertinents (HTML/CSS/JS) expliquant le rôle des sections principales, des fonctions complexes et des choix techniques non évidents.</td><td>Les commentaires dans le code sont rare ou peu pertinents : le rôle des sections principales, des fonctions complexes ou des choix techniques est peu expliqué.</td><td>Les commentaires dans le code sont présents mais inconstants : certaines sections principales, fonctions complexes ou choix techniques importants ne sont pas expliqués.</td><td>Les commentaires insérés dans le code sont pertinents et expliquent le rôle des sections principales, des fonctions complexes et des choix techniques non évidents.</td><td>Les commentaires insérés dans le code sont pertinents, précis et systématiques, expliquant clairement l'ensemble des sections principales, des fonctions complexes et des choix techniques non évidents.</td></tr>
        <tr><td class="ind">Programmation d'un chargement efficace des données du portfolio limitant la duplication de code et le temps de chargement perçu.</td><td>Le chargement des données du portfolio est peu efficace : duplication importante de code et/ou temps de chargement perçu élevé.</td><td>Le chargement des données du portfolio est partiellement efficace : certaines duplications de code subsistent ou le temps de chargement perçu pourrait être amélioré.</td><td>Le chargement des données du portfolio est programmé de façon efficace, limitant la duplication de code et le temps de chargement perçu.</td><td>Le chargement des données du portfolio est programmé de façon particulièrement efficace, minimisant la duplication de code et réduisant au maximum le temps de chargement perçu.</td></tr>
      </tbody>
    </table>
  </div>
</div>
<div class="proj-rubric-crit">
  <div class="proj-rubric-crit-head"><span class="num">3</span><span class="title">Contrôle rigoureux de la qualité du portfolio</span><span class="meta">015Q · /10</span></div>
  <div class="proj-rubric-scroll">
    <table class="proj-rubric">
      <thead><tr><th class="ind-col">Indicateur</th><th class="lv-insuff">Insuffisant</th><th class="lv-accept">Acceptable</th><th class="lv-tb">Très bien</th><th class="lv-exc">Excellent</th></tr></thead>
      <tbody>
        <tr><td class="ind">Vérification rigoureuse et exhaustive de l'expérience utilisateur (clarté de la navigation, lisibilité du contenu et attrait visuel) ainsi que du bon fonctionnement des fonctionnalités (liens, formulaires et scripts) auprès d'au moins trois personnes différentes et représentatives, chacune utilisant un navigateur ou un appareil différent.</td><td>La vérification de l'expérience utilisateur et du bon fonctionnement des fonctionnalités est sommaire : moins de trois personnes différentes ont participé aux tests et les fonctionnalités ont été testées sur un seul navigateur ou appareil.</td><td>La vérification de l'expérience utilisateur et du bon fonctionnement des fonctionnalités est réalisée auprès d'au moins trois personnes différentes, chacune utilisant un navigateur ou un appareil différent, mais la couverture des aspects est partielle.</td><td>La vérification de l'expérience utilisateur et du bon fonctionnement des fonctionnalités est rigoureuse et exhaustive, réalisée auprès d'au moins trois personnes différentes, chacune utilisant un navigateur ou un appareil différent.</td><td>La vérification de l'expérience utilisateur et du bon fonctionnement des fonctionnalités est rigoureuse, approfondie et systématique, réalisée auprès d'au moins trois personnes représentatives, chacune utilisant un navigateur ou un appareil différent, incluant des cas limites.</td></tr>
        <tr><td class="ind">Rédaction précise et claire d'un rapport de tests indiquant, pour chaque test : le scénario testé, le résultat observé et l'écart par rapport au résultat attendu.</td><td>Le rapport de tests est peu précis et peu clair : les éléments essentiels (scénario testé, résultat observé, écart par rapport au résultat attendu) sont manquants pour certains tests.</td><td>Le rapport de tests est partiellement précis et clair : certains éléments (scénario testé, résultat observé, écart par rapport au résultat attendu) sont imprécis pour certains tests.</td><td>Le rapport de tests est rédigé de façon précise et claire, indiquant pour chaque test le scénario testé, le résultat observé et l'écart par rapport au résultat attendu.</td><td>Le rapport de tests est rédigé de façon particulièrement précise et claire, indiquant pour chaque test, avec rigueur, le scénario testé, le résultat observé et une analyse pertinente de l'écart par rapport au résultat attendu.</td></tr>
        <tr><td class="ind">Application de corrections adéquates pour chaque problème identifié, avec description du correctif et validation que le problème est résolu.</td><td>Les corrections apportées sont peu adéquates et ciblent partiellement les problèmes identifiés : la description du correctif et la validation de la résolution est peu développées.</td><td>Les corrections apportées sont partiellement ciblées : la description du correctif ou la validation de la résolution est partiellement développée.</td><td>Les corrections apportées sont ciblées pour chaque problème identifié, avec description du correctif et validation que le problème est résolu.</td><td>Les corrections apportées sont ciblées et rigoureuses pour chaque problème identifié, avec une description précise du correctif et une validation systématique de sa résolution.</td></tr>
      </tbody>
    </table>
  </div>
</div>

<h2>Modalités d'évaluation et dates de remise</h2>

<div class="proj-section-label proj-label-teal">Remises formatives : ne comptent pas dans la note finale</div>
<p class="proj-subtext proj-indent">Ces deux étapes vous permettent de recevoir des rétroactions concrètes et d'ajuster votre travail avant la remise finale, c'est là que se construit la qualité de votre portfolio.</p>

<div class="proj-stepper">
  <div class="proj-step"><div class="proj-step-num">1</div><div class="proj-step-week">Enric : 14 sept · Lora : 17 sept</div><div class="proj-step-title">Planification et design</div></div>
  <div class="proj-step"><div class="proj-step-num">2</div><div class="proj-step-week">Semaine 6 · 2 oct</div><div class="proj-step-title">Version Beta</div></div>
</div>

<div class="proj-deliverable-grid">
  <ul>
    <li>Dépôt GitHub initialisé</li>
    <li>Moodboard</li>
    <li>Maquettes visuelles mobile et desktop (<em>Figma</em>)</li>
    <li>Lien de la maquette Figma partagée avec la professeure via un lien dans le <em>README.md</em></li>
    <li>Justification des choix technologiques (<em>PLANIFICATION.md</em>)</li>
    <li>Idées d'animation documentées (<em>PLANIFICATION.md</em>) : quoi animer, comment, sur quel événement</li>
    <li>Plan de contenu et architecture du site</li>
    <li>Journal de bord complété jusqu'à ce point (<em>JOURNAL.md</em>)</li>
    <li>Rétroaction formative individuelle : groupe d'Enric le 14 septembre, groupe de Lora le 17 septembre</li>
  </ul>
  <ul>
    <li>Version Beta déployée et fonctionnelle en ligne</li>
    <li>Grille de validation qualité amorcée</li>
    <li>Lancement des tests par les pairs cette semaine-là (résultats et correctifs à documenter pour la remise finale)</li>
  </ul>
</div>

<div class="proj-section-label proj-label-coral">Remise finale : sommative, compte pour 40% de la note</div>
<div class="proj-final-block">
  <div class="proj-final-num">
    <div class="proj-final-circle">3</div>
    <div class="proj-final-week">Semaine 7 · mi-session</div>
    <div class="proj-final-dates">Lora : 8 oct<br>Enric : 15 oct</div>
  </div>
  <div class="proj-final-text">
    <strong>Portfolio complet et présentation devant le jury.</strong>
    <ul>
      <li>Dépôt du site en ligne</li>
      <li>Journal de bord complété pour l'ensemble du projet</li>
      <li>Auto-évaluation à partir de la grille critériée, résultats des tests par les pairs documentés et correctifs apportés</li>
      <li>Présentation devant le jury : groupe de Lora le 8 octobre, groupe d'Enric le 15 octobre (~5 min par étudiant·e, suivies de questions)</li>
      <li>Évaluation du produit final, de la démarche de contrôle de qualité, du processus documenté (journal et commits Git) et de la capacité à justifier ses choix devant un employeur potentiel</li>
    </ul>
  </div>
</div>

<h2>Sites de référence d'inspiration</h2>

<h3>Inspirations graphiques / web design</h3>
<ul class="proj-ref-list">
  <li><a href="https://www.awwwards.com/" target="_blank">Awwwards</a></li>
  <li><a href="https://www.cssdesignawards.com/" target="_blank">CSS Design Awards</a></li>
  <li><a href="https://dribbble.com/shots/popular/web-design" target="_blank">Dribbble, Web Design (popular shots)</a></li>
  <li><a href="https://www.behance.net/search/projects/portfolio" target="_blank">Behance, Portfolios</a></li>
</ul>

<h3>Références intemporelles</h3>
<ul class="proj-ref-list">
  <li><a href="https://material.io/" target="_blank">Material Design</a></li>
  <li><a href="https://99designs.fr/blog/conseils-design/la-theorie-des-couleurs/" target="_blank">Théorie des couleurs</a></li>
</ul>

<h3>Exemples de portfolios d'anciens étudiants</h3>
<ul class="proj-ref-list">
  <li>💼 <a href="https://emerykbelisle.com/" target="_blank">Portfolio de Émeryk Bélisle</a></li>
  <li>💼 <a href="https://mikaelarseneau.github.io/portfolio-Mikael-Arseneau/index.html" target="_blank">Portfolio de Mikael Arseneau</a></li>
  <li>💼 <a href="https://matisgh.github.io/portfolio-matis-ghariani/" target="_blank">Portfolio de Matis Ghariani</a></li>
  <li>💼 <a href="https://antoha2033.github.io/portfolio-Anton-Nikulin/index.html" target="_blank">Portfolio de Anton Nikulin</a></li>
  
  <li>💼 <a href="https://thearyl.github.io/portfolio-thearylou-lach/" target="_blank">Portfolio de Thearylou Lach</a></li>
  <li>💼 <a href="https://audreydandurand.github.io/index.html" target="_blank">Portfolio de Audrey Dandurand</a></li>
  <li>💼 <a href="https://justinersu.github.io/" target="_blank">Portfolio de Justine Rousseau</a></li>
  <li>💼 <a href="https://victorgileau.github.io/victorgileau_portfolio/index.html" target="_blank">Portfolio de Victor Gileau</a></li>
  <li>💼 <a href="https://jxshvfx.github.io/joshuagonzalez.github.io/" target="_blank">Portfolio de Joshua Gonzalez-Barrera</a></li>

  <li>💼 <a href="https://kenzaelharrif.github.io/KenzaElHarrif_portfolio/index.html" target="_blank">Portfolio de Kenza El Harrif</a></li>
  <li>💼 <a href="https://delphineg-projets.github.io/portfolio" target="_blank">Portfolio de Delphine Grenier</a></li>
  <li>💼 <a href="https://ihabmjr.github.io/" target="_blank">Portfolio de Ihab Mouhajer</a></li>
  <li>💼 <a href="https://dezemma.com/" target="_blank">Portfolio de Daniel Sébastien Dezemma</a></li>
  <li>💼 <a href="https://sitmonternna.github.io/artist_portfolio/" target="_blank">Portfolio de Sitmonternna Yi</a></li>

  <li>💼 <a href="https://benjaminferland.github.io/portfolio-benjamin-ferland/" target="_blank">Portfolio de Benjamin Ferland</a></li>
</ul>

</div>