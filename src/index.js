function displayHoliday(response) {
  let resultElement = document.querySelector("#result");
  console.log("holiday generated");

  if (!response || !response.answer) {
    resultElement.innerHTML =
      "I couldn't generate a holiday from that 😕 Try describing what you want.";

    return;
  }

  new Typewriter(resultElement, {
    strings: [response.answer],
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generateHoliday(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions").value;
  let resultElement = document.querySelector("#result");

  if (!instructionsInput) {
    resultElement.innerHTML = "Please enter a description of your holiday 😊";

    return;
  }

  let words = instructionsInput.split(/\s+/);

  let letterCount = (instructionsInput.match(/[a-zA-Z]/g) || []).length;

  if (words.length < 3 || letterCount < 5) {
    resultElement.innerHTML =
      "That doesn’t look like a full description 🤔 Try something like: 'Relaxing beach holiday in a warm place'.";

    return;
  }
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
