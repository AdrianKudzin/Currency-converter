let form = document.querySelector(".js-form");
let result = document.querySelector(".js-result");
let amount = document.querySelector(".js-amount");
let euro = document.querySelector(".js-euro");
let dolar = document.querySelector(".js-dolar");
let funt = document.querySelector(".js-funt");

let exchangeRateValue = 4.42;

form.addEventListener("submit", () => {
    if (euro.checked) {
        exchangeRateValue = 4.42;
    } else if (dolar.checked) {
        exchangeRateValue = 3.97;
    } else if (funt.checked) {
        exchangeRateValue = 5.15;
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    result.value = exchangeRateValue * amount.value;
    result.innerText = result.value.toFixed(2);
});