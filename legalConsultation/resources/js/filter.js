$(document).ready(function () {
    $('#status-filter').on('change', function () {
        let status = $(this).val();
        let url = '/requests/filter';
        $.ajax({
            url: url,
            data: { status: status },
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

