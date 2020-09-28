import App from './App.svelte';

import Amplify from '@aws-amplify/core';
import config from './aws-exports.js';

Amplify.configure(config);

const app = new App({
  target: document.body
});

window.app = app;

export default app;
