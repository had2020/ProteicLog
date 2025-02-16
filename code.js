console.log("Loaded js...");

// change data
let first_interation = true;
const meal_window = document.getElementById("meal_window");

// main code
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDate();
const date = month + "/" + day + "/" + year;

const h1Element = document.getElementById("daynum");
h1Element.innerHTML = day;

function Add_meal() {
  meal_window.style.visibility = "visible";
}

const button1 = document.getElementById("add_meal");
button1.addEventListener("click", Add_meal);

function Clear_Meal_Inputs() {
  const inputmeal1 = document.getElementById("meal_name1");
  inputmeal1.value = "";
  const inputmeal2 = document.getElementById("meal_name2");
  inputmeal2.value = "";
  const inputmeal3 = document.getElementById("meal_name3");
  inputmeal3.value = "";
}

// meal window
function Confirm_Meal() {
  const last_entry = JSON.parse(localStorage.getItem("meal_logs")) || [];
  let let_last_entry = Array.isArray(last_entry) ? last_entry : [];
  console.log("Before Update:", let_last_entry);

  const inputmeal1 = document.getElementById("meal_name1");
  const inputmeal2 = document.getElementById("meal_name2");
  const inputmeal3 = document.getElementById("meal_name3");

  const date_entry = [
    date,
    inputmeal1.value,
    inputmeal2.value,
    inputmeal3.value,
  ];

  let found = false;

  for (let i = 0; i < let_last_entry.length; i++) {
    if (let_last_entry[i][0] === date) {
      let_last_entry[i] = date_entry;
      found = true;
      break;
    }
  }

  if (!found) {
    let_last_entry.push(date_entry);
  }

  console.log("Updated meal_logs:", let_last_entry);

  localStorage.setItem("meal_logs", JSON.stringify(let_last_entry));

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

function Settings() {
  window.location.href = "settings.html";
}

const button5 = document.getElementById("settings_button");
button5.addEventListener("click", Settings);

// table control
function addRow(date, breakfast, lunch, dinner, temperature, allergyRating) {
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
  const last_entry = JSON.parse(localStorage.getItem("meal_logs")) || [];

  for (const [entryIndex, data_entry] of last_entry.entries()) {
    let date = "";
    let meal1 = "";
    let meal2 = "";
    let meal3 = "";

    for (const [valueIndex, value] of data_entry.entries()) {
      // better in case
      if (valueIndex == 0) {
        date = value;
      }
      if (valueIndex == 1) {
        meal1 = value;
      }
      if (valueIndex == 2) {
        meal2 = value;
      }
      if (valueIndex == 3) {
        meal3 = value;
      }
      //console.log(`Entry ${entryIndex}, Index ${valueIndex}, Value: ${value}`);
    }
    addRow(date, meal1, meal2, meal3, "Sunny", "75℉ (24℃)", "1/5");
  }
}

// Initalize
if (first_interation) {
  update_table();
  meal_window.style.visibility = "hidden";
  first_interation = false;
}
