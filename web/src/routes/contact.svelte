<svelte:head>
	<title>Contact | Orange Alligator Solutions</title>
</svelte:head>

<h2>Didn’t see your solution listed?</h2>
<h2>Have more questions?</h2>
<h3>Drop us a line, we’ll be in touch with you soon!</h3>

<form style="display:flex; flex-direction: column;">
    <label>Name<input /></label>
    <label>Email<input /></label>
    <label>Subject<input /></label>
    <label>Message<input style="height:6rem;" /></label>
    <button>Send</button>
</form>

<style>
button{
    width: 4rem;
    height: 2rem;
}
label{
    width: 4rem;
}
input{
    width: 15rem;
    margin: .5rem 0;
}
</style>
