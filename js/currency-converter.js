let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let amountElement = document.querySelector(".js-amount");


let rateEUR = 4.42;
let rateUSD = 3.97;
let rateGBP = 5.15;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = document.querySelector(".js-currency:checked").value;
    let result;

    switch (currency) {
        case "EUR":
            result = amount * rateEUR;
            break;
        case "USD":
            result = amount * rateUSD;
            break;
        case "GBP":
            result = amount * rateGBP;
            break;
    }

    resultElement.innerHTML = `${amount.toFixed(2)} ${currency} = ${result.toFixed(2)} PLN`;
});
