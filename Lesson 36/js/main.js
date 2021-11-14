fetch("http://xolisnazar.uz/api/index/currency")
    .then(data => {
        return data.json()
    })
    .then(data => {
        const currencyArr = data.currencyData
        console.log(currencyArr);
        const selectInput = document.querySelector("#currencySelect")
        
        currencyArr.forEach(element => {
            const option = `
                <option value="${element.Ccy}">${element.Ccy}</option>
            `
            selectInput.innerHTML += option
        });

        const btn = document.querySelector("#clickBtn")
        btn.addEventListener("click", () => {
            const currencyRate = document.querySelector("#currencyRate")
            const selectValue = selectInput.value
            const foundObj = currencyArr.find((obj) => {
                return obj.Ccy == selectValue
            })
            
            const result = parseInt(currencyRate.value*foundObj.Rate)
            document.querySelector("#LastResult").innerHTML = result+" so'm"
        })
    })