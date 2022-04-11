let imageCenter =document.getElementsByClassName('photos-main')
let textParagraph=document.getElementsByClassName('text-ph')
let photoHeader =document.getElementsByClassName('photoHeader')
let textHeader =document.getElementsByClassName('text-header')
let leftButton=document.querySelector('.leftButton')
let rightButton=document.querySelector('.rightButton')

setInterval(function () {
    imageCenter[0].src=imageCenter[1].src
    imageCenter[1].src=imageCenter[2].src
    imageCenter[2].src=imageCenter[0].src
    photoHeader[0].src=photoHeader[1].src
    photoHeader[1].src=photoHeader[2].src
    photoHeader[2].src=photoHeader[0].src
    textParagraph[0].innerText=textParagraph[1].innerText
    textParagraph[1].innerText=textParagraph[2].innerText
    textParagraph[2].innerText=textParagraph[0].innerText
    textHeader[0].innerText=textHeader[1].innerText
    textHeader[1].innerText=textHeader[2].innerText
    textHeader[2].innerText=textHeader[0].innerText
},2000)

leftButton.addEventListener('click',function (event) {
        imageCenter[0].src=imageCenter[1].src
    imageCenter[1].src=imageCenter[2].src
    imageCenter[2].src=imageCenter[0].src
    photoHeader[0].src=photoHeader[1].src
    photoHeader[1].src=photoHeader[2].src
    photoHeader[2].src=photoHeader[0].src
    textParagraph[0].innerText=textParagraph[1].innerText
    textParagraph[1].innerText=textParagraph[2].innerText
    textParagraph[2].innerText=textParagraph[0].innerText
    textHeader[0].innerText=textHeader[1].innerText
    textHeader[1].innerText=textHeader[2].innerText
    textHeader[2].innerText=textHeader[0].innerText
})
rightButton.addEventListener('click',function (event) {
    imageCenter[1].src=imageCenter[0].src
    imageCenter[0].src=imageCenter[2].src
    imageCenter[2].src=imageCenter[1].src
    photoHeader[1].src=photoHeader[0].src
    photoHeader[0].src=photoHeader[2].src
    photoHeader[2].src=photoHeader[1].src
    textParagraph[1].innerText=textParagraph[0].innerText
    textParagraph[0].innerText=textParagraph[2].innerText
    textParagraph[2].innerText=textParagraph[1].innerText
    textHeader[1].innerText=textHeader[0].innerText
    textHeader[0].innerText=textHeader[2].innerText
    textHeader[2].innerText=textHeader[1].innerText
})