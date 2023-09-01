import axios from "axios";

export const url = axios.create({
  baseURL: "http://api.desasumberpucung.web.id",
});
