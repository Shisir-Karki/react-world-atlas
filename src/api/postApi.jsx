import axios from "axios";

const api = axios.create({
  baseURL:  "https://countries.dev",
});

export const getCountryData = () => {
  return (
    api.get("/countries")
  );
};

export const getCountryIndivData = (name) => {
  return (
    api.get(`/name/${name}`)
  );
};