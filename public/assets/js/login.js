// $(document).ready(() => {
//   $(".login-form").on("submit", (event) => {
//     event.preventDefault();
//     console.log("clicked");
//     const username = $(".username-input").val();
//     const password = $(".password-input").val();
//     $.post("/api/users/login", { username, password }).then((response) => {
//       console.log(response)
//     // window.location.replace("/")
//   });
// });
// });
$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $(".login-form");
  var usernameInput = $(".username-input");
  var passwordInput = $(".password-input");

  // When the form is submitted, we validate there's an username and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim()
    };
    console.log(userData)
    if (!userData.username || !userData.password) {
      return;
    }

    // If we have an username and password we run the loginUser function and clear the form
    loginUser(userData.username, userData.password);
    usernameInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(username, password) {
    $.post("/api/users/login", {
      username: username,
      password: password
    })
      .then(function() {
        window.location.replace("/game");
        // If there's an error, log the error
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});
