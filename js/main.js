$( document ).ready(function() {
    var start = new Date("2016-01-01");
    var current = new Date();
    var days = Math.round((current-start)/86400000);
    $('#time').html(days + " Days");
});