export default function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <a href="/" className="navbar-logo">
          <img src="assets/BHMDocs-ShorthandLogomark.png" alt="Bohemia Docs" />
        </a>
      </div>

      <ul>
        <li>
          <div className="search-container">
            <i className="ti ti-search" />
            <input
              type="text"
              className="navbar-search"
              id="searchInput"
              placeholder="Search"
            />
            <div className="search-results" id="searchResults" />
          </div>
        </li>
        <li>
          <a href="/">Directory</a>
        </li>
        <li>
          <a href="/">API</a>
        </li>
        <li>
          <a href="/">SDKs</a>
        </li>
        <li>
          <a href="/">Changelog</a>
        </li>
        <li>
          <a href="/">
            Help <i className="ti ti-chevron-down"></i>
          </a>
        </li>

        <li className="login-item">
          <a href="/" className="login-btn">
            Log in
          </a>
        </li>
      </ul>
    </nav>
  );
}
