console.log("Loaded js...");

// change data
let first_interation = true;
const meal_window = document.getElementById("meal_window");

// main code
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDate();
console.log(day, month, year);

const h1Element = document.getElementById("daynum");
h1Element.innerHTML = day;

function Add_meal() {
  console.log("nvm");
  meal_window.style.visibility = "visible";
  localStorage.setItem("meal_window", "open");
}

const button1 = document.getElementById("add_meal");
button1.addEventListener("click", Add_meal);

// Meal window update
function Close_Meal_Window() {
  console.log("sdjsd");
  localStorage.setItem("meal_window", "closed");
}

const button3 = document.getElementById("add_meal_confirm");
button3.addEventListener("click", Close_Meal_Window);
//

function Report_allergy() {
  localStorage.setItem("test1", "report");
  console.log("msg: ", localStorage.getItem("test1"));
}

const button2 = document.getElementById("report_allergy");
button2.addEventListener("click", Report_allergy);

// table control
function addRow(
  date,
  breakfast,
  lunch,
  dinner,
  weather,
  temperature,
  allergyRating,
) {
  const table = document.querySelector(".dashboard_table");

  const newRow = table.insertRow();

  const dateCell = newRow.insertCell();
  dateCell.textContent = date;

  const breakfastCell = newRow.insertCell();
  breakfastCell.textContent = breakfast;
  breakfastCell.classList.add("dti2");

  const lunchCell = newRow.insertCell();
  lunchCell.textContent = lunch;

  const dinnerCell = newRow.insertCell();
  dinnerCell.textContent = dinner;
  dinnerCell.classList.add("dti2");

  const weatherCell = newRow.insertCell();
  weatherCell.textContent = weather;

  const temperatureCell = newRow.insertCell();
  temperatureCell.textContent = temperature;
  temperatureCell.classList.add("dti2");

  const allergyCell = newRow.insertCell();
  allergyCell.textContent = allergyRating;
  allergyCell.style.backgroundColor = getAllergyColor(allergyRating);
}

function getAllergyColor(rating) {
  const numRating = parseInt(rating.split("/")[0]);
  if (numRating <= 2) {
    return "green";
  } else if (numRating <= 4) {
    return "orange";
  } else {
    return "red";
  }
}

function update_table() {
  addRow("1/3/1", "Oatmeal", "Soup", "Pasta", "Sunny", "75℉ (24℃)", "2/5");
  addRow("1/4/1", "Eggs", "Sandwich", "Steak", "Cloudy", "68℉ (20℃)", "4/5");
}

// Initalize
if (first_interation) {
  if (localStorage.getItem("meal_window") != "open") {
    meal_window.style.visibility = "hidden";
    first_interation = false;
  }
}
