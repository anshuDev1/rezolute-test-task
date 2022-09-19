import toast from "react-hot-toast";

interface props {
  type: 'success' | 'error' | 'loading',
  message: string
}

export const triggerNotifier = ({ type, message }: props) => toast[type](typeof (message) === "string" ? message : "Something went wrong!");
