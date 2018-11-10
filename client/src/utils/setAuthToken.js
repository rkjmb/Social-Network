import axios from "axios";

const setAuthToken = token => {
  if (token) {
    //Apply to every request
    axios.defaults.headers.commom["Authrization"] = token;
  } else {
    //Delete auth header
    delete axios.defaults.headers.commom["Authorization"];
  }
};

export default setAuthToken;
