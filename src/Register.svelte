<script>
  let username = '';
  let password = '';
  let email = '';

  export let handleLoginClick;
  async function handleSubmit() {}
</script>

<h1>Register</h1>
<form on:submit|preventDefault={handleSubmit}>
  <fieldset>
    <label for="username">Username</label>
    <input type="input" bind:value={username} placeholder="your username" />
    <label for="email">Email</label>
    <input type="email" bind:value={email} placeholder="your email" />
    <label for="password">Password</label>
    <input type="password" bind:value={password} placeholder="password" />
    <hr />
    <button type="submit">Register</button>
    <button type="button" on:click={handleLoginClick}>Login</button>
  </fieldset>
</form>
