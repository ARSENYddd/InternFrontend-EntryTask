import axios from 'axios';

export async function fetchAvailableCurrencies() {
  try {
    const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
    const data = response.data;
    const currencies = Object.keys(data.rates);
    return currencies;
  } catch (error) {
    console.error('Error fetching available currencies:', error);
    return [];
  }
}
export async function fetchExchangeRate(fromCurrency, toCurrency) {
  try {
    const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = response.data;
    return data.rates[toCurrency];
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
    return null;
  }
}