const sliderElement = document.querySelector(".reviews-slide")
const leftButtonElement = document.querySelector(".go-left")
const rightButtonElement = document.querySelector(".go-right")
const slideElemtnst = Array.from(sliderElement.querySelectorAll(".block-start"))
const slideCount = slideElemtnst.length
let slideIndex = 0

leftButtonElement.addEventListener('click', showPreviousSlide)
rightButtonElement.addEventListener('click', showNextSlide)

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount
    updateSlider()
}

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount
    updateSlider()
}

function updateSlider() {
    slideElemtnst.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = 'flex'
      } else {
        slide.style.display = 'none'
      }
    })
}

updateSlider()

console.log(getComputedStyle(sliderElement).width)

console.log(('b' + 'a' + + 'a' + 'a').toLowerCase())



const bodyElement = document.querySelector("body")

console.log(bodyElement.offsetHeight)
console.log(bodyElement.offsetWidth)