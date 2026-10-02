# Cours 6 | Examen

<form onsubmit="event.preventDefault(); const mot = this.motdepasse.value.trim().toLowerCase(); if (mot === 'dracula') { window.location.href = '/compendium/582-311-web3/examens/dracula/'; } else { this.querySelector('.erreur').hidden = false; }">
  <label for="motdepasse">Mot de passe de l'examen</label><br>
  <input type="text" id="motdepasse" name="motdepasse" autocomplete="off" required style="padding: .4rem .6rem; border: 1px solid var(--md-default-fg-color--light); border-radius: .2rem;">
  <button type="submit" class="md-button md-button--primary">Accéder</button>
  <p class="erreur" hidden>Mot de passe invalide.</p>
</form>

<script>
(function () {
  // Configuration
  var options = {
    scatter: 0,         // dispersion des gouttes (0 à 1)
    gravity: 0.2,       // gravité
    consistency: 0.04,  // probabilité qu'une goutte se fige à chaque image
    pollock: false,     // couleurs aléatoires
    burst: true,        // éclaboussure courte au clic (sinon, continue tant que le bouton est enfoncé)
    shade: true,        // variations de teintes de rouge
    color: '#aa0707'    // couleur si shade et pollock sont à false
  };

  var script = document.currentScript;
  if (!script || script.dataset.ready) return;
  script.dataset.ready = 'true';

  // Le canevas est placé directement dans <body>, derrière tout le contenu
  var canvas = document.createElement('canvas');
  canvas.style.cssText = 'position: fixed; inset: 0; pointer-events: none; z-index: -1;';
  document.body.prepend(canvas);

  var ctx = canvas.getContext('2d');
  var shadow = document.createElement('canvas');
  var sctx = shadow.getContext('2d');
  var items = [];
  var clicked = false;
  var mouse = { x: 0, y: 0, dx: 0, dy: 0, px: 0, py: 0 };

  function resize() {
    var copy = document.createElement('canvas');
    copy.width = shadow.width;
    copy.height = shadow.height;
    if (copy.width && copy.height) copy.getContext('2d').drawImage(shadow, 0, 0);
    canvas.width = shadow.width = window.innerWidth;
    canvas.height = shadow.height = window.innerHeight;
    if (copy.width && copy.height) sctx.drawImage(copy, 0, 0);
    sctx.fillStyle = ctx.fillStyle = options.color;
  }

  function circle(x, y, s, c) {
    c.beginPath();
    c.arc(x, y, s * 5, 0, 2 * Math.PI, false);
    c.fill();
  }

  function splat(x, y) {
    for (var i = 0; i < 30; i++) {
      var dirx = ((Math.random() < .5 ? 3 : -3) * (Math.random() * 3)) * options.scatter;
      var diry = ((Math.random() < .5 ? 3 : -3) * (Math.random() * 3)) * options.scatter;
      items.push({ x: x, y: y, dx: dirx + mouse.dx, dy: diry + mouse.dy, size: Math.random() * Math.PI });
    }
  }

  function drawloop() {
    // Arrête la boucle si on a quitté la page (navigation instantanée)
    if (!document.body.contains(script)) {
      removeListeners();
      canvas.remove();
      return;
    }
    requestAnimationFrame(drawloop);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var i = items.length;
    while (i--) {
      var t = items[i];
      var x = t.x, y = t.y, s = t.size;
      circle(x, y, s, ctx);

      t.dy -= options.gravity;
      t.x -= t.dx;
      t.y -= t.dy;
      t.size -= 0.05;

      if (t.size < 0.3 || Math.random() < options.consistency) {
        circle(x, y, s, sctx);
        items.splice(i, 1);
      }
    }
    ctx.drawImage(shadow, 0, 0);
  }

  function onDown(e) {
    clicked = true;
    if (options.burst) setTimeout(function () { clicked = false; }, 100);

    mouse.x = e.clientX;
    mouse.y = e.clientY;

    var redtone = options.shade ? 'rgb(' + (130 + (Math.random() * 105 | 0)) + ',0,0)' : options.color;
    var randomtone = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    sctx.fillStyle = ctx.fillStyle = options.pollock ? randomtone : redtone;

    splat(mouse.x, mouse.y);
  }

  function onUp() {
    clicked = false;
    mouse.dx = mouse.dy = 0;
  }

  function onMove(e) {
    if (!clicked) return;
    var distx = mouse.px - mouse.x;
    var disty = mouse.py - mouse.y;
    mouse = {
      x: e.clientX,
      y: e.clientY,
      dx: Math.abs(distx) > 10 ? -1 : distx,
      dy: Math.abs(disty) > 10 ? -1 : disty,
      px: mouse.x,
      py: mouse.y
    };
    splat(mouse.x, mouse.y);
  }

  function removeListeners() {
    document.removeEventListener('mousedown', onDown);
    document.removeEventListener('mouseup', onUp);
    document.removeEventListener('mousemove', onMove);
    window.removeEventListener('resize', resize);
  }

  document.addEventListener('mousedown', onDown);
  document.addEventListener('mouseup', onUp);
  document.addEventListener('mousemove', onMove);
  window.addEventListener('resize', resize);

  resize();
  drawloop();
})();
</script>
