import axios from "axios";

import md5 from "blueimp-md5";

const ts = Number(Math.floor(Date.now() / 1000));
const privateKey = "b6a9d3e9b0ee2fe465c54b9bd04b934bd4bf35ed";
const publicKey = "86d1e2827ab6ab5ac830bcbdbe270015";
const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
  baseURL: `http://gateway.marvel.com/v1/public`,
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
});

export { api };
