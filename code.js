console.log("Loaded js...");

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDate();
console.log(day, month, year);

const h1Element = document.getElementById("daynum");
h1Element.innerHTML = day;

function add_meal() {
  localStorage.setItem("test1", "add");
  console.log("msg: ", localStorage.getItem("test1"));
}

const button1 = document.getElementById("add_meal");
button1.addEventListener("click", add_meal);

function report_allergy() {
  localStorage.setItem("test1", "report");
  console.log("msg: ", localStorage.getItem("test1"));
}

const button2 = document.getElementById("report_allergy");
button2.addEventListener("click", report_allergy);
