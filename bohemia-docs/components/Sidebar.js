export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h6 className="section-label">Get Started</h6>
        <ul className="section-links">
          <li>
            <a href="#">Overview</a>
          </li>
          <li>
            <a href="#">Fundamentals</a>
          </li>
          <li>
            <a href="#">Account Setup</a>
          </li>
          <li>
            <a href="#">Changelog</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
        <h6 className="section-label">Operate</h6>
        <ul className="section-links">
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Definitions</a>
          </li>
          <li>
            <a href="#">Authentication</a>
          </li>
          <li>
            <a href="#">Roles</a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
