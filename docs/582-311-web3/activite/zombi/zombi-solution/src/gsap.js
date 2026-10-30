import { gsap } from 'gsap'

export function gsapAnimations() {

  gsap.to('.heart', {
    scale: 1.2,

    duration: 0.6,
    ease: 'elastic.out(1, 0.3)',
    yoyo: true,
    repeat: -1,
  })

  gsap.fromTo('body', { 
    backgroundColor: '#838B2F',
  }, {
    backgroundColor: '#BDAF88',
    duration: 2.4,
    yoyo: true,
    repeat: -1,
  });

}
