
import axios from "axios";
import { triggerNotifier } from "../services/notifier";

export const getUser = (userId: string) =>
  axios
    .get(`/users/${userId}`)
    .then((res: any) => {
      return res;
    })
    .catch((error: any) => {
      console.log("error",error)
      if (error.response && error.response.data) {
        const errorMsg = error.response.data.message;
        triggerNotifier({ type: "error", message: errorMsg });
      }
    });

export const getUserRepos = (userId: string) =>
  axios
    .get(`/users/${userId}/repos`)
    .then((res: any) => {
      return res;
    })
    .catch((error: any) => {
      if (error.response && error.response.data) {
        const errorMsg = error.response.data.error;
        triggerNotifier({ type: "error", message: errorMsg });
      }
    });
