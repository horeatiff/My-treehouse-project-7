// local storage
let onOff1 = localStorage.getItem("onOff1");
let switchNumber1 = Number(onOff1);

let onOff2 = localStorage.getItem("onOff2");
let switchNumber2 = Number(onOff2);

let option = localStorage.getItem("option");
let optionsValue = option;

// settings toggle
let toggle1 = document.getElementsByClassName("toggle1")[0];
let toggle1Area = toggle1.getElementsByTagName("span")[0];
let toggle1Input = toggle1.getElementsByTagName("input")[0];

toggle1Area.addEventListener("click", () => {
  switchNumber1 = switchNumber1 + 1;
});

let toggle2 = document.getElementsByClassName("toggle2")[0];
let toggle2Area = toggle2.getElementsByTagName("span")[0];
let toggle2Input = toggle2.getElementsByTagName("input")[0];

toggle2Area.addEventListener("click", () => {
  switchNumber2 = switchNumber2 + 1;
});

// select options
let select = document.getElementById("select");
let options = select.getElementsByTagName("option");

select.addEventListener("change", (e) => {
  optionsValue = e.target.value;
  console.log("didit");
});

// local storage save settings
let save = document.getElementById("save");
save.addEventListener("click", () => {
  localStorage.setItem("onOff1", JSON.stringify(switchNumber1));
  localStorage.setItem("onOff2", JSON.stringify(switchNumber2));
  localStorage.setItem("option", optionsValue);
});

// local storage clear settings
let cancel = document.getElementById("cancel");
cancel.addEventListener("click", () => {
  localStorage.removeItem("onOff1");
  localStorage.removeItem("onOff2");
  localStorage.removeItem("option");
});

// settings visited
if (onOff1 % 2 !== 0) {
  toggle1Input.setAttribute("checked", "false");
} else {
  toggle1Input.removeAttribute("checked");
}

if (onOff2 % 2 !== 0) {
  toggle2Input.setAttribute("checked", "false");
} else {
  toggle2Input.removeAttribute("checked");
}

for (let i = 1; i < options.length; i++) {
  if (options[i].value === option) {
    select.selectedIndex = i;
  }
}