/* =============================================================================
* Template/index.js
*
* ------------------------------------------------------------
* Copyright 2012 Exacloud, Inc.
* http://www.exacloud.cn/
* =========================================================================== */

// ================= GLOBAL VARIABLES ==========================================
var CAROUSEL, BTN_PREV, BTN_PLAY, BTN_NEXT, POPUP, PLAYER, BRAND, BANNER;

var CAROUSEL_LEFT = 325, CAROUSEL_TOP = 255;
var CAROUSEL_IMG_WIDTH = 310, CAROUSEL_IMG_HEIGHT = 172;
var BTN_PREV_NEXT_TOP = 322, BTN_PREV_NEXT_LEFT_RIGHT = 270;
var BTN_PLAY_TOP = 322, BTN_PLAY_LEFT = 455;
var BTN_WIDTH = 44;
var POPUP_LEFT = 0, POPUP_RIGHT = 0, POPUP_WIDTH = 700, POPUP_HEIGHT = 370;
var BRAND_HEIGHT = 70;
var BANNER_TOP = 510;
var CURRENT_IMG = 'v-1';

// ================= INIT FUNCTIONS ============================================
$(function() {
    CAROUSEL = $('#carousel');
    BTN_PREV = $('#btn-previous');
    BTN_PLAY = $('#btn-play');
    BTN_NEXT = $('#btn-next');
    POPUP = $('#popup');
    PLAYER = $('#player');
    BRAND = $('#brand');
    BANNER = $('#banner');

    // event handlers ------------------------------------------------------------------------------
    $(window).resize(function() {
        var r = $(window).width() / 960.0;
        $('.btn').width(BTN_WIDTH * r);

        CAROUSEL.css({
            top : CAROUSEL_TOP * r,
            left : CAROUSEL_LEFT * r
        });
        $('img.carousel_img').css({
            width : CAROUSEL_IMG_WIDTH * r,
            height : CAROUSEL_IMG_HEIGHT * r
        });
        BTN_PREV.css({
            top : BTN_PREV_NEXT_TOP * r,
            left : BTN_PREV_NEXT_LEFT_RIGHT * r
        });
        BTN_PLAY.css({
            top : BTN_PLAY_TOP * r,
            left : BTN_PLAY_LEFT * r
        });
        BTN_NEXT.css({
            top : BTN_PREV_NEXT_TOP * r,
            right : BTN_PREV_NEXT_LEFT_RIGHT * r
        });
        POPUP.css({
            width : POPUP_WIDTH * r,
            height : POPUP_HEIGHT * r
        });
        BRAND.css({
            height : BRAND_HEIGHT * r
        });
        BANNER.css({
            top : BANNER_TOP * r
        });

    });

    BTN_PLAY.on('click', function() {
        $("#popup").modal({
            fadeDuration : 200,
            overlay : 'rgba(255,255,255,0)'
        });
    });

    POPUP.on($.modal.OPEN, function() {
        PLAYER.html('<div data-ratio="0.4167" id="video" class="flowplayer main minimalist"><video autoplay><source type="video/mp4" src="vid/{0}.mp4"></video></div>'.format(CURRENT_IMG));
        $('#video').flowplayer({
            fullscreen : false
        });
        $('.fp-embed').remove();
    });

    POPUP.on($.modal.CLOSE, function() {
        PLAYER.html('');
    });

    // init ----------------------------------------------------------------------------------------
    $('.jcarousel').jCarouselLite({
        btnPrev : '#btn-previous',
        btnNext : '#btn-next',
        visible : 1,
        afterEnd : function(a) {
            CURRENT_IMG = a[0].id;
        }
    });
    $(window).resize();
    // BTN_PLAY.click();

});

// ================= UTILITY FUNCTIONS ==========================================
// string formatter
String.prototype.format = function() {
    var pattern = /\{\d+\}/g;
    var args = arguments;
    return this.replace(pattern, function(capture) {
        return args[capture.match(/\d+/)];
    });
};
