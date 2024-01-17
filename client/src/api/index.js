import axios from "axios";
import { userData } from "../services/helpers";

const {jwt} = userData()
export const instance = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization: "Bearer " + import.meta.env.VITE_API_TOKEN,
  },
});

export const privateInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: `Bearer ${jwt}`,
    "Content-Type": "application/json",
  },
});
