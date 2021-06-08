import React from "react";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>API Project: File Metadata Microservice</h1>
      <h4 style={{ textAlign: "center" }}>Usage:</h4>
      <p style={{ textAlign: "center" }}>Please upload a file...</p>
      <div style={{ border: "solid black 1px", width: "80%", margin: "auto" }}>
        <form
          encType="multipart/form-data"
          method="POST"
          action="/api/fileanalyse"
          style={{ padding: "20px 100px" }}
        >
          <input
            id="inputField"
            name="upfile"
            type="file"
            style={{ display: "block", margin: "auto", marginBottom: "20px" }}
          />
          <input
            id="button"
            type="submit"
            value="Upload"
            style={{ margin: "auto", display: "block" }}
          />
        </form>
      </div>
    </div>
  );
}

export default App;
