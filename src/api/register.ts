import { TIMEOUT, HEADERS } from "config";

const timeout = ms =>
  new Promise((res, rej) => setTimeout(() => rej(new Error("timeout")), ms));

export const query = async (login, password) => {
  return await fetch(`/dzenapi/register`, {
    method: "POST",
    credentials: "same-origin",
    headers: HEADERS,
    body: JSON.stringify({
      login,
      password
    })
  }).then(res => {
    if (res.ok) return res.json();
    throw new Error("userinfo failed");
  });
};

export default async (login, password) => {
  return await Promise.race([timeout(TIMEOUT), await query(login, password)]);
};
