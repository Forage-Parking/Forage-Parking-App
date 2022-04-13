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

export async function newReservation(spot_id, renter_id) {
  const resp = await client
    .from('reservations')
    .insert([{ spot_id, renter_id: renter_id, start_time: new Date() }]);
  return checkError(resp);
}
export async function fetchProfiles() {
  const resp = await client.from('profiles').select('*');
  return checkError(resp);
}

export async function fetchProfileById(id) {
  const resp = await client.from('profiles').select('*').match({ id }).single();
  return checkError(resp);
}
export async function endReservation(id) {
  const resp = await client.from('reservations').update({ end_time: new Date() }).match({ id });
  return checkError(resp);
}

export async function mostRecent(spot_id) {
  const resp = await client
    .from('reservations')
    .select('*')
    .order('start_time', { ascending: false })
    .match({ spot_id })
    .limit(1)
    .single();
  return checkError(resp);
}
