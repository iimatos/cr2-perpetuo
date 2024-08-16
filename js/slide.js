import '@splidejs/splide/css/core';
import Splide from '@splidejs/splide';

export default function slide() {
  function mountSlide() {
    const slide = new Splide('.splide', {
      type: 'loop',
      perPage: 3,
      perMove: 2,
      gap: '1.8rem',
      width: '100%',
      autoWidth: true,
      breakpoints: {
        768: {
          perPage: 2,
        },
        540: {
          perPage: 1,
          perMove: 1,
          autoWidth: true,
        },
      },
    });

    slide.mount();
  }

  window.addEventListener('load', mountSlide);
}
