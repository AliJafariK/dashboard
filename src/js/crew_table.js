import 'jquery';
import 'jquery-ui-bundle/jquery-ui';

// $(document).ready(function() {
//     oTable = $('#example').dataTable();
// });


$(function() {
    var dialog,
        form,
        Crew_Name = $('#Crew_Name'),
        Crew_Description = $('#Crew_Description'),
        allFields = $([]).add(Crew_Name).add(Crew_Description),
        tips = $('.validateTips');

    function updateTips(t) {
        tips.text(t).addClass('ui-state-highlight');
        setTimeout(function() {
            tips.removeClass('ui-state-highlight', 1500);
        }, 500);
    }

    $(document).ready(function() {
        $('#crews').on('click', '.btnDelete', function() {
            $(this).closest('tr').remove();
        });
    });

    function addUser() {
        var valid = true;
        allFields.removeClass('ui-state-error');

        if (valid) {
            // $('#crews tbody').append(
            // 	'<tr>' +
            // 		'<td>' +
            // 		Crew_Name.val() +
            // 		'</td>' +
            // 		'<td>' +
            // 		Crew_Description.val() +
            // 		'</td>' +
            // 		'<td> <button class="btnDelete">Delete </button> </td>' +
            // 		'</tr>'
            // );

            $('#crews').dataTable().fnAddData([
                Crew_Name.val(),
                Crew_Description.val()
                // "<button class=\"btnDelete\">Delete </button>"
            ]);

            dialog.dialog('close');

            $('#crews').dataTable().draw();

        }
        return valid;
    }

    dialog = $('#dialog-form-crew').dialog({
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

    $('#add_crew').button().on('click', function() {
        dialog.dialog('open');
    });
});