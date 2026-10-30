import './style.css'
import carFrame from './assets/car-frame.webp'
import carWheel from './assets/car-wheel.webp'
import { gsapAnimations } from "./gsap.js"

document.querySelector('#app').innerHTML = `
<div class="car">
  <img src="${carFrame}" alt="Monster truck" class="frame" />
  <img src="${carWheel}" alt="" class="roue1" />
  <img src="${carWheel}" alt="" class="roue2" />
</div>
`

gsapAnimations()
