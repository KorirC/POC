import axios from "axios";
import apiURL from "../API/Config";

const user = sessionStorage.getItem("user");

const AddPatient = async (data) => {
  let config = {
    method: "POST",
    url: apiURL + "person",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${user}`,
    },
    data: data,
    json: true,
  };

  try {
    return axios(config)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
};

export { AddPatient };
