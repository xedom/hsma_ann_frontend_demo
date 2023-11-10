<script lang="ts">
  export let id = '';
  export let value: string = '';
  export let label: string | undefined = undefined;
</script>


<div>
  <label for={id}>{label}</label>
  <input {id} bind:value {...$$restProps} />
</div>