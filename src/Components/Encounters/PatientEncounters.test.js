import axios from "axios";
import { PatientEncounters } from "../Encounters/PatientEncounters";

jest.mock("axios");

describe("fetchData", () => {
  it("fetches successfully data from an API", async () => {
    const data = {
      data: {
        hits: [
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

   await axios.get.mockImplementationOnce(() => Promise.resolve(data));

    // eslint-disable-next-line jest/valid-expect
    expect(PatientEncounters("react")).resolves.toEqual(data);
  });

    it('fetches erroneously data from an API', async () => {
      const errorMessage = 'Network Error';

     await axios.get.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage)),
      );

       // eslint-disable-next-line jest/valid-expect
       expect(PatientEncounters('react')).rejects.toThrow(errorMessage);
    });
});
