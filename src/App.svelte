<script>
  import Login from './Login.svelte';
  import Register from './Register.svelte';
  import Home from './Home.svelte';
  import { store } from './auth.js';

  let page = 'login';
  function handlRegisterClick() {
    page = 'register';
  }
  function handleLoginClick() {
    page = 'login';
  }
</script>

{#if $store !== null}
  <Home />
{:else}
  {#if page === 'login'}
    <Login {handlRegisterClick} />
  {:else if page === 'register'}
    <Register {handleLoginClick} />
  {/if}
{/if}
