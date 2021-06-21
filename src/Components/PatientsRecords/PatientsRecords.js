import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableToolbar,
  TableToolbarContent,
  Search,
  Button,
  Pagination,
} from "carbon-components-react";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { PatientsData } from "../PatientsData/PatientsData";
import "../PatientsRecords/PatientsRecords.scss";

const headers = [
  { header: "Identifier", key: "identifier" },
  { header: "Display", key: "name" },
  { header: "Age", key: "age" },
  { header: "Birthdate", key: "dob" },
  { header: " Gender", key: "gender" },
  { header: "Dead", key: "dead" },
  { header: "Death Date", key: "deathdate" },
  { header: "Link", key: "link" },
];

const PatientsRecords = () => {
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [rows, setRows] = useState([]);

  const history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);

    PatientsData(searchTerm).then((resp) => {
      const results = resp.map((patient) => {
        return {
          id: patient.uuid,
          identifier: patient.person.uuid,
          name: patient.person.display,
          age: patient.person.age,
          gender: patient.person.gender,
          dob: patient.person.birthdate,
          dead: patient.person.dead,
          deathdate: patient.person.deathDate,
          link: <Link to={`/Encounters/${patient.uuid}`}>Encounters</Link>,
        };
      });
      setRows(results);
    });
  };
  const load = () => {
    history.push("/PatientDetails");
  };

  return (
    <>
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-lg-2"></div>
          <div className="bx--col-lg-12" id="dt">
            <Search
              id="search-1"
              placeHolderText="Search Patient"
              value={searchTerm}
              onChange={handleChange}
            />

            <DataTable
              id="dataTable"
              rows={rows.slice(firstRowIndex, firstRowIndex + currentPageSize)}
              headers={headers}
              isSortable
              render={({ rows, headers, getHeaderProps }) => (
                <TableContainer title="Patients List">
                  <TableToolbar>
                    <TableToolbarContent>
                      <Button onClick={load} size="sm" kind="secondary">
                        Add new
                      </Button>
                    </TableToolbarContent>
                  </TableToolbar>
                  <Table useZebraStyles>
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
                            <h5>Patient Record Not found</h5>
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
            />
            <div style={{ width: "100%" }}>
              <Pagination
                backwardText="Previous page"
                forwardText="Next page"
                itemsPerPageText="Items per page:"
                pageNumberText="Page Number"
                pageSize={currentPageSize}
                pageSizes={[5, 10, 15, 20, 25]}
                totalItems={rows.length}
                onChange={({ page, pageSize }) => {
                  if (pageSize !== currentPageSize) {
                    setCurrentPageSize(pageSize);
                  }
                  setFirstRowIndex(pageSize * (page - 1));
                }}
              />
            </div>
          </div>
          <div className="bx--col-lg-2"></div>
        </div>
      </div>
    </>
  );
};
export default PatientsRecords;
