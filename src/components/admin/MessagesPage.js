import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";
import { CSVLink } from "react-csv";
import dayjs from "dayjs";
import "./MessagesPage.css";
import axiosInstance from '../api/axiosConfig';

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);
  const [techFilter, setTechFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  // useEffect(() => {
  //   axios
  //     .get(`${base_url}/api/messages`)
  //     .then((res) => setMessages(res.data))
  //     .catch((err) => console.error(err));
  // }, []);

  useEffect(() => {
  axiosInstance
    .get('/api/messages') // baseURL is already configured
    .then((res) => setMessages(res.data))
    .catch((err) => {
      console.error("Error fetching students:", err);
      alert("You are not authorized to view this data. Please login.");
    });
}, []);

  // Filter messages by technology and user name
  const filteredMessages = useMemo(() => {
    return messages.filter((msg) => {
      const techMatch =
        techFilter === "" || msg.user?.userSelectedTech === techFilter;
      const nameMatch =
        nameFilter === "" ||
        msg.userName.toLowerCase().includes(nameFilter.toLowerCase());
      return techMatch && nameMatch;
    });
  }, [messages, techFilter, nameFilter]);

  const techOptions = [...new Set(messages.map((m) => m.user?.userSelectedTech))];

  const columns = useMemo(
    () => [
      { Header: "Name", accessor: "userName" },
      { Header: "Email", accessor: "userEmail" },
      { Header: "Phone", accessor: "userPhoneNo" },
      {
        Header: "Technology",
        accessor: (row) => row.user?.userSelectedTech || "N/A",
        id: "technology",
      },
      {
        Header: "Message",
        accessor: "userMessage",
      },
      {
        Header: "Time",
        accessor: (row) => dayjs(row.createdAt).format("YYYY-MM-DD HH:mm"),
        id: "createdAt",
      },
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
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data: filteredMessages,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <div className="messages-container">
      <h3 className="mb-4">Student Messages</h3>

      <div className="messages-filters mb-3 d-flex flex-wrap gap-2">
        <input
          type="text"
          placeholder="Search by name..."
          className="form-control"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          style={{ maxWidth: "220px" }}
        />
        <select
          className="form-select"
          value={techFilter}
          onChange={(e) => setTechFilter(e.target.value)}
          style={{ maxWidth: "220px" }}
        >
          <option value="">All Technologies</option>
          {techOptions.map((tech, i) => (
            <option key={i} value={tech}>
              {tech}
            </option>
          ))}
        </select>
        <CSVLink
          data={filteredMessages}
          filename="filtered_student_messages.csv"
          className="btn btn-success ms-auto"
        >
          Export CSV
        </CSVLink>
      </div>

      <div className="table-responsive">
        <table {...getTableProps()} className="table custom-table">
          <thead>
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
                  No messages found.
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
