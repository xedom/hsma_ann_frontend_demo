<script lang="ts">
	import { parseMoney } from '$lib/utils/parser';

	export let id: string;
	export let name: string = '';
	export let price: number = 0;
	export let image: string | undefined;
	export let quantity: number | undefined = undefined;
</script>

<a class="productListItem" {id} href={`/products/${id}`} target="_blank" rel="noopener">
	{#if image}
		<img src={image} alt="produktbild" draggable={false} />
	{:else}
		<div class="placeholder">Bild nicht verfügbar</div>
	{/if}
	<div class="body">
		<span class="title">{name.toUpperCase()}</span>
		{#if quantity}
			<span>Quantity: {quantity}</span> |
		{/if}
		<span class="preis">Cost: {parseMoney(price)}</span>
	</div>
</a>

<style>
	.productListItem {
		background-color: #fff;
		border-radius: var(--radius);
		overflow: hidden;
		text-decoration: none;
		color: inherit;
		display: flex;
	}

	.productListItem img {
		width: 64px;
		height: 64px;
		object-fit: cover;
	}

	.productListItem .placeholder {
		display: flex;
		font-size: x-small;
		justify-content: center;
		align-items: center;
		text-align: center;
		width: 64px;
		height: 64px;
		background-color: #c5c5c5;
	}

	.productListItem .body {
		flex-grow: 1;
		display: flex;
		padding: 10px;
		gap: 5px;
	}

	.productListItem .body .title {
		flex: 1;
		font-weight: bold;
	}
</style>
