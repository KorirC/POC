import { PatientsData } from "./PatientsData";
import axios from "axios";
jest.mock("axios");

test("Patients Data function", async () => {
  axios.get.mockResolvedValue({
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
  });

  const datafetched = await PatientsData();
  expect(datafetched).toEqual([
    {
      objectID: "1",
      title: "a",
    },
    {
      objectID: "2",
      title: "b",
    },
  ]);
});
