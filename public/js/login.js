$(document).ready(() => {
  console.log("please");
  $(".login-form").on("submit", (event) => {
    event.preventDefault();
    const username = $(".username-input").val();
    const password = $(".password-input").val();
    console.log(username, password);
    $.post("/api/auth", { username, password }).then((response) => {
      console.log(response);
    });
  });
});
