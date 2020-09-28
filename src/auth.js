import { writable } from 'svelte/store';
import Auth from '@aws-amplify/auth';

let _user = localStorage.getItem('amplifyUser');

export const store = writable(_user ? JSON.parse(_user) : null);

store.subscribe(function (value) {
  if (value !== null) {
    localStorage.setItem('amplifyUser', JSON.stringify(value));
  } else {
    localStorage.removeItem('amplifyUser');
  }
});

export function logout() {
  store.set(null);
}

export async function login(username, password) {
  const data = await Auth.signIn(username, password);
  store.set(data);
}

export async function register(username, email, password) {
  return Auth.signUp({
    username,
    password,
    attributes: {
      email
    }
  });
}
export async function confirm(username, code) {
  const data = await Auth.confimSignUp(username, code);
  store.set(data);
}
