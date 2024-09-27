 <style>
    body {
      background-color: #000;
      background-repeat: repeat-y;
      background-position: center;
      background-size: auto 50px;
    }

    .shadow {
      fill: #383b3c;
      opacity: 0.75;
    }

    .st3 {
      opacity:0.2;
      fill: #000
    }

    .perso {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 150px;
      transform: translate(-50%, -50%);
    }

    .hat {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -180%);
      width: 50px;
      height: 50px;
      background-size: contain;
      background-repeat: no-repeat;
    }

    .hat-banana .hat {
      background-image: url(https://tim-montmorency.com/timdoc/582-215MO/html/formulaire-avance/exercices/among-us/images/banane.png);
    }

    .hat-egg .hat {
      background-image: url(https://tim-montmorency.com/timdoc/582-215MO/html/formulaire-avance/exercices/among-us/images/oeuf.png);
    }

    .hat-toilet .hat {
      background-image: url(https://tim-montmorency.com/timdoc/582-215MO/html/formulaire-avance/exercices/among-us/images/papier.png);
    }

    .panel {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -230%);
      font-size: 12px;
      color: #fff;
      text-align: center;
      background-color: #000;
      border: solid 2px #fff;
      min-width: 210px;
      border-radius: 6px;
      padding: 10px;
    }

    .panel strong {
      font-size: 18px;
    }
  </style>

  script>
    let errnb = 0;

    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const color = urlParams.get('color');
    const hat = urlParams.get('hat');
    const impostor = urlParams.get('impostor');

    if(name) {
        document.getElementById('name').innerText = name;
    }

    if(color) {
        let paths = document.getElementsByClassName('st2');
        for(let i = 0; i < paths.length; i++) paths[i].style.fill = color;
    }

    if(hat) {
        switch(hat) {
            case 'banana': document.body.className = 'hat-banana'; break;
            case 'egg': document.body.className = 'hat-egg'; break;
            case 'toilet': document.body.className = 'hat-toilet'; break;
        }
    }

    if(impostor) {
        document.body.style.backgroundImage = 'url(https://tim-montmorency.com/timdoc/582-215MO/html/formulaire-avance/exercices/among-us/images/impostor.png)';
    } else {
        document.body.style.backgroundImage = 'url(https://tim-montmorency.com/timdoc/582-215MO/html/formulaire-avance/exercices/among-us/images/crewmate.png)';
    }


</script>
