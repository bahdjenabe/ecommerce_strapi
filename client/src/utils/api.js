import axios from "axios";

const params = {
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STRIPE_API,
  },
};

export const fetchDataApi = async (url) => {
  try {
    const { data } = await axios.get(process.env.REACT_APP_URL + url, params);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const makePayementRequest = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STRIPE_API,
  },
});
