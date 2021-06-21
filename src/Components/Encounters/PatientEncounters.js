import axios from "axios";
import apiURL from "../API/Config";

const user =sessionStorage.getItem("user");
const PatientEncounters = (id) => {
  return axios
    .get(
      apiURL +
        `/encounter?patient=${id}&v=custom:(uuid,display,encounterDatetime,location)`,
      {
        headers: {
          Authorization: `Basic ${user}`,
        },
      }
    )
    .then((res) => {
      return res.data.results;
    })
    .catch((error) => {
      console.error(error);
    });
};
export { PatientEncounters };
