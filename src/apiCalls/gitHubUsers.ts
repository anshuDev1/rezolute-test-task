
import axios from "axios";
import { triggerNotifier } from "../services/notifier";

export const getUser = (userId: string) =>
  axios
    .get(`/users/${userId}`)
    .then((res: any) => {
      triggerNotifier({ type: "error", message: "user found" });
      return res;
    })
    .catch((error: any) => {
      if (error.response && error.response.data) {
        const errorMsg = error.response.data.error;
        triggerNotifier({ type: "error", message: errorMsg });
      }
    });
