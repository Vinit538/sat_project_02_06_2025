// // import React, { useEffect, useMemo, useState } from "react";
// // import axios from "axios";
// // import base_url from '../api/bootapi';
// // import { useTable, useSortBy, useGlobalFilter } from "react-table";
// // import { CSVLink } from "react-csv";
// // import './ManageStudentsPage.css';

// // export default function ManageStudentsPage() {
// //   const [students, setStudents] = useState([]);

// //   // useEffect(() => {
// //   //   axios.get(`${base_url}/submissions`)
// //   //     .then(res => setStudents(res.data))
// //   //     .catch(err => console.error(err));
// //   // }, []);
// // useEffect(() => {
// //   axios.get(`${base_url}/submissions`, { withCredentials: true })
// //     .then(res => setStudents(res.data))
// //     .catch(err => {
// //       console.error("Error fetching students:", err);
// //       alert("You are not authorized to view this data. Please login.");
// //     });
// // }, []);

// //   const data = useMemo(() => students, [students]);

// //   const columns = useMemo(() => [
// //     { Header: "Name", accessor: "userName" },
// //     { Header: "Email", accessor: "userEmail" },
// //     { Header: "Phone", accessor: "userPhoneNo" },
// //     { Header: "City", accessor: "userCity" },
// //     { Header: "Qualification", accessor: "userQualification" },
// //     { Header: "Language", accessor: "userLanguage" },
// //     { Header: "Technology", accessor: "userSelectedTech" },
// //     { Header: "Referral ID", accessor: "userReferralId" },
// //   ], []);

// //   const {
// //     getTableProps,
// //     getTableBodyProps,
// //     headerGroups,
// //     rows,
// //     prepareRow,
// //     setGlobalFilter,
// //     state
// //   } = useTable({ columns, data }, useGlobalFilter, useSortBy);

// //   return (
// //     <div className="container py-4">
// //       <h3 className="mb-4">Manage Students</h3>

// //       {/* 🔍 Search Input */}
// //       <div className="d-flex justify-content-between align-items-center mb-3">
// //         <input
// //           className="form-control w-50"
// //           placeholder="Search by any field..."
// //           value={state.globalFilter || ""}
// //           onChange={(e) => setGlobalFilter(e.target.value)}
// //         />
// //         {/* 📥 Export CSV */}
// //         <CSVLink
// //           data={students}
// //           filename="students_data.csv"
// //           className="btn btn-success"
// //         >
// //           Export CSV
// //         </CSVLink>
// //       </div>

// //       <div className="table-responsive">
// //         <table {...getTableProps()} className="table table-bordered table-striped">
// //           <thead className="table-dark">
// //             {headerGroups.map(headerGroup => (
// //               <tr {...headerGroup.getHeaderGroupProps()}>
// //                 {headerGroup.headers.map(column => (
// //                   // <th
// //                   //   {...column.getHeaderProps(column.getSortByToggleProps())}
// //                   //   style={{ cursor: "pointer" }}
// //                   // >
// //                   <th key={column.id} {...column.getHeaderProps(column.getSortByToggleProps())} style={{ cursor: "pointer" }}>

// //                     {column.render("Header")}
// //                     <span>
// //                       {column.isSorted
// //                         ? column.isSortedDesc
// //                           ? " 🔽"
// //                           : " 🔼"
// //                         : ""}
// //                     </span>
// //                   </th>
// //                 ))}
// //               </tr>
// //             ))}
// //           </thead>
// //           <tbody {...getTableBodyProps()}>
// //             {rows.length > 0 ? rows.map(row => {
// //               prepareRow(row);
// //               return (
// //                 <tr {...row.getRowProps()}>
// //                   {row.cells.map(cell => (
// //                     <td {...cell.getCellProps()}>{cell.render("Cell") || "N/A"}</td>
// //                   ))}
// //                 </tr>
// //               );
// //             }) : (
// //               <tr>
// //                 <td colSpan={columns.length} className="text-center">No matching records found.</td>
// //               </tr>
// //             )}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // }



// // // <div className="manage-students-container">
// // //   <h3 className="mb-4">Manage Students</h3>

