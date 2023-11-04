<style>
    *{
        background-color: #E5E5E5;
        font-family: Arial, Helvetica, sans-serif;
        
    }

    header{
        background-color: #FFFFFF;
        padding: 15px;
        padding-left: 150px;
        text-align: center;
    }
    a{
        background-color: #FFFFFF;
        text-decoration: none;
        color: #000000;
        font-size: 1.5em;
        padding-left: 20px
        
    }
    .menueMittig{  
        padding-left: 50px;  
    }

    #rechtsPositionieren{
        float: right;
        background-color: #FFFFFF;
        padding-right: 10px;
    }

    #formularDateneingabe{
        background-color: #D9D9D9;
    }

    #divRegister{
        margin: 0 auto;
        padding-top: 30px; 
        width: 500px;
    }

    #registerUeberschrift{
        text-align: center;
        background-color: #D9D9D9;
        padding: 30px;
        font-size: 1.5em;
    }

    label{
        display: inline-block;
        width: 100px;
        background-color: #D9D9D9;
        padding-left: 15%;
        padding-bottom: 50px;
    }

    input{
        height: 30px;
        background-color: #FFFFFF;
        border-color: #FFFFFF;
        width: 250px;
    }

    #divButtonRegister{
        text-align: center;
        padding-bottom: 30px;
        background-color: #D9D9D9;
    }

    #buttonRegister{
        border-color: #16BDB3;
        background-color: #16BDB3;
        font-size: 1.5em;
        padding: 10px 50px;
        border-style: solid;
    }
</style>

<html lang = "de">
<header>
    <a href="./home" class="menueMittig">home</a>
    <a href="" class="menueMittig">cart</a>
    <a href="" class="menueMittig">settings</a>
<span id="rechtsPositionieren">
    <a href="./login">login</a>
    <a href="./register">register</a>
</span>
</header>


<body>
    <div id="divRegister">
        <form id="formularDateneingabe" action="bestellungsbestaetigung.html" method="post">
            <div id="registerUeberschrift"> register </div> <br>
                    <label for="eingabeUsername">username: </label>
                    <input id="eingabeUsername" type="text" name="username" /><br />
                    <label for="eingabeEmail" >e-mail: </label>
                    <input id="eingabeEmail" type="text" name="email" /><br />
                    <label for="eingabePassword">password: </label>
                    <input id="eingabePassword" type="text" name="password" /><br />
                    <div id="divButtonRegister">
                        <button type=submit id="buttonRegister">register</button>
                    </div>
        </form>
    </div>
</body>

<footer>

</footer>

</html>