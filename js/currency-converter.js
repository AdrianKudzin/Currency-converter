{



    const calculateResult = (amount, currency) => {
        const rateEUR = 4.42;
        const rateUSD = 3.97;
        const rateGBP = 5.15;

        switch (currency) {
            case "EUR":
                return amount * rateEUR;
            case "USD":
                return amount * rateUSD;
            case "GBP":
                return amount * rateGBP;
        };
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount.toFixed(2)} ${currency} = ${result.toFixed(2)} PLN`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const amountElement = document.querySelector(".js-amount");
        const currency = document.querySelector(".js-currency:checked").value;

        const amount = +amountElement.value;
        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();




}