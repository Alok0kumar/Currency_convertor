const exchangeRates = {
    USD: { USD: 1, EUR: 0.91, GBP: 0.79 },
    EUR: { USD: 1.10, EUR: 1, GBP: 0.87 },
    GBP: { USD: 1.27, EUR: 1.15, GBP: 1 },
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