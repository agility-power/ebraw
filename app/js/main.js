$(function () {

  $('.slider__items').slick({
    dots: true,
    infinite: false,
    speed: 1500,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="7px" height="px" viewBox="0 0 7 11" version="1.1"><g><path d="M 0.90625 5.015625 C 0.632812 5.28125 0.632812 5.71875 0.90625 5.988281 L 4.40625 9.425781 C 4.679688 9.695312 5.125 9.695312 5.398438 9.425781 C 5.671875 9.15625 5.671875 8.71875 5.398438 8.453125 L 2.390625 5.5 L 5.394531 2.546875 C 5.667969 2.28125 5.667969 1.84375 5.394531 1.574219 C 5.121094 1.304688 4.675781 1.304688 4.402344 1.574219 L 0.902344 5.011719 Z M 0.90625 5.015625"/></g></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="7px" height="px" viewBox="0 0 7 11" version="1.1"><g> <path d="M 6.09375 5.015625 C 6.367188 5.28125 6.367188 5.71875 6.09375 5.988281 L 2.59375 9.425781 C 2.320312 9.695312 1.875 9.695312 1.601562 9.425781 C 1.328125 9.15625 1.328125 8.71875 1.601562 8.453125 L 4.609375 5.5 L 1.605469 2.546875 C 1.332031 2.28125 1.332031 1.84375 1.605469 1.574219 C 1.878906 1.304688 2.324219 1.304688 2.597656 1.574219 L 6.097656 5.011719 Z M 6.09375 5.015625"/></g></svg ></button>',
  })

  $(".star").rateYo({
    rating: 3.6,
    starWitdh: "9px",
    normalFill: "#fff",
    ratedFill: "#023047",
    readOnly: true,
    "starSvg": '<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.93757 1.35842L6.90502 3.29117C6.99984 3.48091 7.18285 3.61247 7.39509 3.64292L9.55932 3.95444C10.094 4.03164 10.3068 4.6797 9.91984 5.05103L8.35482 6.55482C8.20102 6.7027 8.13101 6.91528 8.1674 7.12404L8.53674 9.24708C8.6277 9.77227 8.06872 10.173 7.59078 9.92449L5.65643 8.92142C5.4668 8.82302 5.23968 8.82302 5.0495 8.92142L3.11514 9.92449C2.6372 10.173 2.07823 9.77227 2.16974 9.24708L2.53853 7.12404C2.57491 6.91528 2.5049 6.7027 2.3511 6.55482L0.786087 5.05103C0.399106 4.6797 0.611891 4.03164 1.14661 3.95444L3.31084 3.64292C3.52307 3.61247 3.70664 3.48091 3.80145 3.29117L4.76836 1.35842C5.0076 0.880528 5.69832 0.880528 5.93757 1.35842Z" stroke="#023047" stroke-linecap="round" stroke-linejoin="round"/></svg>',

  })

  $('.categories__item-img').izoomify({
    duration: 300,

  })

  var mixer = mixitup('.categories__inner', {
    load: {
      filter: '.hoodie'
    },
    animation: {
      effectsOut: 'fade translateY(-100%)'
    }
  });

})