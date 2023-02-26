$(document).ready(function () {
    $('#dateFilter').on("click", function () {
        let dateFrom = $('#dateFrom').val();
        let dateTo = $('#dateTo').val();
        let url = '/requests/filter_date';
        $.ajax({
            url: url,
            data: {
                dateFrom: dateFrom,
                dateTo:dateTo
            },
            success: function (data) {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                const list = doc.getElementById('requests-list');
                const myListContainer = document.getElementById('requests-list');
                myListContainer.innerHTML = new XMLSerializer().serializeToString(list)
            }
        });
    });
});
