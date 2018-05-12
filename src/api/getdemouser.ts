import { TIMEOUT } from '../config';

const timeout = ms => new Promise((res, rej) => setTimeout(() => rej(new Error('timeout')), ms));

const headers = new Headers({
  'Accept': 'application/json',
  'Content-Type': 'application/json'
});

export const query = async () => {

  return await fetch(`/dzenapi/getdemouser`, {
    method: 'GET',
    credentials: "same-origin",
    headers,
  })
    .then(res => res.json());

};

export default async () => {

  return await Promise.race([
    timeout(TIMEOUT),
    await query()
  ]);
}