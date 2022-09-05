// message form
const user = document.getElementById("user_field");
const message = document.getElementById("message_field");
const send = document.getElementById("send");

send.addEventListener("click", () => {
  if (user.value === "" && message.value === "") {
    alert("Fill out user and message fields before sending");
  } else if (user.value === "") {
    alert("Fill out user field before sending");
  } else if (message.value === "") {
    alert("Fill out message field before sending");
  } else {
    alert(`Message sent to: ${user.value}`);
  }
});