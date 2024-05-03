import axios from 'axios';

/**
 * Получает курс обмена между двумя валютами.
 * @param {string} fromCurrency Код валюты, из которой происходит конвертация.
 * @param {string} toCurrency Код валюты, в которую происходит конвертация.
 * @returns {Promise<number|null>} Курс обмена или null в случае ошибки.
 */
export async function getExchangeRate(fromCurrency, toCurrency) {
  try {
    const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = response.data;
    console.log(data);
    return data.rates[toCurrency];
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
    return null; // Возвращаем null в случае ошибки
  }
}