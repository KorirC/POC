import axios from "axios";
import { PatientEncounters } from "../Encounters/PatientEncounters";

jest.mock("axios");

describe("fetchData", () => {
test("fetches data successfully from an API", async () => {
  const data = {
    data: {
      results: [
        {
          objectID: "1",
          title: "a",
        },
        {
          objectID: "2",
          title: "b",
        },
      ],
    },
  };

  axios.get.mockImplementationOnce(() => Promise.resolve(data));
  await expect(PatientEncounters("react")).resolves.toEqual(data.data.results);
});

// test("fetches erroneously data from an API", async () => {
//   const errorMessage = "Network Error";
//   axios.get.mockImplementationOnce(() => {
//     return Promise.reject(new Error(errorMessage));
//   });
//   await expect(PatientEncounters("react")).rejects.toThrow(errorMessage);
// });

});
