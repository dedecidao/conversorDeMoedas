
// obter as referencias dos dois modulos (SELECTS) que serão usados do DOM

const currencyOneEl = document.querySelector('[data-js="currency-one"]');

const currencyTwoEl = document.querySelector('[data-js="currency-two"]');

const url = 'https://v6.exchangerate-api.com/v6/4f7bd0df2aed963f69d88573/latest/USD'

// request para a API

const fetchExchangeRate = async () => {
  try {
    const response = await fetch(url)
    console.log(response.body) // Parse JSON
  } catch (error) {
    console.log(error)
  }
}

fetchExchangeRate()

const option = `<option value="USD">United States Dollar</option>`

currencyOneEl.innerHTML = option

currencyTwoEl.innerHTML = option

console.log(currencyOneEl, currencyTwoEl);