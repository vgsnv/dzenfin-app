import { TIMEOUT } from '../config';

const timeout = ms => new Promise((res, rej) => setTimeout(() => rej(new Error('timeout')), ms));

const headers = new Headers({
  'Accept': 'application/json',
  'Content-Type': 'application/json'
});

export const dzenapp = async (year, month) => {

  let queryString = [
    `month=${month}`,
    `year=${year}`,
  ].join('&');

  return await fetch(`/dzenapi/dzenapp?${queryString}`, {
    method: 'GET',
    credentials: "same-origin",
    headers,
  })
    .then(response => response.json())
    .catch(err => console.log('dzenapp err', err))
};

export default async (year, month) => {

  return await Promise.race([
    timeout(TIMEOUT),
    await dzenapp(year, month)
  ]);
}