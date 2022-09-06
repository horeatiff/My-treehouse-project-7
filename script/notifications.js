// bell notification
const popUp = document.getElementsByClassName("bell")[0];
popUp.addEventListener("mouseover", () => {
  const alertBox = document.getElementById("pop");
  const pop = document.getElementById("notification_icon");
  if (alertBox.style.display === "none") {
    alertBox.style.display = "block";
    pop.style.display = "none";
  } else
    onmouseout = () => {
      alertBox.style.display = "none";
      pop.style.display = "block";
    };
});

popUp.addEventListener("touchstart", () => {
  const alertBox = document.getElementById("pop");
  const pop = document.getElementById("notification_icon");
  if (alertBox.style.display === "none") {
    alertBox.style.display = "block";
    pop.style.display = "none";
  } else
    touchend = () => {
      alertBox.style.display = "none";
      pop.style.display = "block";
    };
});

// banner notification
const notificationBanner = document.getElementById("alert");
notificationBanner.innerHTML = `<span><strong>Alert: </strong>You have unread messages</span>
<span class="notification_close" onclick="this.parentElement.style.display='none';">&times;</span>`;
