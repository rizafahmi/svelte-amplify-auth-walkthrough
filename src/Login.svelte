<script>
  import { store } from './auth.js';
  import Auth from '@aws-amplify/auth';

  let username = '';
  let password = '';

  async function handleSubmit() {
    try {
      const user = await Auth.signIn(username, password);
      console.log(user);
      $store = user;
    } catch (err) {
      console.error(`Error signing in: ${err}`);
    }
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
