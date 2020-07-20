$(document).ready(() => {
  $(".signup-form").on("submit", (event) => {
    event.preventDefault();
    const username = $(".username");
    const email = $(".email-input").val();
    const password = $(".password-input").val();
  });
});
