<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { env } from '$env/dynamic/public'
	import { parseMoney } from '$lib/utils/parser';
	import Rating from '$lib/components/Rating.svelte';

	const productID = $page.url.searchParams.get('id');

	let product = {
		name: '',
		description: '',
		price: 0,
		images: [],
		rating: 0,
	};

	onMount(async () => {
		const response = await fetch(`${env.PUBLIC_API_URL}/products/${productID}`);
		const data = await response.json();
		product = data;
	});
</script>

<html lang="de">
	<header>
		<a href="/" class="menueMittig">home</a>
		<a href="/cart" class="menueMittig">cart</a>
		<a href="/settings" class="menueMittig">settings</a>
		<span id="rechtsPositionieren">
			<a id="username" href="./profile">username</a>
			<img src="/images/userProfilePicture.jpg" alt="Product" class="userpicture" />
		</span>
	</header>

	<div class="container">
		<div class="product">
			<div class="left">
				<img
					src={product.images[0] ?? 'https://picsum.photos/id/26/200/?blur=10'}
					alt="produktbild"
				/>
				<div class="previews">
					{#each product.images as image}
						<img src={image} alt="produktbild" />
					{/each}
				</div>
			</div>
			<div class="right">
				<h1 class="title">{product.name.toUpperCase()}</h1>
				<div class="price"><b>Price:</b> {parseMoney(product.price)}</div>
				<div class="rating"><b>Rating:</b> <Rating rating={product.rating} /></div>
				<div class="description"><b>Description:</b> {product.description}</div>
			</div>
		</div>
	</div>
</html>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.product {
		display: flex;
		padding: 10px;
		width: 100%;
		max-width: 900px;
	}

	.product .right {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding-left: 20px;
	}

	.product .left {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.product .left img {
		height: 500px;
		aspect-ratio: 1/1;
		object-fit: cover;
		user-select: none;
		border-radius: 10px;
	}

	.product .left .previews {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
	}

	.product .left .previews img {
		height: 100px;
		aspect-ratio: 1/1;
		object-fit: cover;
		user-select: none;
		border-radius: 10px;
	}

	header {
		background-color: #ffffff;
		padding: 20px;
		padding-left: 200px;
		text-align: center;
		height: 40px;
	}
	a {
		background-color: #ffffff;
		text-decoration: none;
		color: #000000;
		font-size: 1.5em;
	}
	.menueMittig {
		margin: 15px;
		padding-left: 50px;
	}

	#rechtsPositionieren {
		float: right;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #ffffff;
	}

	#username {
		background-color: #ffffff;
	}

	.userpicture {
		margin-left: 20px;
		max-height: 40px;
		max-width: 40px;
		border-radius: 300px;
	}
</style>
