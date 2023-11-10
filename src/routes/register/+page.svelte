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

<script>
    import { applyAction } from '$app/forms';
	import { env } from '$env/dynamic/public'

    let username = ""
    let email = ""
    let password = ""
    let result = null
    

    async function doPost() {
        const res = await fetch(`${env.PUBLIC_API_URL}/auth/register`, {
            method: 'POST',
            headers: {
               /* 'Content-Type':'application/json',
                'Access-Control-Allow-Origin': 'cors',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'*/
            },
                body: JSON.stringify({
                    "username": username,
                    "email": email,
                    "password": password
                })
            })
            console.log(res)
            const json = await res.json()
            result = JSON.stringify(json)
        }

</script>


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
        <form id="formularDateneingabe" >
            <div id="registerUeberschrift"> register </div> <br>
                    <label for="eingabeUsername">username: </label>
                    <input id="eingabeUsername" type="text" name="username" bind:value={username} /><br />
                    <label for="eingabeEmail" >e-mail: </label>
                    <input id="eingabeEmail" type="text" name="email" bind:value={email}/><br />
                    <label for="eingabePassword">password: </label>
                    <input id="eingabePassword" type="text" name="password" bind:value={password}/><br />
                    <div id="divButtonRegister">
                        <button type="button" id="buttonRegister" on:click={doPost}>register</button>
                    </div>
        </form>
    </div>
</body>

<footer>

</footer>

</html>
