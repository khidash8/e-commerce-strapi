import axios from "axios";

const params = {
  headers: {
    Authorization: "Bearer " + process.env.REACT_APP_STRAPI_KEY,
  },
};

export const fetchDataFromAPI = async (url) => {
  try {
    const { data } = await axios.get(
      process.env.REACT_APP_DEV_URL + url,
      params
    );
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const makePaymentRequest = axios.create({
  baseURL: process.env.REACT_APP_DEV_URL,
  headers: {
    Authorization: "Bearer " + process.env.REACT_APP_STRAPI_KEY,
  },
});
