"use strict";

const form = document.querySelector("form");

// Messages
const firstNameMessage = document.getElementById("first-name");
const lastNameMessage = document.getElementById("last-name");
const emailMessage = document.getElementById("email");
const queryMessage = document.getElementById("enquiry");
const textareaMessage = document.getElementById("message-field");
const checkboxMessage = document.getElementById("checkbox-message");
const successMessage = document.querySelector(".success-container");

// Input Areas
const inputFirstName = document.getElementById("name-first");
const inputLastName = document.getElementById("name-last");
const inputEmail = document.getElementById("e-mail");
const inputMessage = document.getElementById("message");
const checkbox = document.getElementById("agree");

// Buttons
const radioButtons = document.querySelectorAll('input[name="fixed-input"]');
const radioButtonsMessage = document.getElementById("enquiry");
const submitButton = document.querySelector(".button");

const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Reset all messages

function resetAll() {
  inputFirstName.value = "";
  inputLastName.value = "";
  inputEmail.value = "";
  inputMessage.value = "";
  checkbox.checked = false;
  radioButtons.forEach((radio) => {
    radio.checked = false;
  });
  successMessage.style.display = "none";
}

submitButton.addEventListener("click", () => {
  //   console.log("button clicked");

  const conditions = [
    { test: inputFirstName.value.trim() !== "", element: firstNameMessage },
    { test: inputLastName.value.trim() !== "", element: lastNameMessage },
    { test: inputMessage.value.trim() !== "", element: textareaMessage },
    { test: validEmail.test(inputEmail.value.trim()), element: emailMessage },
    { test: checkbox.checked, element: checkboxMessage },
    {
      test: Array.from(radioButtons).some((radio) => radio.checked),
      element: radioButtonsMessage,
    },
  ];

  conditions.forEach(({ element }) => {
    element.style.display = "none";
  });

  let allValid = true;

  conditions.forEach(({ test, element }) => {
    if (!test) {
      element.style.display = "block";
      allValid = false;
    }
  });

  if (allValid) {
    successMessage.style.display = "flex";

    setTimeout(() => {
      successMessage.style.display = "none";
      resetAll();
    }, 2000);
  }
});
