import { TIMEOUT, HEADERS } from "config";

const timeout = ms =>
  new Promise((res, rej) => setTimeout(() => rej(new Error("timeout")), ms));

export const query = async (email, password) => {
  return await fetch(`/dzenapi/createuser`, {
    method: "POST",
    credentials: "same-origin",
    headers: HEADERS,
    body: JSON.stringify({
      email,
      password
    })
  }).then(res => {
    if (res.ok) return res.json();
    throw new Error("userinfo failed");
  });
};

export default async (email, password) => {
  return await Promise.race([timeout(TIMEOUT), await query(email, password)]);
};
