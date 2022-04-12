import { client, checkError } from './client';

export async function fetchSpots() {
  const resp = await client.from('parking-spots').select('*');
  return checkError(resp);
}

export async function newSpot(spot) {
  const resp = await client.from('parking-spots').insert(spot);
  return checkError(resp);
}

//this needs a policy
// export async function createBucket() {
//   const resp = await client.storage.create('image', { public: false });
//   return checkError(resp);
// }

// this needs a policy
export async function uploadImage() {
  const imageFile = event.target.files[0];
  const { data, error } = await client.storage
    .from('avatars')
    .upload('public/avatar1.png', imageFile, {
      cacheControl: '3600',
      upsert: false,
    });
}
