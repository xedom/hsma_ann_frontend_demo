<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    const productID = $page.url.searchParams.get('id');

    let product = {
        name: 'product 1',
        description: 'description',
        price: '0,00€',
        images: ['/images/Rectangle5.png'],
        rating: '4 out of 5 stars',
    };

    onMount(async () => {
        const response = await fetch('http://localhost:3000/products/' + productID);
        const data = await response.json();
        product = data;
    });
</script>

<html lang="de">
    <header>
        <a href="./home" class="menueMittig">home</a>
        <a href="" class="menueMittig">cart</a>
        <a href="" class="menueMittig">settings</a>
        <span id="rechtsPositionieren">
            <a id="username" href="./profile">username</a>
            <img src="/images/userProfilePicture.jpg" alt="User Profile Picture" class="userpicture" />
        </span>
    </header>

    <div class="container">
        <div class="product">
            <img src={product.images[0] ?? 'https://picsum.photos/id/26/200/?blur=10'} alt="produktbild" />
            <div class="right">
                <div class="name">{product.name}</div>
                <div class="price"><b>Price:</b> {product.price} €</div>
                <div class="rating"><b>Rating:</b> {product.rating}</div>
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
        background-color: rgb(119, 22, 22);
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

    .product img {
        height: 500px;
        aspect-ratio: 1/1;
    }

    * {
        background-color: #e5e5e5;
        font-family: Arial, Helvetica, sans-serif;
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
