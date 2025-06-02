import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TestCorsComponent() {
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // <== KEY
        body: JSON.stringify({ test: "hello" }),
      });

      const text = await res.text();
      setResponse(text);
    } catch (err) {
      setResponse("Error: " + err.message);
    }
  };

  return (
    <div>
      <h1>Test CORS</h1>
      <button onClick={handleSubmit}>Send POST</button>
      <p>Response: {response}</p>
    </div>
  );
}

export default TestCorsComponent;
