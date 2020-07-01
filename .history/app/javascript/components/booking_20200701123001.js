const date_select = document.querySelectorAll(".select-date");
const start_date = document.querySelector("#start-date");
const end_date = document.querySelector("#end-date");

date_select.forEach((field) => {
  field.addEventListener("change", (e) => {
    const starting = Date.parse(start_date.value);
    const ending = Date.parse(end_date.value);
    console.log(starting);
    console.log(ending);
  })
})