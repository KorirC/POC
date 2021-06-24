import axios from "axios";
import apiURL from "../API/Config";

const user = sessionStorage.getItem("user");

const LocationName =  () => {
  let config = {
    method: "GET",
    url: apiURL + "location?&v=custom:(uuid,display)",
    headers: {
      Authorization: `Basic ${user}`,
    },
    
  };

  try {
    return axios(config)
      .then((response) =>{return response.data.results})
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
};

export { LocationName };