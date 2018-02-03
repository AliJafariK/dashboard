import 'jquery';
import 'jquery-ui-bundle/jquery-ui';

// $(document).ready(function() {
//     oTable = $('#example').dataTable();
// });


$(function() {
    var dialog,
        form,
        test_Name = $('#test_Name'),
        test_Description = $('#test_Description'),
        test_logo = $('#test_logo'),
        allFields = $([]).add(test_Name).add(test_Description).add(test_logo),
        tips = $('.validateTips');

    function updateTips(t) {
        tips.text(t).addClass('ui-state-highlight');
        setTimeout(function() {
            tips.removeClass('ui-state-highlight', 1500);
        }, 500);
    }

    $(document).ready(function() {
        $('#example').on('click', '.btnDelete', function() {
            $(this).closest('tr').remove();
        });
    });

    function addUser() {
        var valid = true;
        allFields.removeClass('ui-state-error');

        if (valid) {
            // $('#example tbody').append(
            // 	'<tr>' +
            // 		'<td>' +
            // 		test_Name.val() +
            // 		'</td>' +
            // 		'<td>' +
            // 		test_Description.val() +
            //                  '</td>' +
            //                  '<td>' +
            // 		test_logo.val() +
            // 		'</td>' +
            // 		'<td> aaa </td>' +
            // 		'<td> aaa </td>' +
            // 		'<td> aaa </td>' +
            // 		'</tr>'
            // );

            $('#example').dataTable().fnAddData([
                test_Name.val(),
                test_Description.val(),
                test_logo.val(),
                ".4",
                ".5",
                ".6"
            ]);
            dialog.dialog('close');
            $('#example').dataTable().draw();
        }
        return valid;
    }

    dialog = $('#dialog-form-test').dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
            Create: addUser,
            Cancel: function() {
                dialog.dialog('close');
            }
        },
        close: function() {
            form[0].reset();
            allFields.removeClass('ui-state-error');
        }
    });

    form = dialog.find('form').on('submit', function(event) {
        event.preventDefault();
        addUser();
    });

    $('#buttona').button().on('click', function() {
        dialog.dialog('open');
    });
});