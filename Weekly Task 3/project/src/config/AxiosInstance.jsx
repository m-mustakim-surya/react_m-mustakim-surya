import axios from "axios";

const config = {
  baseURL: "https://apt-muskrat-31.hasura.app/api/rest",
  headers: {
    "x-hasura-admin-secret":
      "4qRdzkUiB8iPl5r0Awx8K12tCWjVvcxoRF9MM57wjVXRsalylgCQHyRXoVFsPNd7",
  },
};

const axiosInstance = axios.create(config);

export default axiosInstance;
