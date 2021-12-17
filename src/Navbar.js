import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">YOGĀsana</Link>
      </div>
    </nav>
  );
}

export default Navbar;