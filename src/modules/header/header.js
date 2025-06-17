const buttonOpenBurgerElement = document.querySelector(".header-burger__button");
const buttonCloseBurgerElement = document.querySelector(".burger-block__close");
const burgerBlockElement = document.querySelector(".burger-block");

buttonOpenBurgerElement.addEventListener("click", () => {
  burgerBlockElement.classList.add("active")
})

buttonCloseBurgerElement.addEventListener("click", () => {
  burgerBlockElement.classList.remove("active")
})