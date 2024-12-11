import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cad57ed09a394e948546b9e5efe8dc44",
  },
});
