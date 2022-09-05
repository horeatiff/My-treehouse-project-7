// user search
let namesList = document.getElementById("users").getElementsByTagName("option");

user.addEventListener("keyup", (e) => {
  let userString = e.target.value;
  userString.toLowerCase();
  for (i = 0; i < namesList.length; i++) {
    if (userString.includes(namesList[i].innerHTML.toLowerCase() === false)) {
      namesList[i].style.display = "";
    }
  }
});
