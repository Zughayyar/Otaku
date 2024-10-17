/*
title: Web Fundamental final Exam
file: main script
type: Javascript file
Developer: Anas Zughayyar
Date: 17/10/2023
*/

// Load Page:
console.log("Page loaded ....")

function return_search() {
    let search_input = document.getElementById("search-input")
    alert("you have searched for " + search_input.value)
}

function remove_element(element) {
    element.remove()
}

function change_slide_right() {
    let slide_image = document.getElementById("top-slide")
    slide_image.src = "./Assets/Slider/tv-2.jpg"
}

function change_slide_left() {
    let slide_image = document.getElementById("top-slide")
    slide_image.src = "./Assets/Slider/tv-5.jpg"
}

function add_like() {
    let likes_num = document.getElementById("likes-num")
    likes_num.textContent++

}
