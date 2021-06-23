import React, { useState } from "react";
import "./CreatePatient.scss";
import {
  Form,
  TextInput,
  Select,
  SelectItem,
  DatePicker,
  DatePickerInput,
  Button,
  Row,
} from "carbon-components-react";
import { AddPatient } from "./AddPatient";

const CreatePatient = () => {
  const [givenName, setGivenName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const handleChange = (date) => {
    let selectedDate = new Date(date).toLocaleDateString("fr-CA");
    setBirthDate(selectedDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = JSON.stringify({
      names: [{ givenName: `${givenName}`, familyName: `${familyName}` }],
      gender: `${gender}`,
      birthdate: `${birthDate}`,
      addresses: [
        { address1: "", cityVillage: "", country: "Kenya", postalCode: "" },
      ],
    });
    //using axios
    AddPatient(data);
    console.log(data);
  };

  return (
    <>
      <div className="bx--grid--full-width">
        <Form onSubmit={handleSubmit}>
          <Row>
            <div className="bx--col-lg-3"></div>
            <div className="bx--col-lg-10" id="patientform">
              <h2>Create a New Patient</h2>
              <hr />
              <Row>
                <div className="bx--col" id="patientinputs">
                  <TextInput
                    labelText="GivenName: "
                    invalidText="Invalid error message."
                    placeholder="Enter given name"
                    required
                    onChange={(e) => setGivenName(e.target.value)}
                  />
                </div>

                <div className="bx--col" id="patientinputs">
                  <TextInput
                    labelText="MiddleName: "
                    invalidText="Invalid error message."
                    placeholder="Enter middle name"
                    required
                    onChange={(e) => setFamilyName(e.target.value)}
                  />
                </div>
                <div className="bx--col" id="patientinputs">
                  <TextInput
                    labelText="FamilyName: "
                    invalidText="Invalid error message."
                    placeholder="Enter family name"
                    required
                    onChange={(e) => setFamilyName(e.target.value)}
                  />
                </div>
              </Row>
              <Row>
                <div className="bx--col" id="patientinputs">
                  <Select
                    defaultValue="placeholder-item"
                    id="select"
                    invalidText="This is an invalid error message."
                    labelText="Gender: "
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <SelectItem text="Female" value="F" />
                    <SelectItem text="Male" value="M" />
                    <SelectItem text="Other" value="O" />
                  </Select>
                </div>
                <div className="bx--col" id="patientinputs">
                  <TextInput
                    labelText="Age: "
                    invalidText="Invalid error message."
                    placeholder="Enter age"
                    required
                    onChange={(e) => setFamilyName(e.target.value)}
                  />
                </div>
                <div className="bx--col" id="patientinputs">
                  <DatePicker
                    dateFormat="d/m/Y"
                    datePickerType="single"
                    onChange={handleChange}
                  >
                    <DatePickerInput
                      id="date-picker-calendar-id"
                      placeholder="mm/dd/yyyy"
                      labelText="Date of Birth: "
                      type="text"
                    />
                  </DatePicker>
                </div>
              </Row>
              <Row>
              <div className="bx--col" id="patientinputs">
                  <TextInput
                    labelText="Identifier: "
                    invalidText="Invalid error message."
                    placeholder="Enter identifier"
                    required
                    onChange={(e) => setFamilyName(e.target.value)}
                  />
                </div>
                <div className="bx--col" id="patientinputs">
                  <Select
                    defaultValue="placeholder-item"
                    id="select"
                    invalidText="This is an invalid error message."
                    labelText="IdentifierType: "
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <SelectItem text="Kenya National ID Number" value="ID Number" />
                    <SelectItem text="NHIF Number" value="NHIF Number" />
                  </Select>
                </div>
                <div className="bx--col" id="patientinputs">
                  <Select
                    defaultValue="placeholder-item"
                    id="select"
                    invalidText="This is an invalid error message."
                    labelText="IdentifierLocation: "
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <SelectItem text="Location-1" value="Location-1" />
                    <SelectItem text="Location-2" value="Location-2" />
                    <SelectItem text="Location-3" value="Location-3" />
                  </Select>
                </div>
                
              </Row>
              <Row>
                <div className="bx--col" id="patientinputs">
                  <TextInput
                    labelText="Address: "
                    invalidText="Invalid error message."
                    placeholder="Enter address"
                    required
                    onChange={(e) => setGivenName(e.target.value)}
                  />
                </div>

                <div className="bx--col" id="patientinputs">
                  <TextInput
                    labelText="Town/Village: "
                    invalidText="Invalid error message."
                    placeholder="Enter town/village"
                    required
                    onChange={(e) => setFamilyName(e.target.value)}
                  />
                </div>
                <div className="bx--col" id="patientinputs">
                  <TextInput
                    labelText="Postalcode: "
                    invalidText="Invalid error message."
                    placeholder="Enter postalcode"
                    required
                    onChange={(e) => setFamilyName(e.target.value)}
                  />
                </div>
              </Row>
              <Row>
                <div className="bx--col" id="patientinputs">
                  <TextInput
                    labelText="County: "
                    invalidText="Invalid error message."
                    placeholder="Enter county"
                    required
                    onChange={(e) => setGivenName(e.target.value)}
                  />
                </div>

                <div className="bx--col" id="patientinputs">
                  <TextInput
                    labelText="Country: "
                    invalidText="Invalid error message."
                    placeholder="Enter country"
                    required
                    onChange={(e) => setFamilyName(e.target.value)}
                  />
                </div>
                {/* <div className="bx--col" id="patientinputs">
                  <TextInput
                    labelText="FamilyName: "
                    invalidText="Invalid error message."
                    placeholder="Enter family name"
                    required
                    onChange={(e) => setFamilyName(e.target.value)}
                  />
                </div> */}
              </Row>
              <div id="patientinputs">
                <Button size="default" kind="secondary" type="submit">
                  Create Patient
                </Button>
              </div>
            </div>
            <div className="bx--col-lg-3"></div>
          </Row>
        </Form>
      </div>
    </>
  );
};
export default CreatePatient;
