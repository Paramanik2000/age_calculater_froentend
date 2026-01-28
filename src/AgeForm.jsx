import { useState } from "react";
import API from "./api";
import "./AgeForm.css";

function AgeForm() {
  const [dob, setDob] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

  const submitAge = async () => {
    try {
      const response = await API.post("/api/calculate-age", { dob });
      setResult(
        `Age: ${response.data.years} years, ${response.data.months} months, ${response.data.days} days`
      );
      setError(false);
    } catch {
      setResult("Backend not connected or invalid input");
      setError(true);
    }
  };

  return (
    <div className="age-container">
      <div className="age-card">
        <h2>Age Calculator</h2>

        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />

        <button onClick={submitAge}>Calculate Age</button>

        {result && (
          <div className={`result ${error ? "error" : "success"}`}>
            {result}
          </div>
        )}
      </div>
    </div>
  );
}

export default AgeForm;
