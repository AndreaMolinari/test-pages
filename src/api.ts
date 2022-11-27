import axios from "axios";
import "react-native-url-polyfill/auto";
import { AuthApi, Configuration } from "../generated";

const config = new Configuration();

const axiosInstance = axios.create({
  headers: { Authorization: "YOUR_TOKEN" },
});

const basePath = "https://new-tobebackend.herokuapp.com";

const authApi = new AuthApi(config, basePath, axiosInstance);

export { authApi };
