import axios from "axios";

const nasa = axios.create({
  baseURL: "https://api.nasa.gov",
  headers: {
    "Content-type": "application/json",
  },
});

const getAPOD = async () => {
  return await nasa.get("/planetary/apod/", {
    params: { api_key: process.env.NEXT_PUBLIC_NASA_API_KEY },
  });
};

export { getAPOD };
