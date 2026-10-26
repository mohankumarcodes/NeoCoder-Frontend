import { useState } from "react";
import "./Onboarding.css";
import { useNavigate } from "react-router-dom";

export default function Onboarding() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    degree: "",
    language: "",
    goal: "",
    timeline: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="onboard-container">
        {/* LEFT SIDE */}
        <div className="onboard-left"> </div>

        <div className="onboard-right">
          <h2>Hello, Marry !</h2>
          <p>Help us personalize your experience</p>

          <div className="form-group">
            <label>Degree</label>
            <select name="degree" onChange={handleChange}>
              <option>B.Tech</option>
              <option>B.Sc</option>
              <option>MCA</option>
            </select>
          </div>

          <div className="form-group">
            <label>Preferred Language</label>
            <select name="language" onChange={handleChange}>
              <option>Java</option>
              <option>Python</option>
              <option>JavaScript</option>
            </select>
          </div>

          <div className="form-group">
            <label>Current Goal</label>
            <select name="goal" onChange={handleChange}>
              <option>Prepare for Interviews</option>
              <option>Learn Coding</option>
            </select>
          </div>

          <div className="form-group">
            <label>Interview Timeline</label>
            <div className="timeline">
              {["1 week", "1 month", "3 months"].map((item) => (
                <button
                  key={item}
                  className={formData.timeline === item ? "active" : ""}
                  onClick={() => setFormData({ ...formData, timeline: item })}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          <button className="continue-btn" onClick={() => navigate("/Dashboard")}> Create an Account </button>
        </div>
      </div>
    </>
  );
}
