<script lang="ts">
    export let name = 'World';
    export let price = '0,00€';
    export let rating = '4 out of 5 stars';
    export let image = '/images/Rectangle5.png';
</script>

<div class="kachel">
    <img src={image} alt="produktbild" class="produktbild" />
    <div class="nameProdukt">{name}</div>
    <div class="preisProdukt">{price}</div>
    <div class="bewertungProdukt">{rating}</div>
</div>

<style>
    .kachel {
        background-color: #d9d9d9;
        width: 350px;
        height: 370px;
        text-align: center;
        margin: 10px;
    }

    .produktbild {
        padding: 10px;
        background-color: #d9d9d9;
    }

    img {
        width: 300px;
    }

    .nameProdukt {
        float: left;
        padding-left: 20px;
        padding-top: 10px;
        background-color: #d9d9d9;
    }
    .preisProdukt {
        float: right;
        padding-right: 20px;
        padding-top: 10px;
        background-color: #d9d9d9;
    }

    .bewertungProdukt {
        margin-top: 50px;
        background-color: #d9d9d9;
    }
</style>
