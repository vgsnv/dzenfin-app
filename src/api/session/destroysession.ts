import { TIMEOUT } from "config";

const timeout = ms =>
  new Promise((res, rej) => setTimeout(() => rej(new Error("timeout")), ms));

const headers = new Headers({
  Accept: "application/json",
  "Content-Type": "application/json"
});

export const query = async () => {
  return await fetch(`/dzenapi/destroysession`, {
    method: "POST",
    credentials: "same-origin",
    headers
  }).then(res => {
    if (res.ok) return res.json();
    throw new Error("destroysession failed");
  });
};

export default async () => {
  return await Promise.race([timeout(TIMEOUT), await query()]);
};
