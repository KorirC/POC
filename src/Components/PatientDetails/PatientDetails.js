import React from "react";
import "./PatientDetails.scss";
import {
  Form,
  TextInput,
  Select,
  SelectItem,
  DatePicker,
  DatePickerInput,
  Button,
} from "carbon-components-react";

const PatientDetails = () => {
  return (
    <>
      <div class="bx--grid--full-width">
        <Form>
          <div class="bx--row">
            <div class="bx--col"></div>
            <div class="bx--col" id="patientform">
              <h2>Create a New Person</h2>
              <hr />

              <div id="patientinputs">
                <TextInput
                  labelText="GivenName: "
                  invalidText="Invalid error message."
                  placeholder="Enter given name"
                  required
                />
              </div>

              <div id="patientinputs">
                <TextInput
                  labelText="FamilyName: "
                  invalidText="Invalid error message."
                  placeholder="Enter family name"
                  required
                />
              </div>

              <div id="patientinputs">
                <DatePicker dateFormat="m/d/Y" datePickerType="single">
                  <DatePickerInput
                    id="date-picker-calendar-id"
                    placeholder="mm/dd/yyyy"
                    labelText="Date of Birth: "
                    type="text"
                  />
                </DatePicker>
              </div>

              <div id="patientinputs">
                <Select
                  defaultValue="placeholder-item"
                  id="select"
                  invalidText="This is an invalid error message."
                  labelText="Gender: "
                >
                  <SelectItem text="Female" value="F" />
                  <SelectItem text="Male" value="M" />
                  <SelectItem text="Other" value="O" />
                </Select>
              </div>

              {/* <div id="patientinputs">
                <TextInput
                  labelText="Phone Number: "
                  invalidText="Invalid error message."
                  placeholder="Enter phone number"
                />
              </div> */}

              {/* <div id="patientinputs">
                <TextInput
                  labelText="Health Center: "
                  invalidText="Invalid error message."
                  placeholder="Enter Location"
                  type="text"
                />
              </div> */}

              <div id="patientinputs">
                <Button size="default" kind="secondary">
                  Save
                </Button>
              </div>
            </div>
            <div class="bx--col"></div>
          </div>
        </Form>
        {/* <div class="bx--row"></div> */}
      </div>
    </>
  );
};
export default PatientDetails;
