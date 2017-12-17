const headers = new Headers({
  'Accept': 'application/json',
  'Content-Type': 'application/json'
});

export default async (login, pass) => {

  return await fetch(`/dzenapi/login`, {
    method: 'POST',
    credentials: "same-origin",
    headers,
    body: JSON.stringify({
      login,
      pass
    })
  })
    .then(res => res.json());
    
};
