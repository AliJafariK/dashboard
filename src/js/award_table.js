import 'jquery';
import 'jquery-ui-bundle/jquery-ui';

// $(document).ready(function() {
//     aTable = $('#crews').dataTable();
// });

$(function() {
    var dialog,
        form,
        award_Name = $('#award_Name'),
        award_Description = $('#award_Description'),
        award_logo = $('#award_logo'),
        allFields = $([]).add(award_Name).add(award_Description).add(award_logo),
        tips = $('.validateTips');

    function updateTips(t) {
        tips.text(t).addClass('ui-state-highlight');
        setTimeout(function() {
            tips.removeClass('ui-state-highlight', 1500);
        }, 500);
    }

    $(document).ready(function() {
        $('#awards').on('click', '.btnDelete', function() {
            $(this).closest('tr').remove();
        });
    });

    function addUser() {
        var valid = true;
        allFields.removeClass('ui-state-error');

        if (valid) {
            // $('#awards tbody').append(
            // 	'<tr>' +
            // 		'<td>' +
            // 		award_Name.val() +
            // 		'</td>' +
            // 		'<td>' +
            // 		award_Description.val() +
            //                  '</td>' +
            //                  '<td>' +
            // 		award_logo.val() +
            // 		'</td>' +
            // 		'<td> <button class="btnDelete">Delete </button> </td>' +
            // 		'</tr>'
            // );


            $('#awards').dataTable().fnAddData([
                award_Name.val(),
                award_Description.val(),
                award_logo.val()
                // "<button class=\"btnDelete\">Delete </button>"
            ]);


            dialog.dialog('close');

            $('#awards').dataTable().draw();

        }
        return valid;
    }

    dialog = $('#dialog-form-award').dialog({
        autoOpen: false,
        height: 400,
        width: 200,
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

    $('#add_award').button().on('click', function() {
        dialog.dialog('open');
    });
});