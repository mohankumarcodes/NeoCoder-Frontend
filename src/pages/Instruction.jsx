import { useNavigate } from "react-router-dom";
import "./Instruction.css";
import Navbar from "../components/Navbar";

export default function Instruction() {

  const navigate = useNavigate();

  return (

    <div className="instruction-page">

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTAINER */}
      <div className="instruction-wrapper">
        <div className="instruction-container">

          {/* LEFT SIDE */}
          <div className="instruction-left">
            <h2>📋 Instruction / Guideline</h2>
            <div className="instruction-section">
              <h3>Assessment Timeline & Instructions</h3>
              <ul>
                <li>Total Duration: 40 minutes</li>
                <li>MCQ Section: 20 minutes</li>
                <li>Coding Section: 20 minutes</li>
              </ul>
            </div>
            <div className="instruction-section">
              <h3>Total Questions</h3>
              <ul>
                <li>10 Multiple Choice Questions</li>
                <li>2 Coding Challenges</li>
              </ul>
            </div>
            <div className="instruction-section">
              <h3>Important Guidelines</h3>
              <ul>
                <li>Do not close the browser during assessment</li>
                <li>Assessment must be completed in one sitting</li>
                <li>Timer cannot be paused or stopped</li>
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="instruction-right">
            <h2 className="test-title">
              Arrays and Basic Aptitude – Mock Test
            </h2>
            {/* CARD 1 */}
            <div className="instruction-card active-card">
              <div className="card-header">
                <h3>Start with MCQ Questions</h3>
                <input  type="radio" checked readOnly />
              </div>
              <p>10 Questions • 20 mins • 10 Marks</p>
            </div>

            {/* CARD 2 */}
            <div className="instruction-card">
              <div className="card-header">
                <h3>Start with Coding Challenge</h3>
                  <input  type="radio" readOnly />
              </div>
              <p>2 Problems • 20 mins • 20 Marks</p>
            </div>

            {/* BUTTON */}
            <button
              className="startTest-btn"
              onClick={() => navigate("/test")}
            >
              Start Test
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}