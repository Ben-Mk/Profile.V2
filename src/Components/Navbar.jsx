import "../Css/Navbar.css";
export default function Navbar() {
  return (
    <>
      <header className="header">
        <h2>Profile</h2>
        <nav>
          <ul className="nav-bar-list">
            <li className="nav-bar-item">
              <a href="#" className="nav-bar-link">
                Home
              </a>
            </li>
            <li className="nav-bar-item">
              <a href="#" className="nav-bar-link">
                Create
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
