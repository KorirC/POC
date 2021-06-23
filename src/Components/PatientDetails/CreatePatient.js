import React, { useEffect, useState } from "react";
import "./scss/CreatePatient.scss";
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
import { useLocation } from "react-router-dom";
import { AddPatient } from "./AddPatient";
const moment = require("moment");

const CreatePatient = () => {
  const [person, setPerson] = useState([]);
  const [personId, setPersonId] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [identifierType, setIdentifierType] = useState("");
  const [area, setLocation] = useState("");
  const location = useLocation();

  useEffect(() => {
    setPerson([location.state]);
    setPersonId(location.id);
  }, [location.id, location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = JSON.stringify({
      person: personId,
      identifiers: [
        {
          identifier: `${identifier}`,
          identifierType: `${identifierType}`,
          location: `${area}`,
          preferred: false,
        },
      ],
    });
    
    AddPatient(data);
  };
  return (
    <>
      <div className="bx--grid--full-width">
        <Form onSubmit={handleSubmit}>
          {person.map((item) => (
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
                      value={item.display}
                      readOnly
                    />
                  </div>

                  <div className="bx--col" id="patientinputs">
                    <TextInput
                      labelText="MiddleName: "
                      placeholder=""
                      value=""
                      readOnly
                    />
                  </div>
                  <div className="bx--col" id="patientinputs">
                    <TextInput
                      labelText="FamilyName: "
                      placeholder=""
                      readOnly
                    />
                  </div>
                </Row>

                <Row>
                  <div className="bx--col" id="patientinputs">
                    <Select
                      id="select"
                      invalidText="This is an invalid error message."
                      labelText="Gender: "
                      defaultValue={item.gender}
                    >
                      {/* <SelectItem text="Female" value="F" />
                      <SelectItem text="Male" value="M" />
                      <SelectItem text="Other" value="O" /> */}
                    </Select>
                  </div>
                  <div className="bx--col" id="patientinputs">
                    <TextInput
                      labelText="Age: "
                      invalidText="Invalid error message."
                      placeholder="Enter age"
                      value={item.age}
                    />
                  </div>
                  <div className="bx--col" id="patientinputs">
                    <DatePicker
                      dateFormat="d/m/Y"
                      datePickerType="single"
                      value={moment(item.birthdate).format("DD/MM/YYYY")}
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
                      onChange={(e) => setIdentifier(e.target.value)}
                    />
                  </div>
                  <div className="bx--col" id="patientinputs">
                    <Select
                      defaultValue="placeholder-item"
                      id="select"
                      invalidText="This is an invalid error message."
                      labelText="IdentifierType: "
                      required
                      onChange={(e) => setIdentifierType(e.target.value)}
                    >
                      <SelectItem
                        text="Kenya National ID Number"
                        value="ID Number"
                      />
                      <SelectItem text="NHIF Number" value="NHIF Number" />
                    </Select>
                  </div>
                  <div className="bx--col" id="patientinputs">
                    <Select
                      defaultValue="placeholder-item"
                      id="select"
                      invalidText="This is an invalid error message."
                      labelText="IdentifierLocation: "
                      required
                      onChange={(e) => setLocation(e.target.value)}
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
                      readOnly
                    />
                  </div>

                  <div className="bx--col" id="patientinputs">
                    <TextInput
                      labelText="Town/Village: "
                      readOnly
                    />
                  </div>
                  <div className="bx--col" id="patientinputs">
                    <TextInput
                      labelText="Postalcode: "
                      readOnly
                    />
                  </div>
                </Row>
                <Row>
                  <div className="bx--col" id="patientinputs">
                    <TextInput
                      labelText="County: "
                      readOnly
                    />
                  </div>

                  <div className="bx--col" id="patientinputs">
                    <TextInput
                      labelText="Country: "
                      readonly
                      value={item.country}
                    />
                  </div>
                </Row>

                <div id="patientinputs">
                  <Button size="default" kind="secondary" type="submit">
                    Create Patient
                  </Button>
                </div>
              </div>
              <div className="bx--col-lg-3"></div>
            </Row>
          ))}
        </Form>
      </div>
    </>
  );
};
export default CreatePatient;
