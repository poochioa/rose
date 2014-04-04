/* =============================================================================
* Template/index.js
*
* ------------------------------------------------------------
* Copyright 2012 Exacloud, Inc.
* http://www.exacloud.cn/
* =========================================================================== */

// ================= GLOBAL VARIABLES ==========================================

// ================= INIT FUNCTIONS ============================================
$(function() {
    // start your codes here
    $('#btn-previous').on('click', function() {
        alert('previous');
    });

    $('#btn-next').on('click', function() {
        alert('next');
    });

    $('#btn-play').on('click', function() {
        $("#popup").modal({
            fadeDuration : 200,
            overlay : 'rgba(255,255,255,0)'
        });

    });

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
