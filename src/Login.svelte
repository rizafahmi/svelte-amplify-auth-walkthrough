<script>
  import { store } from './auth.js';

  let username = '';
  let password = '';

  async function handleSubmit() {
    $store = { username };
  }
  export let handlRegisterClick;
</script>

<h1>Login</h1>
<pre>{JSON.stringify($store, null, 2)}</pre>
<form on:submit|preventDefault={handleSubmit}>
  <fieldset>
    <label for="username">Username</label>
    <input type="input" bind:value={username} placeholder="your username" />
    <label for="password">Password</label>
    <input type="password" bind:value={password} placeholder="password" />
    <hr />
    <button type="submit">Login</button>
    <button on:click={handlRegisterClick} type="button">Register</button>
  </fieldset>
</form>
