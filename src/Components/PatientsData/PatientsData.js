import axios from "axios";
import apiURL from "../API/Config";

const user = sessionStorage.getItem("user");
const PatientsData = (searchTerm) => {
  return axios
    .get(apiURL + `patient?q=${searchTerm}&v=default`, {
      headers: {
        Authorization: `Basic ${user}`,
      },
    })
    .then((res) => {
      return res.data.results;
    })
    .catch((error) => {
      console.error(error);
    });
  };
  
export { PatientsData };
