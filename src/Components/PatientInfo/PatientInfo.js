import "../PatientInfo/PatientInfo.scss";
import React, { useState } from "react";
import {
  Button,
  Row,
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Pagination,
} from "carbon-components-react";

import { PatientEncounters } from "../Encounters/PatientEncounters";

const _ = require("lodash");

const headers = [
  { header: "Id", key: "uuid" },
  { header: "Type of Encounter", key: "display" },
  { header: "Date", key: "encounterDatetime" },
  { header: "Location", key: "location" },
];
const PatientInfo = (props) => {
  const [encounters, setEncounters] = useState([]);
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(5);

  const handleChange = (e) => {
    e.preventDefault();
    const id = props.match.params.id;

    PatientEncounters(id).then((resp) => {
      const results = resp.map((patient) => {
        return {
          id: patient.uuid,
          uuid: patient.uuid,
          display: patient.display,
          encounterDatetime: patient.encounterDatetime,
          location: patient.location.description,
        };
      });
      // _.sortBy(results, (encounter) => encounter.encounterDatetime);
      _.reverse(results);
      setEncounters(results);
    });
  };
  return (
    <div className="bx--grid--full-width">
      <Row>
        <div className="bx--col-lg-2"></div>
        <div className="bx--col-lg-12" id="patientInfoForm">
          <div id="patientinfo">
            <Button kind="secondary" onClick={handleChange}>
              Display Encounters
            </Button>
          </div>
          <div id="patientinfo">
            <DataTable
              rows={encounters.slice(
                firstRowIndex,
                firstRowIndex + currentPageSize
              )}
              headers={headers}
              isSortable
            >
              {({ rows, headers, getHeaderProps, getTableProps }) => (
                <TableContainer title="Patient Encounters">
                  <Table {...getTableProps()}>
                    <TableHead>
                      <TableRow>
                        {headers.map((header) => (
                          <TableHeader {...getHeaderProps({ header })}>
                            {header.header}
                          </TableHeader>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan="8">
                            <h5>No Encounter Record</h5>
                          </TableCell>
                        </TableRow>
                      ) : (
                        rows.map((row) => (
                          <TableRow key={row.id}>
                            {row.cells.map((cell) => (
                              <TableCell key={cell.id}>{cell.value}</TableCell>
                            ))}
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </DataTable>
            <div style={{ width: "100%" }}>
              <Pagination
                backwardText="Previous page"
                forwardText="Next page"
                itemsPerPageText="Items per page:"
                pageNumberText="Page Number"
                pageSize={currentPageSize}
                pageSizes={[5, 10, 15, 20, 25]}
                totalItems={encounters.length}
                onChange={({ page, pageSize }) => {
                  if (pageSize !== currentPageSize) {
                    setCurrentPageSize(pageSize);
                  }
                  setFirstRowIndex(pageSize * (page - 1));
                }}
              />
            </div>
          </div>
        </div>

        <div className="bx--col-lg-2"></div>
      </Row>
    </div>
  );
};
export default PatientInfo;
