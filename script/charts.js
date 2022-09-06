// Traffic chart
const trafficCanvas = document.getElementById("chart_traffic");
let trafficData1 = {
  labels: [
    "16-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31",
  ],
  datasets: [
    {
      data: [750, 1200, 1000, 2000, 1500, 1700, 1200, 1800, 2200, 1500, 2500],
      backgroundColor: "rgb(213, 214, 236, .6)",
      borderWidth: 1,
      borderColor: "rgb(161,162,191, .8)",
    },
  ],
};

let trafficData2 = {
  labels: [
    "1-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31",
  ],
  datasets: [
    {
      data: [130, 150, 248, 450, 380, 410, 450, 360, 440, 410, 620],
      backgroundColor: "rgb(213, 214, 236, .6)",
      borderWidth: 1,
      borderColor: "rgb(161,162,191, .8)",
    },
  ],
};

let trafficData3 = {
  labels: [
    "1-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31",
  ],
  datasets: [
    {
      data: [90, 790, 700, 1210, 1380, 1700, 920, 1380, 930, 1510, 1340],
      backgroundColor: "rgb(213, 214, 236, .6)",
      borderWidth: 1,
      borderColor: "rgb(161,162,191, .8)",
    },
  ],
};

let trafficData4 = {
  labels: [
    "1-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31",
  ],
  datasets: [
    {
      data: [3400, 4000, 2800, 5100, 4600, 6200, 3300, 5400, 4300, 6100, 5500],
      backgroundColor: "rgb(213, 214, 236, .6)",
      borderWidth: 1,
      borderColor: "rgb(161,162,191, .8)",
    },
  ],
};

let trafficOptions = {
  aspectRatio: 2.5,
  animation: {
    duration: 600,
    easing: "linear",
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  legend: {
    display: false,
  },
};

let trafficChart = new Chart(trafficCanvas, {
  type: "line",
  data: trafficData1,
  options: trafficOptions,
});

// Traffic chart filters
let trafficTerm = document.getElementsByClassName("filters")[0];
trafficTerm.addEventListener("click", (e) => {
  let selectedTerm = e.target.innerHTML;
  if (selectedTerm === "Hourly") {
    let trafficChart = new Chart(trafficCanvas, {
      type: "line",
      data: trafficData1,
      options: trafficOptions,
    });
  } else if (selectedTerm === "Daily") {
    let trafficChart = new Chart(trafficCanvas, {
      type: "line",
      data: trafficData2,
      options: trafficOptions,
    });
  } else if (selectedTerm === "Weekly") {
    let trafficChart = new Chart(trafficCanvas, {
      type: "line",
      data: trafficData3,
      options: trafficOptions,
    });
  } else if (selectedTerm === "Monthly") {
    let trafficChart = new Chart(trafficCanvas, {
      type: "line",
      data: trafficData4,
      options: trafficOptions,
    });
  }
});

// Daily chart
const dailyCanvas = document.getElementById("chart_daily");

const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {
      label: "# of Hits",
      data: [75, 115, 175, 125, 225, 200, 100],
      backgroundColor: "rgb(116,119,191, 1)",
      borderWidth: 1,
    },
  ],
};

const dailyOptions = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  cornerRadius: 10,
  legend: {
    display: false,
  },
};

let dailyChart = new Chart(dailyCanvas, {
  type: "bar",
  data: dailyData,
  options: dailyOptions,
});

// Mobile doughnut chart
const mobileCanvas = document.getElementById("chart_mobile");
const mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [
    {
      label: "# of Users",
      data: [2300, 650, 510],
      borderWidth: 0,
      backgroundColor: [
        "rgb(116,119,191)",
        "rgb(129,201,143)",
        "rgb(81,182,200)",
      ],
    },
  ],
};

const mobileOptions = {
  legend: {
    position: "right",
    labels: {
      boxWidth: 20,
      fontStyle: "bold",
    },
  },
};

let mobileChart = new Chart(mobileCanvas, {
  type: "doughnut",
  data: mobileData,
  options: mobileOptions,
});

// chart filters selected
const filterButtons = document.querySelectorAll(".filter");
filterButtons.forEach((button, h) => {
  button.addEventListener("click", handleActiveItems);
});
function handleActiveItems(event) {
  filterButtons.forEach((button) => button.classList.remove("active"));
  event.target.classList.add("active");
}
