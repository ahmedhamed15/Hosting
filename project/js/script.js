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
    if ($('select').length) {
        try {
            $('select:not(.selectpicker)').selectpicker({
                liveSearch: true,
                maxOptions: 1
            });
        } catch (error) { console.log(error); }
    }
    /* END :: Bootstrap Select Plugin */


    /* START :: Daterangepicker Plugin */
    if ($('select').length) {
        try {
            $('input[name="daterange"]').daterangepicker({
                opens: 'right'
            });
        } catch (error) {console.log(error);}
    }
    
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
    if ($('#ranged-value').length > 0) {
        var s3 = $("#ranged-value").freshslider({
            range: true,
            step:1,
            value:[4, 60],
            onchange:function(low, high){
                console.log(low, high);
            }
        });
    }
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
    
    
    /* START :: Hotel Main Slider */
    $('.hotel-slider .thumbnail-img img').on('click', function() {
        $(this).parent().css('opacity', '1').siblings().css('opacity', '0.5');
        $('.hotel-slider .main-img img').attr('src', $(this).attr('src'));
    });
    /* END :: Hotel Main Slider */     
    
    
    /* START :: Show and hide password */
    $('.password-field > i').on('click', function() {
        console.log("AHMED")
        if ($(this).hasClass('show-pass')) {
            $(this).prev('input').attr('type', 'text');
        } else {
            $(this).prev('input').attr('type', 'password');
        }
        $(this).toggleClass('show-pass hide-pass fa-eye fa-eye-slash');
    });
    /* END :: Show and hide password */


    /* START :: Add background color for the verify mobile and password */
    $('.small-input').on('keyup', function() {
        if ($(this).val().length > 0) {
            $(this).css('background-color', ' #28A745');
        } else {
            $(this).css('background-color', ' #fff');
        }
    });
    /* END :: Add background color for the verify mobile and password */


});