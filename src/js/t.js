$(document).ready(function() {
    $('#example').DataTable({
        "order": [
            [1, "asc"],
        ],
        "searching": true,
        "pagingType": "full_numbers",
        "scrollY":"50vh",
		"scrollX": true
    });
});


$(document).ready(function() {
    var table = $('#example').DataTable();

    $('#example tbody').on('click', 'tr', function() {
        $(this).toggleClass('selected');
    });

    $('#buttont').click(function() {
        alert(table.rows('.selected').data().length + ' row(s) selected');
    });

    $('#buttond').click(function() {
        table.row('.selected').remove().draw(false);
    });
});