// // //   Search + Export Row
// // //   <div className="manage-students-actions">
// // //     <input
// // //       className="form-control"
// // //       placeholder="Search by any field..."
// // //       value={state.globalFilter || ""}
// // //       onChange={(e) => setGlobalFilter(e.target.value)}
// // //     />
// // //     <CSVLink
// // //       data={students}
// // //       filename="students_data.csv"
// // //       className="btn btn-success"
// // //     >
// // //       Export CSV
// // //     </CSVLink>
// // //   </div>

// // //   <div className="table-responsive">
// // //     <table {...getTableProps()} className="table custom-table">
// // //       <thead>
// // //         {headerGroups.map(headerGroup => (
// // //           <tr {...headerGroup.getHeaderGroupProps()}>
// // //             {headerGroup.headers.map(column => (
// // //               <th {...column.getHeaderProps(column.getSortByToggleProps())}>
// // //                 {column.render("Header")}
// // //                 <span>
// // //                   {column.isSorted
// // //                     ? column.isSortedDesc
// // //                       ? " 🔽"
// // //                       : " 🔼"
// // //                     : ""}
// // //                 </span>
// // //               </th>
// // //             ))}
// // //           </tr>
// // //         ))}
// // //       </thead>
// // //       <tbody {...getTableBodyProps()}>
// // //         {rows.length > 0 ? rows.map(row => {
// // //           prepareRow(row);
// // //           return (
// // //             <tr {...row.getRowProps()}>
// // //               {row.cells.map(cell => (
// // //                 <td {...cell.getCellProps()}>{cell.render("Cell") || "N/A"}</td>
// // //               ))}
// // //             </tr>
// // //           );
// // //         }) : (
// // //           <tr>
// // //             <td colSpan={columns.length} className="text-center">No matching records found.</td>
// // //           </tr>
// // //         )}
// // //       </tbody>
// // //     </table>
// // //   </div>
// // // </div>

// import React, { useEffect, useMemo, useState } from "react";
// import axios from "axios";
// import { useTable, useSortBy, useGlobalFilter } from "react-table";
// import { CSVLink } from "react-csv";
// import "./ManageStudentsPage.css";
// import axiosInstance from '../api/axiosConfig';

// export default function ManageStudentsPage() {
//   const [students, setStudents] = useState([]);


//   useEffect(() => {
//     axiosInstance
//       .get('/submissions') // baseURL is already configured
//       .then((res) => setStudents(res.data))
//       .catch((err) => {
//         console.error("Error fetching students:", err);
//         alert("You are not authorized to view this data. Please login.");
//       });
//   }, []);


//   const data = useMemo(() => students, [students]);

//   const columns = useMemo(
//     () => [
//       { Header: "Student ID", accessor: "id" },
//       { Header: "Name", accessor: "userName" },
//       { Header: "Email", accessor: "userEmail" },
//       { Header: "Phone", accessor: "userPhoneNo" },
//       { Header: "City", accessor: "userCity" },
//       { Header: "Qualification", accessor: "userQualification" },
//       { Header: "Language", accessor: "userLanguage" },
//       { Header: "Technology", accessor: "userSelectedTech" },
//       { Header: "Referral ID", accessor: "userReferralId" },
//     ],
//     []
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//     setGlobalFilter,
//     state,
//     nextPage,
//     previousPage,
//     canNextPage,
//     canPreviousPage,
//     pageOptions,
//   } = useTable(
//     {
//       columns,
//       data,
//       initialState: { pageIndex: 0, pageSize: 5 },
//     },
//     useGlobalFilter,
//     useSortBy
//   );




//   return (
//     <div className="container py-4">
//       <h3 className="mb-4">Manage Students</h3>

//       {/* 🔍 Search + 📥 Export */}
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <input
//           className="form-control w-50"
//           placeholder="Search by any field..."
//           value={state.globalFilter || ""}
//           onChange={(e) => setGlobalFilter(e.target.value)}
//         />
//         <CSVLink
//           data={students}
//           filename="students_data.csv"
//           className="btn btn-success"
//         >
//           Export CSV
//         </CSVLink>
//       </div>

