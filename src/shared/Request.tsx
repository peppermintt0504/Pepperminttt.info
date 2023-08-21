import axios from "axios";

const accessToken = process.env.REACT_APP_LOST_ARK_API_TOKEN;

const instance = axios.create({
  baseURL: "https://developer-lostark.game.onstove.com",
  headers: {
    "content-type": "application/json;charset-UTF-8",
    accept: "application/json,",
    authorization: accessToken,
    Authorization: accessToken,
  },
});

instance.interceptors.request.use(
  function (config: any) {
    config.headers!.authorization = accessToken;
    config.headers!.Authorization = accessToken;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default instance;
