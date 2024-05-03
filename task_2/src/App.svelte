<script>
  import axios from 'axios';
  import CurrencyPair from './components/CurrencyPair.svelte';
  import AmountInput from './components/AmountInput.svelte';

  let exchangeRate = 0;
  let fromCurrency = 'USD';
  let toCurrency = 'EUR';
  let amount = 13;

  async function fetchExchangeRate(fromCurrency, toCurrency) {
    try {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      const data = response.data;
      return data.rates[toCurrency];
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
      return null;
    }
  }

  async function calculateExchange() {
    console.log('Calculating exchange...'); // Добавим вывод в консоль для отслеживания вызовов функции
    if (!fromCurrency || !toCurrency || !amount) return;

    exchangeRate = await fetchExchangeRate(fromCurrency, toCurrency);

    if (exchangeRate !== null) {
      console.log('Exchange rate:', exchangeRate); // Добавим вывод обменного курса в консоль
      convertedAmount = amount * exchangeRate;
    } else {
      console.error('Error fetching exchange rate');
    }
  }

  let convertedAmount = 0;

  $: {
    calculateExchange();
  }

  function handleInputChange() {
    calculateExchange();
  }
</script>

<main>
  <h1>Currency Converter</h1>
  
  <CurrencyPair bind:fromCurrency bind:toCurrency />
  <AmountInput bind:amount on:input={handleInputChange} />
  
  {#if exchangeRate !== 0}
    <p>{amount} {fromCurrency} equals {convertedAmount.toFixed(2)} {toCurrency}</p>
  {:else}
    <p>Please select currencies and enter amount.</p>
  {/if}
</main>
