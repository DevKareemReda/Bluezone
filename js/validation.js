// ! ================== validate forms ==================
let form = document.querySelector("form");
let fullName = document.querySelector("#fullname");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let subject = document.querySelector("#subject");
let message = document.querySelector("#message");

const fields = [
  { element: fullName, regex: /^(\w+)\s(\w+)$/, requiredMessage: "The username is required", errorMessage: "The username must contain at least two words separated by a space" },
  { element: email, regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, requiredMessage: "The email is required", errorMessage: "Invalid email" },
  { element: phone, regex: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, requiredMessage: "The phone is required", errorMessage: "Phone number must match format with or without country code" },
  { element: company, regex: /^(\w+\s?){3,}$/, requiredMessage: "The company is required", errorMessage: "The company must be more than 3 characters" },
  { element: subject, regex: /^(\w+\s?){3,}$/, requiredMessage: "The subject is required", errorMessage: "The subject must be more than 3 characters" },
  { element: message, regex: /^(\w+\s?){10,}$/, requiredMessage: "The message is required", errorMessage: "The message must be more than 10 characters" }
];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  fields.forEach(field => validateInput(field.element, field.regex, field.requiredMessage, field.errorMessage))
});

fields.forEach(field => {
  field.element.onblur = () =>  validateInput(field.element, field.regex, field.requiredMessage, field.errorMessage)
  field.element.oninput = () =>  validateInput(field.element, field.regex, field.requiredMessage, field.errorMessage)

})

const validateInput = (feild, regex, feildEmpty, feildRegExp) => {
  const errorMsg = feild.nextElementSibling;
  if (feild.value.trim() === "") {
    errorMsg.innerHTML = `<i class="error fa fa-exclamation-circle" aria-hidden="true"></i> ${feildEmpty}`;
    errorMsg.classList.add("active")
    feild.style.border = "1px solid #f00"
  }
  else if (!regex.test(feild.value)) {
    errorMsg.innerHTML = `<i class="error fa fa-exclamation-circle" aria-hidden="true"></i> ${feildRegExp}`
    errorMsg.classList.add("active")
    feild.style.border = "1px solid #f00"
  } else {
    errorMsg.classList.remove("active")
    feild.style.border = "1px solid #dbdbdb"
  }
};
