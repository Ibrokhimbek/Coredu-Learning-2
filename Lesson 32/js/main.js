const opener = document.querySelector(".open_btn")
const closer = document.querySelector(".close_btn")

opener.addEventListener("click", () => {
    document.querySelector(".nav_list").classList.remove("closedList")
    document.querySelector(".nav_list").classList.add("openedList")
})

closer.addEventListener("click", () => {
    document.querySelector(".nav_list").classList.remove("openedList")
    document.querySelector(".nav_list").classList.add("closedList")
})