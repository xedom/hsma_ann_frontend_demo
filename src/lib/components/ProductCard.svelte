<script lang="ts">
	import { parseMoney } from '$lib/utils/parser';
	import Rating from '$lib/components/Rating.svelte';

	export let id: string = '';
	export let name: string = '';
	export let price: number = 0;
	export let rating: number = 0;
	export let preview: string | undefined = undefined;
</script>

<a class="card" href="/products/{id}">
	{#if preview}
		<img src={preview} alt="produktbild" draggable={false} />
	{:else}
		<div class="placeholder">Bild nicht verfügbar</div>
	{/if}
	<div class="body">
		<div class="title">{name.toUpperCase()}</div>
		<Rating {rating} />
		<div class="preis">{parseMoney(price)}</div>
	</div>
</a>

<style>
	.card {
		background-color: #fff;
		border-radius: var(--radius);
		overflow: hidden;
		display: flex;
		flex-direction: column;
		cursor: pointer;
		text-decoration: none;
		color: inherit;
		width: 200px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}

	.card img {
		max-width: 200px;
		max-height: 150px;
		aspect-ratio: 1/1;
		object-fit: cover;
		user-select: none;
	}

	.card .placeholder {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 150px;
		background-color: #c5c5c5;
	}

	.card .body {
		padding: 10px;
		display: flex;
		flex-direction: column;
		text-align: center;
	}

	.card .body .title {
		font-weight: bold;
	}
</style>
