<style>
    *{
        background-color: #E5E5E5;
        font-family: Arial, Helvetica, sans-serif;
        
    }

    header{
        background-color: #FFFFFF;
        padding: 20px;
        padding-left: 200px;
        text-align: center;
        height: 40px;
    }
    a{
        background-color: #FFFFFF;
        text-decoration: none;
        color: #000000;
        font-size: 1.5em;

        
    }
    .menueMittig{  
        margin: 15px;
        padding-left: 50px;  
    }

    #rechtsPositionieren{
        float: right;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
    }

    #username{
        background-color: #FFFFFF;
    }

    .kachel{
        background-color: #D9D9D9; 
        width: 350px;
        height: 370px;
        text-align: center;
    }

    .produktbild{
        padding: 10px;
         background-color: #D9D9D9; 
    }

    img{
        width: 300px;
    }

    .nameProdukt{
        float: left;
        padding-left: 20px;
        padding-top: 10px;
        background-color: #D9D9D9;
    }
    .preisProdukt{
        float: right;
         padding-right: 20px;
         padding-top: 10px;
        background-color: #D9D9D9;
    }

    .bewertungProdukt{
        margin-top: 50px;
        background-color: #D9D9D9;
    }

    .userpicture{
        margin-left: 20px;
        max-height: 40px;
        max-width: 40px;
        border-radius: 300px;
    }

</style>

<html lang = "de">
<header>
    <a href="./home" class="menueMittig">home</a>
    <a href="" class="menueMittig">cart</a>
    <a href="" class="menueMittig">settings</a>
<span id="rechtsPositionieren">
    <a id="username" href="./profile">username</a>
    <img src="/images/userProfilePicture.jpg" alt="User Profile Picture" class="userpicture">
</span>
</header>


<body>
   <div class="kachel">
    <img src="/images/Rectangle 5.png" alt="produktbild" class="produktbild">
    <div class="nameProdukt">
        product 1
    </div>
    <div class="preisProdukt">
        0,00€
   </div>
   <div class="bewertungProdukt">
        4 out of 5 stars
   </div>
</body>

<footer>

</footer>

</html>