

$(document).ready(function() {
    $('#awards').DataTable({
        "order": [
            [0, "asc"],
        ],
        "searching": true,
        "pagingType": "full_numbers",
        "scrollY":"40vh",
		"scrollX": "100"
    });
});

$(document).ready(function() {
    var table = $('#awards').DataTable();

    $('#awards tbody').on('click', 'tr', function() {
        $(this).toggleClass('selected');
    });

    $('#count_award').click(function() {
        alert(table.rows('.selected').data().length + ' row(s) selected');
    });

    $('#delete_award').click(function() {
        table.row('.selected').remove().draw(false);
    });
});