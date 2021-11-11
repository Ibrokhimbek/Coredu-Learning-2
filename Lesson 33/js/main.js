const data = [{
    model: "Malibu",
    year: 2020,
    client: "John Smith",
    color: "White",
    image: "https://www.gazeta.uz/media/img/2017/04/odeCxw14932250895921_b.jpg"
}, {
    model: "Damas",
    year: 2008,
    client: "John Peter",
    color: "White",
    image: "https://uzdaewoo.by/wp-content/uploads/2020/11/Chevrolet-Damas.jpg"
}, {
    model: "Nexia 3",
    year: 2017,
    client: "Sherlock Holmes",
    color: "Black",
    image: "https://a.d-cd.net/YaAAAgBbr-A-960.jpg"
}, {
    model: "Tiko",
    year: 2003,
    client: "Vasya",
    color: "Red Line",
    image: "https://apollo-olx.cdnvideo.ru/v1/files/3ze4n8zsnz3b2-UZ/image;s=644x461"
},]

// const ul = document.createElement("ul")
// ul.appendChild(listItems)
// document.querySelector(".result").append(ul)

data.forEach((data, index) => {
    const li = `
        <li>${data.model} / ${data.year}  / ${data.client} / ${data.color} / <img src="${data.image}" width="50px" height="auto"/></li>
    `
    document.querySelector(".result").innerHTML += li
})