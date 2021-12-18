import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="navbar-logo" src="/images/home.png" alt="" />
          YOGĀsana
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;