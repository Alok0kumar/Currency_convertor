const exchangeRates = {
    USD: { USD: 1, EUR: 0.91, POUND: 0.79, INR: 71.25 },
    EUR: { USD: 1.10, EUR: 1, POUND: 0.87, INR: 78.23 },
    POUND : { USD: 1.27, EUR: 1.15, POUND: 1, INR: 90.35 },
    INR : { USD: 0.011, EUR: 0.011, POUND: 0.0093, INR: 1 },
  };

  function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const resultDiv = document.getElementById("result");

    if (isNaN(amount) || amount <= 0) {
      resultDiv.textContent = "Please enter a valid amount.";
      return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);

    resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
  }
