<div id="divRegister">
	<form id="formularDateneingabe" action="bestellungsbestaetigung.html" method="post">
		<div id="registerUeberschrift">reset password</div>
		<br />
		<label for="eingabeCode">code: </label>
		<input id="eingabeCode" type="text" name="code" /><br />
		<label for="eingabePassword">password: </label>
		<input id="eingabePassword" type="text" name="password" /><br />
		<label for="eingabeWiederholePassword">confirm password: </label>
		<input id="eingabeWiederholePassword" type="text" name="password" /><br />
		<div id="divButtonRegister">
			<button type="submit" id="buttonRegister">register</button>
		</div>
	</form>
</div>

<style>
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
		padding-bottom: 30px;
		background-color: #d9d9d9;
	}

	#buttonRegister {
		border-color: #16bdb3;
		background-color: #16bdb3;
		font-size: 1.5em;
		padding: 10px 50px;
		border-style: solid;
	}
</style>
