import axios from "axios";

const nasa = axios.create({
  baseURL: "https://api.nasa.gov",
});

export default async (_, res) => {
  const response = await nasa.get("/planetary/apod/", {
    params: { api_key: process.env.NEXT_PUBLIC_NASA_API_KEY },
  });
  const data = response.data;
  res.status(200).json({ ...data });
};
