import logo from "../assets/Logo.png";
export default function Navbar() {
  return (
    <div className="navbar">

      <div className="navbar-logo">
        <img className="navbar-logo1" src={logo} alt="Logo" />
      </div>

      <input type="text" placeholder="Search for courses, quiz..." />

      <div className="nav-right">
        <button className="btnUpgrade">Upgrade to Pro</button>
        <img className="UserImg" src="https://i.pravatar.cc/40" alt="profile" />
      </div>
    </div>
  );
}
