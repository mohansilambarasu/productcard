import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.jsx';
import './styles.css';
import $ from 'jquery';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);


// navbar
$('.mobnavitem').hide();
$('.mobnavContent button').click(function () {
  $('.mobnavitem').toggle("slow");
})

// Main Alert
$('.notifyBox').hide();
$('.comingsoon').hide();
$('.card').css('opacity','1');
$('.csNav').click(function () {
  $('.notifyBox').hide();
  $('.comingsoon').fadeIn('slow');
  $('.card').css('opacity','0.5');
  setTimeout(function () {
    $('.comingsoon').fadeOut('slow');
    $('.card').css('opacity','1');
  }, 2000);
})


// Add Cart
$('.notifyBox').hide();
$('.productAdd').click(function () {
  $('.notifyBox').hide();
  $('.addedCartNot').removeClass('notifyOut');
  $(this).toggleClass('greenNot');
  if ($(this).hasClass('greenNot')) {
    $('.addedCartNot').show();
    $('.addedCartNot').css('backgroundColor','green');
    setTimeout(function () {
      $('.addedCartNot').addClass('notifyOut');
    }, 2000);
  }
  else {
    $('.addedCartNot').addClass('notifyOut');
  }
})

// Add Wishlist
$('.notifyBox').hide();
$('.productHeart').click(function () {
  $('.notifyBox').hide();
  $('.addedWishNot').removeClass('notifyOut');
  $(this).toggleClass('crimsonNot');
  if ($(this).hasClass('crimsonNot')) {
    $('.addedWishNot').show();
    $('.addedWishNot').css('backgroundColor','crimson');
    setTimeout(function () {
      $('.addedWishNot').addClass('notifyOut');
    }, 2000);
  }
  else {
    $('.addedWishNot').addClass('notifyOut');
  }
})

$('.notifyBox').click(function () {
  $('.addedCartNot').addClass('notifyOut');
  $('.addedWishNot').addClass('notifyOut');
})
$('.comingsoon').click(function () {
  $('.comingsoon').fadeOut('slow');
  $('.card').css('opacity','1');
});
