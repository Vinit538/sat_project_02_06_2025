import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";
import { CSVLink } from "react-csv";
import "./ApplicationsPage.css";
import axiosInstance from '../api/axiosConfig';

export default function ApplicationsPage() {
  const [applications, setApplications] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");

  // useEffect(() => {
  //   axios
  //     .get(`${base_url}/career`)
  //     .then((res) => setApplications(res.data))
  //     .catch((err) => console.error(err));
  // }, []);

  useEffect(() => {
  axiosInstance
    .get('/career') // baseURL is already configured
    .then((res) => setApplications(res.data))
    .catch((err) => {
      console.error("Error fetching students:", err);
      alert("You are not authorized to view this data. Please login.");
    });
}, []);

  const columns = useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      { Header: "Email", accessor: "email" },
      { Header: "Phone", accessor: "phone" },
      { Header: "Position", accessor: "position" },
      { Header: "Message", accessor: "message" },
    ],
    []
  );

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
      data: applications,
      initialState: { pageSize: 5 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  useEffect(() => {
    setTableGlobalFilter(globalFilter);
  }, [globalFilter, setTableGlobalFilter]);

  return (
    <div className="applications-container">
      <h3 className="mb-4">Career Applications</h3>

      <div className="d-flex mb-3 gap-2 flex-wrap align-items-center">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name, email, or position..."
          style={{ maxWidth: "300px" }}
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
        <CSVLink
          data={applications}
          filename="career_applications.csv"
          className="btn btn-success"
        >
          Export CSV
        </CSVLink>
      </div>

      <div className="table-responsive">
        <table {...getTableProps()} className="table table-bordered custom-table">
          <thead className="table-dark">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((col) => (
                  <th {...col.getHeaderProps(col.getSortByToggleProps())}>
                    {col.render("Header")}
                    <span>
                      {col.isSorted ? (col.isSortedDesc ? " 🔽" : " 🔼") : ""}
                    </span>
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
                <td colSpan={columns.length} className="text-center">
                  No applications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="pagination-controls d-flex justify-content-between mt-3">
        <button
          className="btn btn-outline-primary"
          onClick={previousPage}
          disabled={!canPreviousPage}
        >
          Previous
        </button>
        <span className="align-self-center">
          Page <strong>{state.pageIndex + 1}</strong> of {pageOptions.length}
        </span>
        <button
          className="btn btn-outline-primary"
          onClick={nextPage}
          disabled={!canNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}
