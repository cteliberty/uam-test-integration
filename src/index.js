import './scss/main.scss';

// 1. Glider
import Glider from 'glider-js';
new Glider(document.querySelector('.uam_cards'), {
  responsive: [{
    // screens greater than >= 992px
    breakpoint: 992,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  }, {
    // screens greater than >= 576px
    breakpoint: 576,
    settings: {
      slidesToShow: 2.5,
      slidesToScroll: 1,
      draggable: true,
      scrollLock: true,
      scrollLockDelay: 100
    }
  }]
});

// 2. Gsap
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.to(".left_animation", {
  scrollTrigger: {
    trigger: ".left_animation"
  },
  duration: 1, 
  x: 0
});

gsap.to(".right_animation", {
  scrollTrigger: {
    trigger: ".right_animation"
  },
  duration: 1,
  x: "+50%"
});