import Image from "next/image";
import Link from "next/link";

export default function Navbar({ menuOpen, onMenuToggle }) {
  return (
    <nav className="navbar">
      <div>
        <button
          type="button"
          className="navbar-menu-btn"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={onMenuToggle}
        >
          <i className={menuOpen ? "ti ti-x" : "ti ti-menu-2"} aria-hidden="true"></i>
        </button>
        <Link href="/" className="navbar-logo">
          <Image
            src="/assets/BHMDocs-ShorthandLogomark.png"
            alt="Bohemia Health Docs home"
            width={134}
            height={48}
            priority
          />
        </Link>
      </div>

      <ul>
        <li className="navbar-search-item">
          <div className="search-container">
            <i className="ti ti-search" aria-hidden="true" />
            <input
              type="text"
              className="navbar-search"
              id="searchInput"
              placeholder="Search"
              aria-label="Search docs"
            />
            <div className="search-results" id="searchResults" />
          </div>
        </li>
        <li className="navbar-link-item">
          <Link href="/coming-soon/directory">Directory</Link>
        </li>
        <li className="navbar-link-item">
          <Link href="/coming-soon/help">
            Help <i className="ti ti-chevron-down" aria-hidden="true"></i>
          </Link>
        </li>
        <li className="login-item">
          <Link href="/coming-soon/log-in" className="login-btn">
            Log in
          </Link>
        </li>
      </ul>
    </nav>
  );
}
