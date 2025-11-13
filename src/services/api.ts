import axios from "axios";

export const  api = axios.create({
  baseURL:  "http://192.168.18.12:3333",
  timeout: 700,
})