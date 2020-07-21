$(document).ready(() => {
    console.log("please")
  $(".login-form").on("submit", (event) => {
    event.preventDefault();
    const email = $(".email-input").val();
    const password = $(".password-input").val();
    console.log(email, password)
    // $.post("/api/auth", { email, passowrd }).then((response) => {
    //   console.log(response);
    // });
  });
});
