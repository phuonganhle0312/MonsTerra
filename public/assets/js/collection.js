$(document).ready(function() {
    $.get(`/api/users/collection`, {
    }).then(function(data) {
        console.log('user inventory');
        console.log(data);
    });
});