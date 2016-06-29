$(function () {

    //turn to inline mode
    $.fn.editable.defaults.mode = 'popup';

    //enable / disable
    $('#enable').click(function () {
        $('#form2 .editable').editable('toggleDisabled');
    });

    //editables 

    $('#xboard').editable();
    $('#xpassing').editable();
    $('#xpercentage').editable();

    $('#xiiboard').editable();
    $('#xiipassing').editable();
    $('#xiipercentage').editable();
});