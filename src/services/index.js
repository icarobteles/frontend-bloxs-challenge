import axios from "axios";

const instance = axios.create({
  baseURL: "https://conteudos.bloxs.com.br/wp-json/wp/v2",
});

export default instance;
