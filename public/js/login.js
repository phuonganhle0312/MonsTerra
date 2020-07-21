$(document).ready(() => {
  $(".login-form").on("submit", (event) => {
    event.preventDefault();
    console.log("clicked");
    const username = $(".username-input").val();
    const password = $(".password-input").val();
    $.post("/api/users/login", { username, password }).then((response) => {
      window.location.replace("/")

    });
  });
});

