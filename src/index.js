function displayHoliday(response) {
  let resultElement = document.querySelector("#result");
  console.log("holiday generated");
  new Typewriter(resultElement, {
    strings: [response.answer],
    autoStart: true,
    delay: 20,
    cursor: "",
    loop: false,
    deleteSpeed: 0,
  });
}

function generateHoliday(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions").value;
  let resultElement = document.querySelector("#result");
  resultElement.innerHTML = "Generating a holiday... ✈️";

  let apiKey = "470c09f57bd9o90adc47e3t0cd74b0fc";
  let context =
    "You are a travel expert. Suggest one holiday destination including country, activities, and weather. Maximum 4 lines.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    instructionsInput
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  console.log("generating holiday");

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("API response:", data);

      displayHoliday(data);
    })

    .catch((error) => {
      console.error("API error:", error);
      resultElement.innerHTML = "Something went wrong 😢";
    });
}

let holidayFormElement = document.querySelector("#holiday-generator-form");
holidayFormElement.addEventListener("submit", generateHoliday);
