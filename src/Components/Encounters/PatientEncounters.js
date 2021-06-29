import axios from "axios";
import AuthHeaders from "../API/AuthHeaders";
import apiURL from "../API/Config";

const PatientEncounters = (id) => {
  return axios
    .get(
      apiURL +
        `/encounter?patient=${id}&v=custom:(uuid,display,encounterDatetime,location)`,
      AuthHeaders
    )
    .then((res) => {
      return res.data.results;
    })
    .catch((error) => {
      console.error(error);
    });
};
export { PatientEncounters };
