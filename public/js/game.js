$(document).ready(function() {
    // Getting references to our form and input
    var forestButton = $("#forest");
    var area;
    const petDiv = $("#imageDiv")
    // When the signup button is clicked, we validate the email and password are not blank
    forestButton.on("click", function(event) {
        event.preventDefault();
        area = 2;
        console.log('click')
        $.get(`/api/monsters/find/${area}`, {
        }).then(function(data) {
            console.log(data)
            petDiv.empty();
            petDiv.append(data)
            })
    });
});
