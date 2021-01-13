$(function() {
    'use strict';

    /* All Variables */
    var navSearchSubmit = $('.nav-search-form .search-submit');


    /* START :: Navbar Search */
    navSearchSubmit.on('click', function() {
        $(this).prev('.search-input').toggleClass('active');
    });
    /* END :: Navbar Search */


    /* START :: Places Slider */
    $('.places-slider').slick({
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        swipe: true,
        infinite: true,
        swipeToSlide: true,
        rtl: true,
        centerPadding: '0',
        cssEase: 'linear',
        touchMove: true,
        variableWidth: true,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ]
    });
    /* END :: Places Slider */


    /* START :: Bootstrap Select Plugin */
    $('select:not(.selectpicker)').selectpicker({
        liveSearch: true,
        maxOptions: 1
    });
    /* END :: Bootstrap Select Plugin */


    /* START :: Daterangepicker Plugin */
    $('input[name="daterange"]').daterangepicker({
        opens: 'right'
    });
    /* END :: Daterangepicker Plugin */


    /* START :: Counter */
    $('.for-counter').on('click', function(e) {
    var counterField    = $(this).parent().find('input'),
        dataCount       = parseInt($(this).data('count')),
        counterVal      = parseInt(counterField.val());
    if($(this).hasClass('increase-counter')) {
        counterVal += dataCount;
    } else {
        (counterVal <= 0) ? counterVal = 0 : counterVal -= dataCount;
    }
    counterField.val(counterVal)
    return false;
    });
    /* END :: Counter */


    /* START :: Save Counter */
    $('.save-counter').on('click', function() {
    var valOne = $(this).parents('.counters').find('.counter-val-1').val(),
        valTwo = $(this).parents('.counters').find('.counter-val-2').val();  
    if ($(this).hasClass('guests')) {
        $('.rooms-and-guests').text(valOne + ' سرير - ' + valTwo + ' غرفة');
    } else if($(this).hasClass('monies')) {
        $('.from-to-mony').text(valOne + ' الي ' + valTwo);
    } else if($(this).hasClass('spaces')) {
        $('.from-to-space').text(valOne + ' متر الي ' + valTwo + ' متر');
    }
    return false;
    });
    /* END :: Save Counter */


    /* START :: Slick Slider */
    function slickSlider(el, showSlides) {
        $(el).slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: showSlides,
            slidesToScroll: 1,
            rtl: true,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ]
        });
    }
    /* END :: Slick Slider */

    // Slick Slider With 4 Element
    slickSlider('.secondary-slider', 4);

    // Slick Slider With 3 Element 
    slickSlider('.hosting-img-slider', 3);

    // Slick Slider With 4 Element 
    slickSlider('.hosting-img-slider-3', 4);


    /* START :: Range Plugin */
    var s3 = $("#ranged-value").freshslider({
        range: true,
        step:1,
        value:[4, 60],
        onchange:function(low, high){
            console.log(low, high);
        }
    });
    /* END :: Range Plugin */


    /* START :: Start Main Detailed Slider */
    $('.detailed-slider').slick({
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "15%",
        speed: 500,
        rtl: true
    });
    /* END :: Start Main Detailed Slider */






  //slideshow style interval
//   var autoSwap = setInterval( swap,7000);

  //pause slideshow and reinstantiate on mouseout
//   $('.carousel, .slider').hover(
//     function () {
//       clearInterval(autoSwap);
//   }, 
//     function () {
//     autoSwap = setInterval( swap,7000);
//   });

  //global variables
  var items = [];
  var startItem = 1;
  var position = 0;
  var itemCount = $('.carousel>li').length;
  var leftpos = itemCount;
  var resetCount = itemCount;

  //unused: gather text inside items class
  $('.carousel>li').each(function(index) {
      items[index] = $(this).text();
  });

  //swap images function
  function swap(action) {
    var direction = action;
    
    //moving carousel backwards
    if(direction == 'counter-clockwise') {
      var leftitem = $('.left-pos').attr('id') - 1;
      if(leftitem == 0) {
        leftitem = itemCount;
      }
      
      $('.right-pos').removeClass('right-pos').addClass('back-pos');
      $('.main-pos').removeClass('main-pos').addClass('right-pos');
      $('.left-pos').removeClass('left-pos').addClass('main-pos');
      $('#'+leftitem+'').removeClass('back-pos').addClass('left-pos');
      
      startItem--;
      if(startItem < 1) {
        startItem = itemCount;
      }
    }
    
    //moving carousel forward
    if(direction == 'clockwise' || direction == '' || direction == null ) {
      function pos(positionvalue) {
        if(positionvalue != 'leftposition') {
          //increment image list id
          position++;
          
          //if final result is greater than image count, reset position.
          if((startItem+position) > resetCount) {
            position = 1-startItem;
          }
        }
      
        //setting the left positioned item
        if(positionvalue == 'leftposition') {
          //left positioned image should always be one left than main positioned image.
          position = startItem - 1;
        
          //reset last image in list to left position if first image is in main position
          if(position < 1) {
            position = itemCount;
          }
        }
    
        return position;
      }  
    
    $('#'+ startItem +'').removeClass('main-pos').addClass('left-pos');
    $('#'+ (startItem+pos()) +'').removeClass('right-pos').addClass('main-pos');
    $('#'+ (startItem+pos()) +'').removeClass('back-pos').addClass('right-pos');
    $('#'+ pos('leftposition') +'').removeClass('left-pos').addClass('back-pos');

      startItem++;
      position=0;
      if(startItem > itemCount) {
        startItem = 1;
      }
    }
  }

  //next button click function
  $('#next').click(function() {
    swap('clockwise');
  });

  //prev button click function
  $('#prev').click(function() {
    swap('counter-clockwise');
  });

  //if any visible items are clicked
  $('.items').click(function() {
    if($(this).attr('class') == 'items left-pos') {
      swap('counter-clockwise'); 
    }
    else {
      swap('clockwise'); 
    }
  });
      

});