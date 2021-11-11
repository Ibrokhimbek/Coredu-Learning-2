const opener = document.querySelector(".open_btn")
const closer = document.querySelector(".close_btn")
const listItems = document.querySelectorAll(".nav_list-item")
console.log(listItems);

opener.addEventListener("click", () => {
    document.querySelector(".nav_list").classList.remove("closedList")
    document.querySelector(".nav_list").classList.add("openedList")
    listItems.forEach((item, index) => {
        item.style.animation = `listAnimation 0.3s forwards ease-in ${index / 5}s`
        console.log(index/5);
    })
})

closer.addEventListener("click", () => {
    document.querySelector(".nav_list").classList.remove("openedList")
    document.querySelector(".nav_list").classList.add("closedList")
    listItems.forEach((item, index) => {
        item.style.animation = `listRemove 0.3s forwards ease-in ${index / 5}s`
    })
})