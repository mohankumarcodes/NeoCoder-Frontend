import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../components/Navbar.css";
import PreparationCard from "../components/PreparationCard";

import {
  preparationData,
  attempts
} from "../data/dummyData";

import "./dashboard.css";

export default function Dashboard() {

  const navigate = useNavigate();

  return (
    <div className="dashboard-page">

      {/* TOP NAVBAR */}
      <Navbar />

      {/* BODY */}
      <div className="dashboard-layout">

        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <main className="dashboard-main">

          <h2 className="HeadingOfMainPage">
            Assessments
          </h2>

          {/* TOP BANNER */}
          <div className="assessment-banner">

            {/* LEFT CONTENT */}
            <div className="BannerContent">

              <p className="BannerRecommended">
                RECOMMENDED TEST
              </p>

              <h3>
                Arrays and Basic Problem Solving
              </h3>

              <span className="BannerSpan">
                10 MCQ + 2 Coding Questions
              </span>

            </div>

            {/* RIGHT BUTTON */}
            <button className="start-btn" onClick={()=> navigate ("/instruction")}>
              Start Test
            </button>

          </div>

          {/* PREPARATION SECTION */}
          <section className="preparation-section">

            <h2 className="PreparationHeading">
              Personalised Preparation Kit for you
            </h2>

            <div className="card-grid">

              {
                preparationData.map((item) => (
                  <PreparationCard
                    key={item.id}
                    item={item}
                  />
                ))
              }

            </div>

          </section>

        </main>

        {/* RIGHT PANEL */}
        <aside className="attempt-panel">

          <h2>My Attempts</h2>

          {
            attempts.map((attempt) => (
              <div className="attempt-card" key={attempt.id}>
                  <h4>{attempt.role}</h4>
                <div className="attemptScoreDate">
                  <p>Your Score : {attempt.score}</p>
                  <span>{attempt.date}</span>
                </div>

                 {/* RETAKE TEST BUTTON */}
                  <button className="retake-btn">
                    Retake Test
                  </button>
              </div>
            ))
          }

        </aside>

      </div>

    </div>
  );
}