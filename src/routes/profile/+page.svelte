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

    .userpicture{ 
        width: 300px;
        margin-left: 20px;
        max-height: 40px;
        max-width: 40px;
        border-radius: 300px;
    }

    .userpictureBig{
        height: 400px;
        width: 400px;
        border-radius: 400px;
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
    <div id="profilePic">
        <img src="/images/userProfilePicture.jpg" alt="User Picture" class="userpictureBig">
    </div>
    <div id=spalteRechts>
        <div class="username">
            username
        </div>
         <div class="description">
            description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        </div>
         <div class="products">
            products
        </div>
    </div>
</body>

<footer>

</footer>

</html>