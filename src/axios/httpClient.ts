import axios from "axios";

export const httpClient = axios.create({
  baseURL: "http://127.0.0.1:4000/api/v1",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
