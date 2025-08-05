;(function( $ ){

/* Fixed header nav */
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      var headerHeight = document.querySelector('.top-header').offsetHeight;
      if($(window).width() >= 992)
      {
        if ( window.scrollY > headerHeight ) {
          document.getElementById('masthead').classList.add('fixed-header');
        }else {
          document.getElementById('masthead').classList.remove('fixed-header');
        }
      } else {
        var bottomheaderHeight = document.querySelector('.bottom-header').offsetHeight;
        var mobileheaderHeight =  headerHeight + bottomheaderHeight;
        if ( window.scrollY > mobileheaderHeight ) {
          document.getElementById('masthead').classList.add('fixed-header');
        }else {
          document.getElementById('masthead').classList.remove('fixed-header');
        }
      }
  });
}); 

/* Show or Hide Search field on clicking search icon */
$( document ).on( 'click', '.header-search-icon .search-icon', function(e){
	e.preventDefault();
	$( '.header-search-form' ).addClass( 'search-in' );
});

$( 'body, .search-close' ).click(function(e) {   
    if(!$(e.target).is( '.header-search-form input' )) {
        $( '.header-search-form' ).removeClass( 'search-in' );
    }
});

/* Mobile slick nav */
$('#navigation').slicknav({
  duration: 500,
  closedSymbol: '<i class="fas fa-plus"></i>',
  openedSymbol: '<i class="fas fa-minus"></i>',
  prependTo: '.mobile-menu-container',
  allowParentLinks: true,
  nestedParentLinks : false,
  label: "Menu", 
  closeOnClick: true,
});

$(window).scroll(function() {
  /* back to top */
  if ($(this).scrollTop() > 300) {
    $('#backTotop').fadeIn(200);
  } else {
    $('#backTotop').fadeOut(200);
  }
});

/* back to top */
$("#backTotop").click(function(e) {
  e.preventDefault();
  $("html, body").animate({scrollTop: 0}, 1000);
});

$(document).ready(function(){
  /* Count down */
  loopcounter('time-counter');
});

/* Blog masonry */
function MasonryGrid (){
  $('.grid').masonry({
    itemSelector: '.grid-item',
  });
}

/* preloader */
$( window ).load( function(){ 
  $( '#siteLoader' ).fadeOut( 500 );
  MasonryGrid ();
});

$(document).resize(function(){
  MasonryGrid ();
});

/* popup video */
$("#video-container").modalVideo({
  youtube:{
    controls:0,
    nocookie: true
  }
});

/* counter up*/
$('.counter').counterUp();

// cart page input increasing order
$('.quantity').prop('disabled', true);
$(document).on('click','.plus-btn',function(e){
  e.preventDefault();
  $('.quantity').val(parseInt($('.quantity').val()) + 1 );
});
$(document).on('click','.minus-btn',function(e){
  e.preventDefault();
  $('.quantity').val(parseInt($('.quantity').val()) - 1 );
    if ($('.quantity').val() == 0) {
    $('.quantity').val(1);
  }
});

})( jQuery ); 