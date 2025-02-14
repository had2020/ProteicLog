console.log("Loaded js...");

// change data
let first_interation = true;
const meal_window = document.getElementById("meal_window");

// main code
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDate();
const date = day + "/" + month + "/" + year;

const h1Element = document.getElementById("daynum");
h1Element.innerHTML = day;

function Add_meal() {
  meal_window.style.visibility = "visible";
}

const button1 = document.getElementById("add_meal");
button1.addEventListener("click", Add_meal);

// meal window
function Clear_Meal_Inputs() {
  const inputmeal1 = document.getElementById("meal_name1");
  inputmeal1.value = "";
  const inputmeal2 = document.getElementById("meal_name2");
  inputmeal2.value = "";
  const inputmeal3 = document.getElementById("meal_name3");
  inputmeal3.value = "";
}

// adding meals
function Confirm_Meal() {
  const last_entry = JSON.parse(localStorage.getItem("meal_logs")) || [];
  const inputmeal1 = document.getElementById("meal_name1");
  const inputmeal2 = document.getElementById("meal_name2");
  const inputmeal3 = document.getElementById("meal_name3");
  const date_entry = [
    date,
    inputmeal1.value,
    inputmeal2.value,
    inputmeal3.value,
  ];

  for (let value of last_entry) {
    let replaced_new_entry = last_entry;
    if (date == value[0]) {
    } else {
      let new_entry = last_entry.concat([date_entry]);
      console.log(new_entry);
      localStorage.setItem("meal_logs", JSON.stringify(new_entry));
    }
  }
  update_table();
  Clear_Meal_Inputs();
  meal_window.style.visibility = "hidden";
}

const button3 = document.getElementById("add_meal_confirm");
button3.addEventListener("click", Confirm_Meal);

//exit window
function Exit_Meal_Window() {
  Clear_Meal_Inputs();
  meal_window.style.visibility = "hidden";
}

const button4 = document.getElementById("exit_add_meal");
button4.addEventListener("click", Exit_Meal_Window);
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

// TODO
function update_table() {
  addRow("1/3/1", "Oatmeal", "Soup", "Pasta", "Sunny", "75℉ (24℃)", "2/5");
  addRow("1/4/1", "Eggs", "Sandwich", "Steak", "Cloudy", "68℉ (20℃)", "4/5");
}

// Initalize
if (first_interation) {
  update_table();
  meal_window.style.visibility = "hidden";
  first_interation = false;
}
