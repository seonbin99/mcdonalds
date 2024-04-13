$(document).ready(function() {
    $('.visual_text p span').each(function(index) {
        $(this).css({ animationDelay: (index * 0.1) + 's' });
    });

});