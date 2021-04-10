"use strict";
/*import $ from '../node_modules/jquery/dist/jquery.min.js';*/

$(document).ready(function() {
  const prevArrow = '<div class="arrow-previous"></div>';
  const nextArrow = '<div class="arrow-next"></div>';
  $('.slider').slick(
    {
      infinite: true,
  	  slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow,
      nextArrow
    }
  );
});
