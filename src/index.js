function generateHoliday(event) {
  event.preventDefault();

  const resultElement = document.querySelector(".holiday-result");
  resultElement.innerHTML = "";

  new Typewriter(resultElement, {
    strings: "Vietnam is very hot and the city has lots to explore!",
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

let holidayFormElement = document.querySelector("#holiday-generator-form");
holidayFormElement.addEventListener("submit", generateHoliday);
