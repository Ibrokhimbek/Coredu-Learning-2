//! GET POST PUT DELETE

// fetch("http://xolisnazar.uz/api/index/currency")
//     .then((data) => {
//         return data.json()
//     })
//     .then((data) => {
//         const currencyArr = data.currencyData
//         currencyArr.forEach(element => {
//             const li = `
//         <li>1 ${element.CcyNm_UZ} = ${element.Rate}so'm</li>
//         `
//             document.querySelector("#result").innerHTML += li
//         });
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// axios.get("http://xolisnazar.uz/api/index/currency")
//     .then((data) => {
//         const currencyArr = data.data.currencyData
//         currencyArr.forEach(element => {
//             const li = `
//         <li>1 ${element.CcyNm_UZ} = ${element.Rate}so'm</li>
//         `
//             document.querySelector("#result").innerHTML += li
//         });
// })

axios.get("https://dog.ceo/api/breeds/image/random")
.then((data) => {
    console.log(data.data.message);
    const image = `
        <img src="${data.data.message}" alt="dog image" width="400px" />
        <a href="${data.data.message}" download>Download image</a>
        `
    document.querySelector("#result").innerHTML = image
})

const randomBtn = document.querySelector("#randomImg")
randomBtn.addEventListener("click", () => {

    axios.get("https://dog.ceo/api/breeds/image/random")
        .then((data) => {
            console.log(data.data.message);
            const image = `
                <img src="${data.data.message}" alt="dog image"  width="400px"/>
                <a href="${data.data.message}" download="">Download image</a>
                `
            document.querySelector("#result").innerHTML = image
        })
        .catch()
})
