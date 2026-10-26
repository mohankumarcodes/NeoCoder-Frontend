import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="menu">
          <p>Dashboard</p>
          <p>Bookmarks</p>
          <p>Leagues</p>

        <h4 className="menu-heading">LEARN</h4>
          <p className="menu-item">Courses</p>
          <p className="menu-item">Tutorials</p>

        <h4 className="menu-heading">PRACTICE</h4>
          <p className="menu-item active">Assessments</p>
          <p className="menu-item">Coding Challenges</p>

        <h4 className="menu-heading">CAREER</h4>
          <p className="menu-item">Career Paths</p>
          <p className="menu-item">AI Resume Builder</p>
      </div>
    </div>
  );
}