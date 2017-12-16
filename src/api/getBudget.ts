// $.get('/dzenapi/dzenapp', {month: this.month, year: this.year}


// import CONFIG, { TIMEOUT, objectCodes } from '../constants/config';

const timeout = ms => new Promise((res, rej) => setTimeout(() => rej(new Error('timeout')), ms));

export const TIMEOUT = 50000;

const headers = new Headers({
  'Accept': 'application/json',
  'Content-Type': 'application/json'
});

const login = async () => {

  return await fetch(`/dzenapi/login`, {
    method: 'POST',
    credentials: "same-origin",
    headers,
    body: JSON.stringify({ login: 'f@f.ru', pass: 'f' })
  })
    .then(res => res.json())
    .catch(err => console.log('login err', err))
};

const dzenapp = async (data) => {

  let queryString = [
    `month=${10}`,
    `year=${2017}`,
  ].join('&');

  return await fetch(`/dzenapi/dzenapp?${queryString}`, {
    method: 'GET',
    credentials: "same-origin",
    headers,
  })
    .then(response => response.json())
    .catch(err => console.log('dzenapp err', err))
};

const loginDzenApp = async (data) => {
  await login();
  let b = await dzenapp(data);
  console.log('b', b)
  return b
};

export const getBids = async (data) => {

  return await Promise.race([
    timeout(TIMEOUT),
    await loginDzenApp(data)
  ]);

}