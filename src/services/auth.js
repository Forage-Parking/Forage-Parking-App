import { client, checkError } from './client.js';

export function getUser() {
  return client.auth.session() && client.auth.session().user.email;
}

export function getUserId() {
  return client.auth.session() && client.auth.session().user.id;
}

export async function signupUser(email, password) {
  const { user, error } = await client.auth.signUp({ email, password });
  if (error) {
    throw error;
  }
  return user;
}

export async function signInUser(email, password) {
  const { user, error } = await client.auth.signIn({ email, password });
  if (error) {
    throw error;
  }
  return user;
}

export async function logout() {
  const response = await client.auth.signOut();
  return checkError(response);
}

export async function fetchSignedUrl(x) {
  const resp = await client.storage.from('mybucket').createSignedUrl(x, 315360000);
  return checkError(resp);
}
