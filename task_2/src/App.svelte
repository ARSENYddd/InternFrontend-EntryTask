<script>
  import { onMount } from 'svelte';
  import CurrencyPair from './components/CurrencyPair.svelte';
  import AmountInput from './components/AmountInput.svelte';
  import { fetchAvailableCurrencies } from './currencyService';
  import { fetchExchangeRate } from './currencyService';

  let currencies = [];
  let fromCurrency = '';
  let toCurrency = '';
  let amount = 0;
  let exchangeRate = 0;
  let convertedAmount = 0;

  onMount(async () => {
    currencies = await fetchAvailableCurrencies();
  });

  async function calculateExchange() {
    if (!fromCurrency || !toCurrency || !amount) return;

    exchangeRate = await fetchExchangeRate(fromCurrency, toCurrency);

    if (exchangeRate !== null) {
      convertedAmount = amount * exchangeRate;
    } else {
      console.error('Error fetching exchange rate');
    }
  }

  $: {
    calculateExchange();
  }

  function handleInputChange() {
    calculateExchange();
  }

  // Реактивная переменная для отслеживания изменений в сумме
  let reactiveAmount = amount;

  $: {
    console.log('Amount changed:', amount);
    handleInputChange();
  }
</script>

<main>
  <h1>Currency Converter</h1>

  <div>
    <label>From:</label>
    <CurrencyPair bind:selectedCurrency={fromCurrency} {currencies} />
  </div>

  <div>
    <label>To:</label>
    <CurrencyPair bind:selectedCurrency={toCurrency} {currencies} />
  </div>

  <div>
    <label>Amount:</label>
    <!-- Используем reactiveAmount вместо amount -->
    <AmountInput bind:amount={amount}  />
  </div>

  {#if exchangeRate !== 0}
    <p>{amount} {fromCurrency} equals {convertedAmount.toFixed(2)} {toCurrency}</p>
  {:else}
    <p>Please select currencies and enter amount.</p>
  {/if}
</main>
