import axios from "axios";

export async function search(keyword) {
  axios
    .get(`/videos/${keyword ? "search" : "popular"}.json`)
    .then((res) => res.data.items);
}
