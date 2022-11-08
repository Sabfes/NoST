import axios from "axios";
import {ServerString} from "../utils/utils";

export const instanceWithoutToken = axios.create({
  baseURL: ServerString
});
const instance = axios.create({
  baseURL: ServerString,
  // headers: {
  //   Authorization: `Bearer ${token}`
  // }
});
