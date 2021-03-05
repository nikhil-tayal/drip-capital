import axios from "axios";

const GET = (url) => {
  const config = {
    headers: { Authorization: "Bearer IkcFOdcUNLz2jTW8_ecjqA0h2FP2IQg42lwOfCugFEE" },
  };
  return axios.get(url, config);
};

export { GET };
