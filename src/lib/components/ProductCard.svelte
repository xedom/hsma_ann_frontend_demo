<script lang="ts">
	import { parseMoney } from '$lib/utils/parser';
	import Rating from '$lib/components/Rating.svelte';

	export let id: string = '';
	export let name: string = '';
	export let price: number = 0;
	export let rating: number = 0;
	export let image: string = '';
</script>

<a class="card" href="/product?id={id}">
	<img src={image} alt="produktbild" draggable={false} />
	<div class="body">
		<div class="title">{name.toUpperCase()}</div>
		<Rating {rating} />
		<div class="preis">{parseMoney(price)}</div>
	</div>
</a>

<style>
	.card {
		background-color: #fff;
		border-radius: 10px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		cursor: pointer;
		text-decoration: none;
		color: inherit;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}

	.card img {
		max-width: 200px;
		aspect-ratio: 1/1;
		object-fit: cover;
		user-select: none;
	}

	.card .body {
		padding: 10px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		text-align: center;
	}

	.card .body .title {
		font-weight: bold;
	}
</style>
