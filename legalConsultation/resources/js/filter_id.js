$(document).ready(function () {
    $('#user_id_filter').on("click", function () {
        let user_id = $(this).val();
        let url = '/requests/filter_id';
        $.ajax({
           url: url,
            data: { user_id: user_id },
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
