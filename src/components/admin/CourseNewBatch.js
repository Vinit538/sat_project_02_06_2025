// import React, { useState } from "react";
// import { useAuth } from "../../auth/AuthContext";

// const initialBatches = [
//     { courseName: "Fullstack Developer", startDate: "2025-06-10", mode: "Online", seatsLeft: 5 },
//     { courseName: "Data Analyst", startDate: "2025-06-15", mode: "Offline", seatsLeft: 0 },
//     { courseName: "Database Administration", startDate: "2025-06-18", mode: "Online", seatsLeft: 3 },
//     { courseName: "Artificial Intelligence", startDate: "2025-06-20", mode: "Offline", seatsLeft: 2 },
//     { courseName: "Digital Marketing", startDate: "2025-06-22", mode: "Online", seatsLeft: 7 },
//     { courseName: "Data Engineering", startDate: "2025-06-25", mode: "Hybrid", seatsLeft: 1 },
//     { courseName: "CAD Designing", startDate: "2025-06-28", mode: "Offline", seatsLeft: 4 },
//     { courseName: "Mainframe Technologies", startDate: "2025-07-01", mode: "Online", seatsLeft: 6 },
//     { courseName: "SAP", startDate: "2025-07-03", mode: "Online", seatsLeft: 5 },
//     { courseName: "IT Service Desk Manager", startDate: "2025-07-05", mode: "Offline", seatsLeft: 3 },
// ];

// export default function CourseNewBatch() {
//     const { role } = useAuth(); // Role from AuthContext
//     const [batches, setBatches] = useState([
//         { courseName: "Fullstack Developer", startDate: "2025-06-10", mode: "Online", seatsLeft: 5 },
//         { courseName: "Data Analyst", startDate: "2025-06-15", mode: "Offline", seatsLeft: 0 },
//         { courseName: "Database Administration", startDate: "2025-06-18", mode: "Online", seatsLeft: 3 },
//         { courseName: "Artificial Intelligence", startDate: "2025-06-20", mode: "Offline", seatsLeft: 2 },
//         { courseName: "Digital Marketing", startDate: "2025-06-22", mode: "Online", seatsLeft: 7 },
//         { courseName: "Data Engineering", startDate: "2025-06-25", mode: "Hybrid", seatsLeft: 1 },
//         { courseName: "CAD Designing", startDate: "2025-06-28", mode: "Offline", seatsLeft: 4 },
//         { courseName: "Mainframe Technologies", startDate: "2025-07-01", mode: "Online", seatsLeft: 6 },
//         { courseName: "SAP", startDate: "2025-07-03", mode: "Online", seatsLeft: 5 },
//         { courseName: "IT Service Desk Manager", startDate: "2025-07-05", mode: "Offline", seatsLeft: 3 },
//     ]);
//     const handleInputChange = (index, field, value) => {
//         if (role !== "admin") return alert("Unauthorized: Only admins can update batch data.");

//         const updated = [...batches];
//         updated[index][field] = field === "seatsLeft" ? parseInt(value) : value;
//         setBatches(updated);
//     };

//     const handleSave = () => {
//         if (role !== "admin") return alert("Unauthorized: Only admins can save changes.");
//         console.log("Updated batch data:", batches); // You can display toast or confirm here
//     };

//     return (
//         <div className="container mt-4">
//             <h3 className="mb-3 fw-bold">📅 Manage Course Batches</h3>

//             {batches.map((batch, i) => (
//                 <div key={i} className="card mb-3 p-3 shadow-sm">
//                     <h5 className="fw-semibold">{batch.courseName}</h5>
//                     <div className="row">
//                         <div className="col-md-4">
//                             <label>Start Date:</label>
//                             <input
//                                 type="date"
//                                 className="form-control"
//                                 value={batch.startDate}
//                                 onChange={(e) => handleInputChange(i, "startDate", e.target.value)}
//                             />
//                         </div>
//                         <div className="col-md-4">
//                             <label>Mode:</label>
//                             <select
//                                 className="form-control"
//                                 value={batch.mode}
//                                 onChange={(e) => handleInputChange(i, "mode", e.target.value)}
//                             >
//                                 <option>Online</option>
//                                 <option>Offline</option>
//                                 <option>Hybrid</option>
//                             </select>
//                         </div>
//                         <div className="col-md-4">
//                             <label>Seats Left:</label>
//                             <input
//                                 type="number"
//                                 className="form-control"
//                                 value={batch.seatsLeft}
//                                 min="0"
//                                 onChange={(e) => handleInputChange(i, "seatsLeft", e.target.value)}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             ))}

//             {role === "admin" && (
//                 <button className="btn btn-success mt-3" onClick={handleSave}>
//                     ✅ Save All Changes
//                 </button>
//             )}
//             {role !== "admin" && (
//                 <div className="alert alert-danger mt-3">
//                     🔒 You are not authorized to update batches. Please login as admin.
//                 </div>
//             )}
//         </div>
//     );
// }

import React, { useEffect, useState } from "react";
import { useAuth } from "../../auth/AuthContext"; // For admin check
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function CourseNewBatch() {
  const { role } = useAuth();
  const [batches, setBatches] = useState([]);
  const [originalBatches, setOriginalBatches] = useState([]);

  // Load batch data from local JSON file
  useEffect(() => {
    fetch("/batches.json")
      .then((res) => res.json())
      .then((data) => {
        setBatches(data);
        setOriginalBatches(data);
      })
      .catch((err) => console.error("Failed to load batch data:", err));
  }, []);

  const handleInputChange = (index, key, value) => {
    const updated = [...batches];
    updated[index][key] = value;
    setBatches(updated);
  };

  const handleReset = () => setBatches(originalBatches);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    autoTable(doc, {
      head: [["Course", "Start Date", "Mode", "Seats Left"]],
      body: batches.map(({ courseName, startDate, mode, seatsLeft }) => [
        courseName,
        startDate,
        mode,
        seatsLeft,
      ]),
    });
    doc.save("updated-batches.pdf");
  };

  return (
    <div className="container py-5">
      <h3 className="mb-4">🆕📅 Course Batch Editor</h3>

      {role === "admin" ? (
        <>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Start Date</th>
                <th>Mode</th>
                <th>Seats Left</th>
              </tr>
            </thead>
            <tbody>
              {batches.map((batch, i) => (
                <tr key={i}>
                  <td>{batch.courseName}</td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={batch.startDate}
                      onChange={(e) =>
                        handleInputChange(i, "startDate", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <select
                      className="form-select"
                      value={batch.mode}
                      onChange={(e) =>
                        handleInputChange(i, "mode", e.target.value)
                      }
                    >
                      <option>Online</option>
                      <option>Offline</option>
                      <option>Hybrid</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      value={batch.seatsLeft}
                      onChange={(e) =>
                        handleInputChange(i, "seatsLeft", e.target.value)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="btn btn-success me-2" onClick={handleDownloadPDF}>
            ⬇️ Download PDF
          </button>
          <button className="btn btn-secondary" onClick={handleReset}>
            🔁 Reset
          </button>
        </>
      ) : (
        <div className="alert alert-danger">
          ❌ You do not have access to edit batches.
        </div>
      )}
    </div>
  );
}
