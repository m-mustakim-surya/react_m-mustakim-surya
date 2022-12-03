import axiosInstance from "../config/AxiosInstance";

const AboutAPI = {
  async getAllAbout() {
    const res = await axiosInstance.get("/about");
    return res;
  },
};

export default AboutAPI;
