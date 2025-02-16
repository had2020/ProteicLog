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
  //meal_window.style.visibility = "visible";
  meal_window.classList.remove("hidden"); // Show
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
  const temperature = document.getElementById("temp");

  const date_entry = [
    date,
    inputmeal1.value,
    inputmeal2.value,
    inputmeal3.value,
    temperature.value,
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
  //meal_window.style.visibility = "hidden";
  meal_window.classList.add("hidden"); // Hide
}

const button3 = document.getElementById("add_meal_confirm");
button3.addEventListener("click", Confirm_Meal);

//exit window
function Exit_Meal_Window() {
  Clear_Meal_Inputs();
  //meal_window.style.visibility = "hidden";
  meal_window.classList.add("hidden"); // Hide
}

const button4 = document.getElementById("exit_add_meal");
button4.addEventListener("click", Exit_Meal_Window);
//

//exit allergy window
function Exit_Allergy_Window() {
  allergy_window.classList.add("hidden"); // Hide
}

const button6 = document.getElementById("exit_allergy_window");
button6.addEventListener("click", Exit_Allergy_Window);
//

// allergy window init
function Open_Allergy_Window() {
  allergy_window.classList.remove("hidden"); // Show
}

const button7 = document.getElementById("report_allergy");
button7.addEventListener("click", Open_Allergy_Window);

function Settings() {
  window.location.href = "settings.html";
}

const button5 = document.getElementById("settings_button");
button5.addEventListener("click", Settings);

// allergy window
function Confirm_Allergy() {
  const last_entry = JSON.parse(localStorage.getItem("meal_logs")) || [];
  let let_last_entry = Array.isArray(last_entry) ? last_entry : [];
  console.log("Before Update:", let_last_entry);

  const allergy_rating = document.getElementById("allergy_rating");

  const date_entry = [
    let_last_entry[0],
    let_last_entry[1],
    let_last_entry[2],
    let_last_entry[3],
    allergy_rating.value,
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
  allergy_window.classList.add("hidden"); // Hide
}

const button8 = document.getElementById("report_allergy_confirm");
button8.addEventListener("click", Confirm_Meal);

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
  temperatureCell.style.backgroundColor = getTempColor(temperature);

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

function getTempColor(rating) {
  const numRating = parseInt(rating[0]);
  if (numRating == 1) {
    return "blue";
  } else if (numRating == 2) {
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
    let temp = "";

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
      if (valueIndex == 4) {
        temp = value;
      }
      //console.log(`Entry ${entryIndex}, Index ${valueIndex}, Value: ${value}`);
    }
    addRow(date, meal1, meal2, meal3, temp, "0/5");
  }
}

// Initalize
if (first_interation) {
  update_table();
  //meal_window.style.visibility = "hidden";
  meal_window.classList.add("hidden"); // Hide
  allergy_window.classList.add("hidden"); // Hide
  first_interation = false;
}
