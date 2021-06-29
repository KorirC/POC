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
} from "carbon-components-react";
import { PatientEncounters } from "../Encounters/PatientEncounters";
import PagePagination from "../Pagination/Pagination";
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
  // const { match: { params } } = props;
  const id = props.match.params.id;

  useEffect(() => {
    PatientEncounters(id).then((resp) => {
      const results = resp.map((patient) => {
        return {
          id: patient.uuid,
          uuid: patient.uuid,
          display: patient.display,
          // encounterDatetime: moment(patient.encounterDatetime).format("DD/MM/YYYY"),
          encounterDatetime: patient.encounterDatetime,
          location: patient.location.description,
        };
      });

      // console.log(results);
      results.sort(function compare(a, b) {
        let dateA = new moment(a.encounterDatetime).format("YYYYMMDD");
        let dateB = new moment(b.encounterDatetime).format("YYYYMMDD");
        return dateB - dateA;
      });

      setEncounters(results);
    });
  }, [id]);

 
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
                    <Table {...getTableProps()} useZebraStyles>
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
                              <h5>No Records Found</h5>
                            </TableCell>
                          </TableRow>
                        ) : (
                          rows.map((row) => (
                            <TableRow key={row.id}>
                              {row.cells.map((cell) => (
                                <TableCell key={cell.id}>
                                  {cell.value}
                                </TableCell>
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
                <PagePagination
                  totalItems={encounters.length}
                  setFirstRowIndex={setFirstRowIndex}
                  setCurrentPageSize={setCurrentPageSize}
                  currentPageSize={currentPageSize}
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
