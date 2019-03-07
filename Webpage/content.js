//Section control for all pages
$(function() {
  $.scrollify({
    section : ".example-classname",
  });
});

//Slideshow control for fashion page
$(document).ready(function() {
    $('#Carousel').carousel({
        interval: 5000
    })
});

//latest and popular control for videos page
$(document).ready(function() {
    $('.collapse').on('show.bs.collapse', function() {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-faq');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="glyphicon glyphicon-minus"></i>');
    });
    $('.collapse').on('hide.bs.collapse', function() {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-faq');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="glyphicon glyphicon-plus"></i>');
    });
});