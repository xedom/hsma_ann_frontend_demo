<script>
	import { applyAction } from '$app/forms';
	import { env } from '$env/dynamic/public';

	let username = '';
	let email = '';
	let password = '';
	let result = null;

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
				username: username,
				email: email,
				password: password
			})
		});
		console.log(res);
		const json = await res.json();
		result = JSON.stringify(json);
	}
</script>

<div id="divRegister">
	<form id="formularDateneingabe">
		<div id="registerUeberschrift">register</div>
		<br />
		<label for="eingabeUsername">username: </label>
		<input id="eingabeUsername" type="text" name="username" bind:value={username} /><br />
		<label for="eingabeEmail">e-mail: </label>
		<input id="eingabeEmail" type="text" name="email" bind:value={email} /><br />
		<label for="eingabePassword">password: </label>
		<input id="eingabePassword" type="text" name="password" bind:value={password} /><br />
		<div id="divButtonRegister">
			<button type="button" id="buttonRegister" on:click={doPost}>register</button>
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
