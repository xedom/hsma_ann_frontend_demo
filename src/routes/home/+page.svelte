<script lang="ts">
    import ProductCard from '$lib/ProductCard.svelte';
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

    <body>
        <ProductCard name="Produkt 1" price="0,00€" rating="4 out of 5 stars" image="/images/Rectangle5.png" />
        <ProductCard name="Produkt 2" price="0,00€" rating="4 out of 5 stars" image="/images/Rectangle5.png" />
    </body>

    <footer />
</html>

<style>
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
