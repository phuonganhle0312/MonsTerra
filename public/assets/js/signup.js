// $(document).ready(() => {
//   $(".signup-form").on("submit", (event) => {
//     // console.log("clicked");
//     event.preventDefault();
//     const username = $(".username").val();
//     const password = $(".password-input").val();
//     console.log(username, password);
//     $.post("/api/users/signup", { username, password }).then((response) => {
//       console.log(response);
//     });
//   });
// });



$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $(".signup-form");
  var usernameInput = $(".username");
  var passwordInput = $(".password-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    console.log('submitting')
    event.preventDefault();
    var userData = {
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.username || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.username, userData.password);
    usernameInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(username, password) {
    $.post("/api/users/signup", {
      username: username,
      password: password
    })
      .then(function(data) {
        // $.post("/api/collections/new", {
        
        // })
        console.log('user data: ' + data)
        // window.location.replace("/");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
