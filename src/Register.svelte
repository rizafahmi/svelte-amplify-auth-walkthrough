<script>
  import Auth from '@aws-amplify/auth';
  import { store } from './auth.js';

  let username = '';
  let password = '';
  let email = '';
  let code = '';
  let confirmation = false;

  export let handleLoginClick;
  async function handleSubmit() {
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email
        }
      });
      confirmation = true;
    } catch (err) {
      console.error('Error signing up: ', err);
    }
  }

  async function handleConfirmSubmit() {
    try {
      const user = await Auth.confirmSignUp(username, code);
      $store = user;
    } catch (err) {
      console.error('Error confirm sign up: ', err);
    }
  }
</script>

{#if confirmation === false}
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
{:else}
  <h1>Confirm Sign Up</h1>
  <form on:submit|preventDefault={handleConfirmSubmit}>
    <fieldset>
      <label for="username">Username</label>
      <input type="input" bind:value={username} placeholder="your username" />
      <label for="code">Code</label>
      <input
        type="input"
        bind:value={code}
        placeholder="Check your email for code" />
      <hr />
      <button type="submit">Confirm</button>
    </fieldset>
  </form>
{/if}
