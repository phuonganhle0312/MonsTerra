let collectionEl;

$(document).ready(function() {
        event.preventDefault();
        userId = 
        console.log('click')
        $.get(`/api/collection/find/${userId}`, {
        }).then(function(data) {
            console.log(data)
            modal.empty();
            let buttonEl = $('<button>').attr('id', 'catch').text('Catch monster!');
            breakEl = $('<br>');
            modal.append(data, breakEl, buttonEl)
            $(".modal").addClass("is-active");  
            })

});
