<script lang="ts">
  export let maxRating = 5;
  export let rating = 0;
</script>

<div>
  {#each Array.from({ length: maxRating }, (_, i) => i) as i}
      <span style="color: {i < rating ? 'orange' : 'gray'}">★</span>
  {/each}
  <span>{rating ?? 0}</span>
</div>

<style>
  div {
      display: inline-block;
  }
</style>