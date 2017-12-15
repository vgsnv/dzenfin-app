// $.get('/dzenapi/dzenapp', {month: this.month, year: this.year}


// import CONFIG, { TIMEOUT, objectCodes } from '../constants/config';

const timeout = ms => new Promise((res, rej) => setTimeout(() => rej(new Error('timeout')), ms));

let queryString = [
  `month=${10}`,
  `year=${2017}`,
].join('&');

export const TIMEOUT = 50000;

const headers = new Headers({
  'Accept': 'application/json',
  'Content-Type': 'application/json'
});

const login = () => {

  return fetch(`/dzenapi/login`, {
    method: 'POST',
    credentials: "same-origin",
    headers,
    body: JSON.stringify({ login: 'f@f.ru', pass: 'f' })
  })
    .then(response => {

      let res = response.json();
      console.log('login res', res);
      return res;
    })
    .catch(err2 => console.log('login err', err2))
};

const dzenapp = (data) => {

  console.log('dzenapp data', data)

  return fetch(`/dzenapi/dzenapp?${queryString}`, {
    method: 'GET',
    credentials: "same-origin",
    headers,
    // body: JSON.stringify(data)
  })
    .then(response => {

      // let res = response.json();
      // console.log('dzenapp', res);
      return response;
    })
    .catch(err => console.log('dzenapp err', err))
};

export const getBids = async (data) => {

  return await Promise.race([
    timeout(TIMEOUT),
    login()
      .then(() => dzenapp(data))
        .then(_=> console.log('dzenapp msg', _))
        .catch(err => console.log('dzenapp err', err)
      )
  ]);

}