//       <div className="table-responsive">
//         <table {...getTableProps()} className="table table-bordered table-striped">
//           <thead className="table-dark">
//             {headerGroups.map((headerGroup) => (
//               <tr key={headerGroup.id || headerGroup.getHeaderGroupProps().key} {...headerGroup.getHeaderGroupProps()}>
//                 {headerGroup.headers.map((column) => (
//                   <th
//                     key={column.id}
//                     {...column.getHeaderProps(column.getSortByToggleProps())}
//                     style={{ cursor: "pointer" }}
//                   >
//                     {column.render("Header")}
//                     <span>
//                       {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
//                     </span>
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody {...getTableBodyProps()}>
//             {rows.length > 0 ? (
//               rows.map((row) => {
//                 prepareRow(row);
//                 return (
//                   <tr key={row.id || row.getRowProps().key} {...row.getRowProps()}>
//                     {row.cells.map((cell) => (
//                       <td key={cell.column.id} {...cell.getCellProps()}>
//                         {cell.render("Cell") || "N/A"}
//                       </td>
//                     ))}
//                   </tr>
//                 );
//               })
//             ) : (
//               <tr>
//                 <td colSpan={columns.length} className="text-center">
//                   No matching records found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//       <div className="pagination-controls d-flex justify-content-between mt-3">
//         <button
//           className="btn btn-outline-primary"
//           onClick={previousPage}
//           disabled={!canPreviousPage}
//         >
//           Previous
//         </button>
//         <span className="align-self-center">
//           Page <strong>{state.pageIndex + 1}</strong> of {pageOptions.length}
//         </span>
//         <button
//           className="btn btn-outline-primary"
//           onClick={nextPage}
//           disabled={!canNextPage}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useMemo, useState } from "react";
import { useTable, useSortBy, useGlobalFilter, usePagination } from "react-table";
import { CSVLink } from "react-csv";
import axiosInstance from '../api/axiosConfig';
import "./ManageStudentsPage.css";

export default function ManageStudentsPage() {
  const [students, setStudents] = useState([]);

  // useEffect(() => {
  //   axiosInstance
  //     .get('/submissions')
  //     .then((res) => setStudents(res.data))
  //     .catch((err) => {
  //       console.error("Error fetching students:", err);
  //       alert("You are not authorized to view this data. Please login.");
  //     });
  // }, []);
  useEffect(() => {
  axiosInstance
    .get('/submissions', { withCredentials: true }) // ✅ ADD THIS
    .then((res) => setStudents(res.data))
    .catch((err) => {
      console.error("Error fetching students:", err);
      alert("You are not authorized to view this data. Please login.");
    });
}, []);


  const data = useMemo(() => students, [students]);

  const columns = useMemo(() => [
    { Header: "Student ID", accessor: "id" },
    { Header: "Name", accessor: "userName" },
    { Header: "Email", accessor: "userEmail" },
    { Header: "Phone", accessor: "userPhoneNo" },
    { Header: "City", accessor: "userCity" },
    { Header: "Qualification", accessor: "userQualification" },
    { Header: "Language", accessor: "userLanguage" },
    { Header: "Technology", accessor: "userSelectedTech" },
    { Header: "Referral ID", accessor: "userReferralId" },
  ], []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page, // <-- use `page` instead of `rows`
    prepareRow,
    setGlobalFilter,
    state,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    pageOptions,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination // ✅ enable pagination
  );

  return (
    <div className="container py-4">
      <h3 className="mb-4">Manage Students</h3>

      {/* 🔍 Search + 📥 Export + 🔢 Page Size */}
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <input
          className="form-control w-50"
          placeholder="Search by any field..."
          value={state.globalFilter || ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
        <div className="d-flex align-items-center gap-2">
          <select
            value={state.pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="form-select"
          >
            {[5, 10, 20, 50].map(size => (
              <option key={size} value={size}>
                Show {size}
              </option>
            ))}
          </select>
          <CSVLink
            data={students}
            filename="students_data.csv"
            className="btn btn-success"
          >
            Export CSV
          </CSVLink>
        </div>
      </div>

      {/* 📋 Table */}
      <div className="table-responsive">
        <table {...getTableProps()} className="table table-bordered table-striped">
          <thead className="table-dark">
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    style={{ cursor: "pointer" }}
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.length > 0 ? (
              page.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()}>
                        {cell.render("Cell") || "N/A"}
                      </td>
                    ))}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={columns.length} className="text-center">
                  No matching records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ⏪ Pagination */}
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
