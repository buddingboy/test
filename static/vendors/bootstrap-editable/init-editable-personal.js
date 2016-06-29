$(function () {

    //turn to inline mode
    $.fn.editable.defaults.mode = 'inline';

    //turn to disabled mode
    $.fn.editable.defaults.disabled = 'true';

    //defaults
    $.fn.editable.defaults.url = '/post';

    //enable / disable
    $('#enable').click(function () {
        $('#form1 .editable').editable('toggleDisabled');
    });

    //editables 
    $('#username').editable({
        url: '/post',
        type: 'text',
        pk: 1,
        name: 'username',
        title: 'Enter username'
    });

    $('#email').editable({
        validate: function (value) {
            if ($.trim(value) == '') return 'This field is required';
        }
    });

    $('#mobile').editable({
        validate: function (value) {
            if ($.trim(value) == '') return 'This field is required';
        }
    });

    $('#sex').editable({
        prepend: "not selected",
        source: [
            { value: 1, text: 'Male' },
            { value: 2, text: 'Female' }
        ],
        display: function (value, sourceData) {
            var colors = { "": "gray", 1: "green", 2: "blue" },
                 elem = $.grep(sourceData, function (o) { return o.value == value; });

            if (elem.length) {
                $(this).text(elem[0].text).css("color", colors[value]);
            } else {
                $(this).empty();
            }
        }
    });

    $('#dob').editable();

    $('#category').editable({
        prepend: "not selected",
        source: [
            { value: 1, text: 'General' },
            { value: 2, text: 'OBC' },
            { value: 3, text: 'SC' },
            { value: 4, text: 'ST' }
        ],
        display: function (value, sourceData) {
            var colors = { "": "gray", 1: "green", 2: "blue" },
                 elem = $.grep(sourceData, function (o) { return o.value == value; });

            if (elem.length) {
                $(this).text(elem[0].text).css("color", colors[value]);
            } else {
                $(this).empty();
            }
        }
    });

    $('#address').editable({
        url: '/post',
        value: {
            institute: "IIT BHU",
            hostelName: "S C De",
            roomNo: "63"
        },
        validate: function (value) {
            if (value.institute == '') return 'city is required!';
        },
        display: function (value) {
            if (!value) {
                $(this).empty();
                return;
            }
            var html = 'Room No. ' + $('<div>').text(value.roomNo).html() + ' of ' + '<b>' + $('<div>').text(value.hostelName).html() + ' Hostel, ' + $('<div>').text(value.institute).html() + '</b>, ';
            $(this).html(html);
        }
    });


    $('#permanent-address').editable({
        validate: function (value) {
            if ($.trim(value) == '') return 'This field is required';
        }
    });

    $('#father-name').editable({
        validate: function (value) {
            if ($.trim(value) == '') return 'This field is required';
        }
    });

    $('#father-work').editable({
        validate: function (value) {
            if ($.trim(value) == '') return 'This field is required';
        }
    });

    $('#mother-name').editable({
        validate: function (value) {
            if ($.trim(value) == '') return 'This field is required';
        }
    });

    $('#mother-work').editable({
        validate: function (value) {
            if ($.trim(value) == '') return 'This field is required';
        }
    });


    $('#user .editable').on('hidden', function (e, reason) {
        if (reason === 'save' || reason === 'nochange') {
            var $next = $(this).closest('tr').next().find('.editable');
            if ($('#autoopen').is(':checked')) {
                setTimeout(function () {
                    $next.editable('show');
                }, 300);
            } else {
                $next.focus();
            }
        }
    });

});