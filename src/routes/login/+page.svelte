<div id="divRegister">
	<form id="formularDateneingabe" action="bestellungsbestaetigung.html" method="post">
		<div id="registerUeberschrift">login</div>
		<br />
		<label for="eingabeUsername" id="labelEingabeUsername">username: </label>
		<input id="eingabeUsername" type="text" name="username" /><br />
		<label for="eingabePassword">password: </label>
		<input id="eingabePassword" type="text" name="password" /><br />
		<a href="/reset-password" id="resetPasswordButton">reset your password</a>
		<div id="divButtonRegister">
			<button type="submit" id="buttonRegister">login</button>
		</div>
	</form>
</div>

<style>
	a {
		background-color: #ffffff;
		text-decoration: none;
		color: #000000;
		font-size: 1.5em;
		padding-left: 20px;
	}

	#formularDateneingabe {
		background-color: #d9d9d9;
	}

	#divRegister {
		margin: 0 auto;
		padding-top: 30px;
		width: 500px;
	}

	#registerUeberschrift {
		text-align: center;
		background-color: #d9d9d9;
		padding: 30px;
		font-size: 1.5em;
	}

	label {
		display: inline-block;
		width: 100px;
		background-color: #d9d9d9;
		padding-left: 15%;
	}
	#labelEingabeUsername {
		padding-bottom: 50px;
	}

	input {
		height: 30px;
		background-color: #ffffff;
		border-color: #ffffff;
		width: 250px;
	}

	#divButtonRegister {
		text-align: center;
		padding-top: 30px;
		padding-bottom: 30px;
		background-color: #d9d9d9;
		padding-top: 50px;
	}

	#buttonRegister {
		border-color: #16bdb3;
		background-color: #16bdb3;
		font-size: 1.5em;
		padding: 10px 50px;
		border-style: solid;
	}

	#resetPasswordButton {
		color: blue;
		background-color: #d9d9d9;
		font-size: 0.7em;
		float: right;
		padding-right: 65px;
		padding-top: 5px;
	}
</style>
