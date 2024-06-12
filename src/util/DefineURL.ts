import { Platform } from "react-native";
import { API_URL_ANDROID, API_URL_WEB } from "@env";

const getApiUrl = () => {
  if (Platform.OS == "android") {
    return API_URL_ANDROID;
  } else {
    return API_URL_WEB;
  }
};

const API_URL = getApiUrl();

export default API_URL;
