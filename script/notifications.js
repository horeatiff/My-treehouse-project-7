// bell notification
const popUp = document.getElementsByClassName("bell")[0];
popUp.addEventListener("click", () => {
  const alertBox = document.getElementById("pop");
  const pop = document.getElementById("notification_icon");
  if (alertBox.style.display === "none") {
    alertBox.style.display = "block";
    pop.style.display = "none";
  } else {
    alertBox.style.display = "none";
    pop.style.display = "block";
  }
});

// banner notification
const notificationBanner = document.getElementById("alert");
notificationBanner.innerHTML = `<span><strong>Alert: </strong>You have unread messages</span>
<span class="notification_close" onclick="this.parentElement.style.display='none';">&times;</span>`;

const filterButtons = document.querySelectorAll(".filter");
filterButtons.forEach((button, h) => {
  button.addEventListener("click", handleActiveItems);
});
function handleActiveItems(event) {
  filterButtons.forEach((button) => button.classList.remove("active"));
  event.target.classList.add("active");
}