$(document).ready(() => {
    console.log("please")
  $(".login-form").on("submit", (event) => {
    event.preventDefault();
    const username = $(".username-input").val();
    const password = $(".password-input").val();
    console.log(username, password)
    // $.post("/api/auth", { email, passowrd }).then((response) => {
    //   console.log(response);
    // });
  });
});
