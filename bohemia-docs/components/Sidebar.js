"use client";
import { useState } from "react";

export default function Sidebar() {
  const [groupBuysOpen, setGroupBuysOpen] = useState(false);
  return (
    <aside className="sidebar">
      <div className="sidebar-search">
        <i className="ti ti-search"></i>
        <input type="text" placeholder="Search articles..." />
      </div>
      <div className="sidebar-section">
        <h6 className="section-label">Get Started</h6>
        <ul className="section-links">
          <li>
            <a href="#">Overview</a>
          </li>
          <li>
            <a href="#">Account Setup</a>
          </li>
          <li>
            <a href="#">Resources</a>
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

        {/* Sidebar Dropdown Component */}
        <div className="sidebar-dropdown">
          <button
            className="sidebar-dropdown-btn"
            type="button"
            onClick={() => setGroupBuysOpen(!groupBuysOpen)}
            aria-expanded={groupBuysOpen}
          >
            <span className="dropdown-title">
              <i className="bi bi-people"></i>
              <span>Group Buys</span>
            </span>

            <i
              className={
                groupBuysOpen
                  ? "bi bi-chevron-down dropdown-chevron open"
                  : "bi bi-chevron-down drop-down-chevron"
              }
            ></i>
          </button>

          <div
            className={
              groupBuysOpen
                ? "sidebar-dropdown-menu open"
                : "sidebar-dropdown-menu"
            }
          >
            <div className="sidebar-dropdown-inner">
              <a href="/">Lifecycle</a>
              <a href="/">Research</a>
              <a href="/">Planning & Setup</a>
              <a href="/">Vendors</a>
              <a href="/">Fulfillment</a>
              <a href="/">Communication</a>
              <a href="/">Regulation, Restriction and Exclusions</a>
            </div>
          </div>
        </div>

        {/* WARNING: this is where the Sidebar closes */}
      </div>
    </aside>
  );
}
