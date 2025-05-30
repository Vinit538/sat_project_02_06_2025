import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import { useTable, useGlobalFilter, useSortBy, usePagination } from "react-table";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useReactToPrint } from "react-to-print";
import "./HiringRequestsPage.css";
import base_url from "../api/bootapi";

export default function HiringRequestsPage() {
  const [requests, setRequests] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");

  useEffect(() => {
    axios.get(`${base_url}/hire-talent`)
      .then(res => setRequests(res.data))
      .catch(err => console.error(err));
  }, []);

  const columns = useMemo(() => [
    { Header: "Name", accessor: "name" },
    { Header: "Email", accessor: "email" },
    { Header: "Phone", accessor: "phone" },
    { Header: "Company", accessor: "company" },
    { Header: "Requirements", accessor: "requirements" }
  ], []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    pageOptions,
    state,
    setGlobalFilter: setTableGlobalFilter,
  } = useTable(
    {
      columns,
      data: requests,
      initialState: { pageSize: 5 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  useEffect(() => {
    setTableGlobalFilter(globalFilter);
  }, [globalFilter, setTableGlobalFilter]);

  const tableRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
    documentTitle: "Hiring Requests",
  });

  const handlePDFExport = () => {
    const doc = new jsPDF();
    const tableColumn = columns.map(col => col.Header);
    const tableRows = requests.map(row => columns.map(col => row[col.accessor]));
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      styles: { fontSize: 9 },
      margin: { top: 20 },
    });
    doc.save("hiring_requests.pdf");
  };

  return (
    <div className="hiring-requests-container">
      <h3 className="mb-4">Hiring Requests</h3>

      <div className="d-flex flex-wrap gap-2 mb-3 align-items-center">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          style={{ maxWidth: "300px" }}
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
        <CSVLink data={requests} filename="hiring_requests.csv" className="btn btn-success">
          Export CSV
        </CSVLink>
        <button onClick={handlePDFExport} className="btn btn-danger">
          Export PDF
        </button>
        <button onClick={handlePrint} className="btn btn-outline-secondary">
          Print
        </button>
      </div>

      <div ref={tableRef} className="table-responsive">
        <table {...getTableProps()} className="table table-bordered custom-table">
          <thead className="table-dark">
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>{column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}</span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.length > 0 ? (
              page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    ))}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={columns.length} className="text-center">No records found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="pagination-controls d-flex justify-content-between mt-3">
        <button className="btn btn-outline-primary" onClick={previousPage} disabled={!canPreviousPage}>
          Previous
        </button>
        <span className="align-self-center">Page <strong>{state.pageIndex + 1}</strong> of {pageOptions.length}</span>
        <button className="btn btn-outline-primary" onClick={nextPage} disabled={!canNextPage}>
          Next
        </button>
      </div>
    </div>
  );
}
