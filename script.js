// бургер меню

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", function () {
  burger.classList.toggle("open");
  nav.classList.toggle("open");
});

// форма

const form = document.querySelector(".form");
const firstName = document.querySelector("#first-name");
const surname = document.querySelector("#surname");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");

function showError(input, message) {
  const field = input.parentElement;
  field.classList.add("error");
  field.classList.remove("success");
  field.querySelector(".form-error").textContent = message;
}

function showSuccess(input) {
  const field = input.parentElement;
  field.classList.remove("error");
  field.classList.add("success");
  field.querySelector(".form-error").textContent = "";
}

function checkRequired(input, message) {
  if (input.value.trim() === "") {
    showError(input, message);
    return false;
  }
  showSuccess(input);
  return true;
}

function checkEmail() {
  const value = email.value.trim();

  if (value === "") {
    showError(email, "Введіть email");
    return false;
  }

  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(value)) {
    showError(email, "Некоректний email, наприклад: book@mail.com");
    return false;
  }

  showSuccess(email);
  return true;
}

function checkPhone() {
  const value = phone.value.trim();

  if (value === "") {
    showError(phone, "Введіть номер телефону");
    return false;
  }

  const digits = value.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13) {
    showError(phone, "Некоректний номер, наприклад: +380123456789");
    return false;
  }

  showSuccess(phone);
  return true;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameOk = checkRequired(firstName, "Введіть ім’я");
  const surnameOk = checkRequired(surname, "Введіть прізвище");
  const emailOk = checkEmail();
  const phoneOk = checkPhone();

  if (nameOk && surnameOk && emailOk && phoneOk) {
    alert("Дякуємо! Ваша форма успішно відправлена.");
    form.reset();

    document.querySelectorAll(".form-field").forEach(function (field) {
      field.classList.remove("success");
    });
  }
});

[firstName, surname, email, phone].forEach(function (input) {
  input.addEventListener("input", function () {
    input.parentElement.classList.remove("error");
    input.parentElement.classList.remove("success");
    input.parentElement.querySelector(".form-error").textContent = "";
  });
});

// faq

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function (item) {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", function () {
    faqItems.forEach(function (other) {
      if (other !== item) {
        other.classList.remove("open");
      }
    });

    item.classList.toggle("open");
  });
});
