
let breakEl;

$(document).ready(function() {
    // Getting references to our form and input
    var grassButton = $("#grass");
    var forestButton = $("#forest");
    var rocksButton = $("#rocks");
    var waterButton = $("#water");
    var area;
    const modal = $("#monster-image")
    // When the signup button is clicked, we validate the email and password are not blank
    forestButton.on("click", function(event) {
        event.preventDefault();
        area = 2;
        console.log('click')
        $.get(`/api/monsters/find/${area}`, {
        }).then(function(data) {
            console.log(data)
            modal.empty();
            breakEl = $('<br>');
            modal.append(data, breakEl)
            $(".modal").addClass("is-active");  
            })
    });

    grassButton.on("click", function(event) {
        event.preventDefault();
        area = 1;
        console.log('click')
        $.get(`/api/monsters/find/${area}`, {
        }).then(function(data) {
            console.log(data)
            modal.empty();
            breakEl = $('<br>');
            modal.append(data, breakEl)
            $(".modal").addClass("is-active");  
            })
    });

    rocksButton.on("click", function(event) {
        event.preventDefault();
        area = 3;
        console.log('click')
        $.get(`/api/monsters/find/${area}`, {
        }).then(function(data) {
            console.log(data)
            modal.empty();
            breakEl = $('<br>');
            modal.append(data, breakEl)
            $(".modal").addClass("is-active");  
            })
    });

    waterButton.on("click", function(event) {
        event.preventDefault();
        area = 4;
        console.log('click')
        $.get(`/api/monsters/find/${area}`, {
        }).then(function(data) {
            console.log(data)
            modal.empty();
            breakEl = $('<br>');
            modal.append(data, breakEl)
            $(".modal").addClass("is-active");  
            })
    });

    $("#catch").click(function() {
        $(".modal").removeClass("is-active");
    });


});