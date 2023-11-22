<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { user } from '$lib/stores/users';
	import { onMount } from 'svelte';

	let userProducts = [
		{ id: '1', name: 'Product 2', price: 10, image: 'https://picsum.photos/100' },
		{ id: '2', name: 'Product 2', price: 10, image: 'https://picsum.photos/200' },
		{ id: '3', name: 'Product 2', price: 10, image: 'https://picsum.photos/300' },
		{ id: '4', name: 'Product 2', price: 10, image: 'https://picsum.photos/400' },
		{ id: '5', name: 'Product 2', price: 10, image: 'https://picsum.photos/500' },
		{ id: '6', name: 'Product 2', price: 10, image: 'https://picsum.photos/600' },
		{ id: '7', name: 'Product 2', price: 10, image: 'https://picsum.photos/250' }
	];

	onMount(() => {
		console.log('profile++', $user);
	});
</script>

<div class="container">
	<div id="profilePic">
		<img src="/images/userProfilePicture.jpg" alt="User" class="userpictureBig" />
	</div>
	<div class="right">
		<div class="username">
			<h1>{$user?.username}</h1>
			<p>{$user?.email}</p>
		</div>
		<div class="description">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex
		</div>
		<h3>My Products</h3>
		<div class="products">
			{#each userProducts as product}
				<ProductCard {...product} rating={3} />
			{/each}
		</div>
	</div>
</div>

<style>
	.container {
		width: 1000px;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 20px;
	}

	.username {
		display: flex;
		flex-direction: column;
		gap: 1px;
	}

	.username p {
		padding-left: 2px;
	}

	.userpictureBig {
		height: 300px;
		width: 300px;
		border-radius: 400px;
		object-fit: cover;
	}

	.right {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.products {
		display: flex;
		flex-direction: row;
		gap: 20px;
		flex-wrap: wrap;
	}
</style>
