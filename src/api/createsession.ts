import { TIMEOUT } from "../config";

const timeout = ms =>
  new Promise((res, rej) => setTimeout(() => rej(new Error("timeout")), ms));

const headers = new Headers({
  Accept: "application/json",
  "Content-Type": "application/json"
});

export const login = async (login, pass) => {
  return await fetch(`/dzenapi/createsession`, {
    method: "POST",
    credentials: "same-origin",
    headers,
    body: JSON.stringify({
      login,
      pass
    })
  }).then(res => res.json());
};

export default async (l, p) => {
  return await Promise.race([timeout(TIMEOUT), await login(l, p)]);
};
