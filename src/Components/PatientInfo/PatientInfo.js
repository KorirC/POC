import "../PatientInfo/PatientInfo.scss";
import React, { useEffect, useState } from "react";
import {
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
// import Moment from 'moment';
import { PatientEncounters } from "../Encounters/PatientEncounters";

const _ = require("lodash");
const moment = require("moment");

const headers = [
  { header: "Type of Encounter", key: "display" },
  { header: "Date", key: "encounterDatetime" },
  { header: "Location", key: "location" },
];
const PatientInfo = (props) => {
  const [encounters, setEncounters] = useState([]);
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(5);
  const id = props.match.params.id;
  useEffect(() => {
   
    PatientEncounters(id).then((resp) => {
      const results = resp.map((patient) => {
        return {
          id: patient.uuid,
          uuid: patient.uuid,
          display: patient.display,
          encounterDatetime: moment(patient.encounterDatetime).format("DD - MM - YYYY"),
          location: patient.location.description,
        };
      });
      // _.sortBy(results, (encounter) => encounter.encounterDatetime);
      _.reverse(results);
      setEncounters(results);
    });
  },[]);

  return (
    <div className="bx--grid--full-width">
      <Row>
        <div className="bx--col-lg-2"></div>
        <div className="bx--col-lg-12" id="patientInfoForm">
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
                            <h5>No Encounter Records Found</h5>
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
