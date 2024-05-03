<script>
  let amount = 0;

  function handleAmountChange(event) {
    console.log(event.target.value);
  }
</script>

<div>
  <label for="amount">Amount:</label>
  <input type="number" id="amount" bind:value={amount} on:input={handleAmountChange} />
</div>
