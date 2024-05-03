<!-- CurrencyPair.svelte -->
<script>
  export let selectedCurrency;
  export let currencies;
</script>

<select bind:value={selectedCurrency}>
  {#each currencies as currency}
    <option value={currency}>{currency}</option>
  {/each}
</select>
