import axios from "axios";

if (process.env.NODE_ENV !== "production") {
  var baseURL = "https://lldev.thespacedevs.com/2.2.0";
}

const launchLibrary = axios.create({
  baseURL: baseURL || "https://ll.thespacedevs.com/2.2.0",
  headers: {
    "Content-type": "application/json",
  },
});

const getUpcoming = (params) => {
  return launchLibrary.get("/launch/upcoming/", { params });
};

export { getUpcoming };
