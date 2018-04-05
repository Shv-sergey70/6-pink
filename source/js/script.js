var mainNavToggle = document.querySelector(".main-nav__toggle");
var mainNav = document.querySelector(".main-nav");
var popupFailure = document.querySelector(".popup-failure");
var popupFailureBtn = document.querySelector(".popup-failure__btn");
var popupSuccess = document.querySelector(".popup-success");
var popupSuccessBtn = document.querySelector(".popup-success__btn");
var form = document.querySelector(".form");
var formBtn = document.querySelector(".form__btn");
var name = document.querySelector("[name=name]");
var surname = document.querySelector("[name=surname]");
var email = document.querySelector("[name=email]");

mainNav.classList.remove("main-nav--nojs");

mainNavToggle.addEventListener("click", function() {
  if (mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
  }
  else {
    mainNav.classList.add("main-nav--closed");
    mainNav.classList.remove("main-nav--opened");
  }
});

formBtn.addEventListener('click', function() {
  if (!name.value || !surname.value) {
    popupFailure.classList.add("popup-failure--show");
  }
  else {
    popupSuccess.classList.add("popup-success--show");
  }
});

popupFailureBtn.addEventListener("click", function() {
  popupFailure.classList.remove("popup-failure--show");
});

popupSuccessBtn.addEventListener("click", function() {
  popupSuccess.classList.remove("popup-success--show");
});
