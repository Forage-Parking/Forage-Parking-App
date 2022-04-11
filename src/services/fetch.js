import { client, checkError } from './client';

export async function fetchSpots() {
  const resp = await client.from('parking-spots').select('*');
  return checkError(resp);
}
