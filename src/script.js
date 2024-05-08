const output_year = document.querySelector(".years-output");
const output_month = document.querySelector(".months-output");
const output_day = document.querySelector(".days-output");

const submit_btn = document.getElementsByClassName("submit-btn")[0];

let isValid = false;
const input_day = document.getElementById("day-input");
const input_month = document.getElementById("month-input");
const input_year = document.getElementById("year-input");

const error_day = document.querySelector(".error-day");
const error_month = document.querySelector(".error-month");
const error_year = document.querySelector(".error-year");

input_day.addEventListener("input", validateDay);
input_month.addEventListener("input", validateMonth);
input_year.addEventListener("input", validateYear);

function validateDay() {
  if (!input_day.value) {
    error_day.textContent = "This field is empty";
    input_day.style.borderColor = "red";
  } else if (
    +input_day.value > 31 ||
    +input_day.value === 0 ||
    isNaN(+input_day.value)
  ) {
    error_day.textContent = "Must be a valid date";
    input_day.style.borderColor = "red";
  } else {
    error_day.textContent = "";
    input_day.style.borderColor = "";
  }
}

function validateMonth() {
  if (!input_month.value) {
    error_month.textContent = "This field is empty";
    input_month.style.borderColor = "red";
  } else if (
    +input_month.value > 12 ||
    +input_month.value === 0 ||
    isNaN(+input_month.value)
  ) {
    error_month.textContent = "Must be a valid date";
    input_month.style.borderColor = "red";
  } else {
    error_month.textContent = "";
    input_month.style.borderColor = "";
  }
}

function validateYear() {
  if (!input_year.value) {
    error_year.textContent = "This field is empty";
    input_year.style.borderColor = "red";
  } else if (
    +input_year.value > new Date().getFullYear() ||
    +input_year.value === 0 ||
    isNaN(+input_year.value)
  ) {
    error_year.textContent = "Must be a valid date";
    input_year.style.borderColor = "red";
  } else {
    error_year.textContent = "";
    input_year.style.borderColor = "";
  }
}

submit_btn.addEventListener("click", calculateDate);

function calculateDate() {
  let isValid = true;

  if (
    !input_day.value ||
    isNaN(+input_day.value) ||
    +input_day.value > 31 ||
    +input_day.value === 0 ||
    !input_month.value ||
    isNaN(+input_month.value) ||
    +input_month.value > 12 ||
    +input_month.value === 0 ||
    !input_year.value ||
    isNaN(+input_year.value) ||
    +input_year.value > new Date().getFullYear() ||
    +input_year.value === 0
  ) {
    alert("Please fill in all fields with valid dates.");
    isValid = false;
  }

  if (isValid) {
    let birthday = `${input_month.value}/${input_day.value}/${input_year.value}`;
    let birthdayObj = new Date(birthday);
    let ageDiffMill = Date.now() - birthdayObj.getTime();
    let ageDate = new Date(ageDiffMill);
    let ageYears = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDate();
    output_day.textContent = ageDay;
    output_month.textContent = ageMonth;
    output_year.textContent = ageYears;
  }
}
