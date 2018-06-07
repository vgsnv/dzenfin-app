import { TIMEOUT, HEADERS } from "config";

const timeout = ms =>
  new Promise((res, rej) => setTimeout(() => rej(new Error("timeout")), ms));

export const query = async () => {
  return await fetch(`/dzenapi/createdemouser`, {
    method: "GET",
    credentials: "same-origin",
    headers: HEADERS
  }).then(res => {
    if (res.ok) return res.json();
    throw new Error("logout failed");
  });
};

export default async () => {
  return await Promise.race([timeout(TIMEOUT), await query()]);
};
