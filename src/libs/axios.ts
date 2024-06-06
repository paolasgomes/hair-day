import { env } from "@/libs/env";
import axios from "axios";

const BASE_URL = env.PUBLIC_API_URL;

export const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});
