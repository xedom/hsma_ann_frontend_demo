<style>
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
    }
    #labelEingabeUsername{
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
        padding-top: 30px;
        padding-bottom: 30px;
        background-color: #D9D9D9;
        padding-top: 50px;
    }

    #buttonRegister{
        border-color: #16BDB3;
        background-color: #16BDB3;
        font-size: 1.5em;
        padding: 10px 50px;
        border-style: solid;
    }

    #resetPasswordButton{
        color: blue;
        background-color: #D9D9D9;
        font-size: 0.7em;
        float: right;
        padding-right: 65px;
        padding-top: 5px;

    }
</style>

<html lang = "de">
<header>
    <a href="/" class="menueMittig">home</a>
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
            <div id="registerUeberschrift"> login </div> <br>
                    <label for="eingabeUsername" id="labelEingabeUsername">username: </label>
                    <input id="eingabeUsername" type="text" name="username" /><br />
                    <label for="eingabePassword">password: </label>
                    <input id="eingabePassword" type="text" name="password" /><br />
                    <a href="./resetPassword" id="resetPasswordButton">reset your password</a>
                    <div id="divButtonRegister">
                        <button type=submit id="buttonRegister">login</button>
                    </div>
        </form>
    </div>
</body>

<footer>

</footer>

</html>