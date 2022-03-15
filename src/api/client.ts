import applyCaseMiddleware from "axios-case-converter";
import axios from "axios";

const options = {
  ignoreHeaders: true,
};

const client = applyCaseMiddleware(
  axios.create({
    // baseURL: "http://localhost:3001/api/v1",
    baseURL: `${process.env.REACT_APP_API_URL}/api/v1`,
  }),
  options
);

export default client;
