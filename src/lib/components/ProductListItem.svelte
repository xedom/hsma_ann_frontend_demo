<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { parseMoney } from '$lib/utils/parser';
	import Rating from '$lib/components/Rating.svelte';

	const dispatch = createEventDispatcher();

	export let id: string = '';
	export let name: string = '';
	export let price: number = 0;
	export let rating: number = 0;
	export let image: string = '';
	export let quantity: number = 1;
</script>

<div class="productListItem" {id}>
	<img src={image} alt="produktbild" draggable={false} />
	<div class="body">
		<div class="title">{name.toUpperCase()}</div>
		<Rating {rating} />
		<div class="preis">{parseMoney(price)}</div>
	</div>
	<div class="actions">
		<span>Quantity: <input type="text" pattern="[0-9]*" bind:value={quantity} /></span>
		<div class="buttons">
			<button class="error" on:click={() => dispatch('remove')}>Remove</button>
			<button on:click={() => dispatch('save', quantity)}>Save</button>
		</div>
	</div>
</div>

<style>
	.productListItem {
		background-color: #fff;
		border-radius: 10px;
		overflow: hidden;
		text-decoration: none;
		color: inherit;
		display: flex;
	}

	.productListItem img {
		width: 200px;
		height: 200px;
		object-fit: cover;
	}

	.productListItem .body {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		padding: 10px;
		gap: 5px;
	}

	.productListItem .actions {
		display: flex;
		flex-direction: column;
		gap: 5px;
		align-items: flex-end;
		justify-content: start;
		padding: 10px;
	}

	.productListItem .actions input {
		width: 50px;
		background-color: #d5d5d5;
		text-align: center;
	}
</style>
