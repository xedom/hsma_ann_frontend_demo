<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { parseMoney } from '$lib/utils/parser';
	import Rating from '$lib/components/Rating.svelte';

	const dispatch = createEventDispatcher();
	let quantity = 1;

	export let id: string = '';
	export let name: string = '';
	export let price: number = 0;
	export let rating: number = 0;
	export let image: string = '';
</script>

<div class="productListItem" {id}>
	<img src={image} alt="produktbild" draggable={false} />
	<div class="body">
		<div class="title">{name.toUpperCase()}</div>
		<Rating {rating} />
		<div class="preis">{parseMoney(price)}</div>
	</div>
	<div class="actions">
		<button on:click={() => dispatch('remove')}>Remove</button>
		<span>
			Quantity: <input
				type="text"
				pattern="[0-9]*"
				bind:value={quantity}
				on:change={() => dispatch('update', quantity)}
			/>
		</span>
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
