<script>
  let fromCurrency = '';
  let toCurrency = '';

  function handleInputChange(event) {
    console.log(event.target.value);
  }
</script>

<div>
  <label for="fromCurrency">From:</label>
  <select id="fromCurrency" bind:value={fromCurrency} on:input={handleInputChange}>
    <option value="">Select currency</option>
    <option value="USD">USD</option>
    <option value="EUR">EUR</option>
    <option value="GBP">GBP</option>
    <!-- Добавьте другие валюты по вашему выбору -->
  </select>

  <label for="toCurrency">To:</label>
  <select id="toCurrency" bind:value={toCurrency} on:input={handleInputChange}>
    <option value="USD">USD</option>
    <option value="EUR">EUR</option>
    <option value="GBP">GBP</option>
  </select>
</div>
