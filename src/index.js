new Typewriter(resultElement, {
  strings: Response.datat.answer,
  autoStart: true,
  delay: 20,
  cursor: "",
});

function generateHoliday(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "470c09f57bd9o90adc47e3t0cd74b0fc";
  let promt = `User instructions: Generate a Holiday desitnation about ${instructionsInput.value}`;
  let context =
    "you are a travel expert factoring in culutre, weather and activity <br> your goal is to generate a suggestion no longer than 4 lines <br> your answer must include a country, what there is to do there and the weather.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating holiday");
}

let holidayFormElement = document.querySelector("#holiday-generator-form");
holidayFormElement.addEventListener("submit", generateHoliday);
