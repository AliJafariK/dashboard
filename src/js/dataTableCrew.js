$(document).ready(function() {
    $('#crews').DataTable({
        "order": [
            [0, "asc"],
        ],
        "searching": true,
        "pagingType": "full_numbers",
        "scrollY":"40vh",
		"scrollX": true
    });
});

$(document).ready(function() {
    var table = $('#crews').DataTable();

    $('#crews tbody').on('click', 'tr', function() {
        $(this).toggleClass('selected');
    });

    $('#count_crew').click(function() {
        alert(table.rows('.selected').data().length + ' row(s) selected');
    });

    $('#delete_crew').click(function() {
        table.row('.selected').remove().draw(false);
   });
});
