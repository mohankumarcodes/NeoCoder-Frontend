import "./PreparationCard.css";
import cardImage from "../assets/AssesmentImage.png";

export default function PreparationCard({ item }) {

  return (
    <div className="prep-card">

      {/* IMAGE */}
      <img
        src={cardImage}
        alt="card"
        className="prep-card-image"
      />

      {/* TITLE */}
      <h3>{item.title}</h3>

      {/* COMPANY */}
      <p className="company-name">
        Tata Consultancy Services
      </p>

      {/* DETAILS */}
      <div className="card-details">

        <span> 40 min</span>

        <span>10 MCQ's + 2 Coding</span>

      </div>

      {/* BUTTON */}
      <button>
        Start Test
      </button>

    </div>
  );
}