import axios from "axios";

const nasa = axios.create({
  baseURL: "https://api.nasa.gov",
  headers: {
    "Content-type": "application/json",
  },
});

const getNASA = async (apiEndpoint) => {
  const response = await nasa.get(apiEndpoint, {
    params: { api_key: process.env.NEXT_PUBLIC_NASA_API_KEY },
  });
  return response.data;
};

export { getNASA };
