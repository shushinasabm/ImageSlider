let rightBbutton = document.querySelector('.rightButton')
let leftBbutton = document.querySelector('.leftButton')
let sliders = document.querySelector('.image-center')
let getSlide = (slide) => {
    let slide_logo = slide.querySelector('.image-logo').getAttribute('src')
    let slide_title = slide.querySelector('.image-title').innerText
    let slide_main = slide.querySelector('.image-main').getAttribute('src')
    let slide_description = slide.querySelector('.image-description').innerText


    return {
        slideLogo: slide_logo,
        slideTitle: slide_title,
        slideMain: slide_main,
        slideDescription: slide_description,
    }
}
let setSlide = (lastSlide, mainSlide, firstSlide) => {
    let lastSlideInfo = getSlide(lastSlide)
    let mainSlideInfo = getSlide(mainSlide)
    let firstSlideInfo = getSlide(firstSlide)
    mainSlide.querySelector('.image-logo').setAttribute('src', lastSlideInfo.slideLogo)
    mainSlide.querySelector('.image-title').innerText = lastSlideInfo.slideTitle
    mainSlide.querySelector('.image-main').setAttribute('src', lastSlideInfo.slideMain)
    mainSlide.querySelector('.image-description').innerText = lastSlideInfo.slideDescription
    lastSlide.querySelector('.image-logo').setAttribute('src', firstSlideInfo.slideLogo)
    lastSlide.querySelector('.image-title').innerText = firstSlideInfo.slideTitle
    lastSlide.querySelector('.image-main').setAttribute('src', firstSlideInfo.slideMain)
    lastSlide.querySelector('.image-description').innerText = firstSlideInfo.slideDescription
    firstSlide.querySelector('.image-logo').setAttribute('src', mainSlideInfo.slideLogo)
    firstSlide.querySelector('.image-title').innerText = mainSlideInfo.slideTitle
    firstSlide.querySelector('.image-main').setAttribute('src', mainSlideInfo.slideMain)
    firstSlide.querySelector('.image-description').innerText = mainSlideInfo.slideDescription
}

let sliderInterval = setInterval(() => {
    let left_image = document.querySelector('.image-left')
    let main_image = document.querySelector('.image-center')
    let right_image = document.querySelector('.image-right')
    setSlide(left_image, main_image, right_image)
}, 2000)

sliders.addEventListener('mouseover', function (event) {
    clearInterval(sliderInterval)
})
sliders.addEventListener('mouseout', function (event) {
    sliderInterval = setInterval(() => {
        let left_image = document.querySelector('.image-left')
        let main_image = document.querySelector('.image-center')
        let right_image = document.querySelector('.image-right')
        setSlide(left_image, main_image, right_image)
    }, 2000)
})
rightBbutton.addEventListener('click', function (event) {
    let left_image = document.querySelector('.image-left')
    let main_image = document.querySelector('.image-center')
    let right_image = document.querySelector('.image-right')
    setSlide(left_image, main_image, right_image)
})
leftBbutton.addEventListener('click', function (event) {
    let left_image = document.querySelector('.image-left')
    let main_image = document.querySelector('.image-center')
    let right_image = document.querySelector('.image-right')
    setSlide(right_image, main_image, left_image)
})