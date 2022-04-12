import { client, checkError } from './client';

export async function fetchSpots() {
  const resp = await client.from('parking-spots').select('*');
  return checkError(resp);
}

export async function newSpot(spot) {
  const resp = await client.from('parking-spots').insert(spot);
  return checkError(resp);
}

export async function fetchSpotById(id) {
  const resp = await client.from('parking-spots').select('*').match({ id }).single();

  return checkError(resp);
}
