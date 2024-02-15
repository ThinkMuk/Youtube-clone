import axios from "axios";

export default class FakeYoutubeClient {
  constructor() {}

  async search(keyword) {
    return axios.get("/videos/search.json");
  }
  async videos() {
    return axios.get("/videos/popular.json");
  }
  async channels() {
    return axios.get("/videos/channel.json");
  }
}
