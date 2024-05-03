<!-- AmountInput.svelte -->
<script>
  export let amount;
</script>

<input type="number" bind:value={amount} />
