import axios from "axios";

const instance = axios.create({
  baseURL: "https://kampete-tinder-clone-backend.herokuapp.com",
});

export default instance;
