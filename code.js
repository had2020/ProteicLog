console.log("Loaded js...");

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDate();
console.log(year, month, day);

function add_meal() {
  localStorage.setItem("test1", "hello");
  console.log("msg: ", localStorage.getItem("test1"));
}

const button2 = document.getElementById("test");
button2.addEventListener("click", Test);
