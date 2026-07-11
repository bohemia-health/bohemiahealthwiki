"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar({ open = false }) {
  const pathname = usePathname();

  const [groupBuysManuallyOpen, setGroupBuysManuallyOpen] = useState(false);

  const groupBuysRouteOpen = pathname.startsWith("/group-buys");
  const groupBuysOpen = groupBuysManuallyOpen || groupBuysRouteOpen;

  const [vendorsOpen, setVendorsOpen] = useState(false);
  const [orderManagementOpen, setOrderManagementOpen] = useState(false);
  const [inventoryOpen, setInventoryOpen] = useState(false);
  const [thirdPartyTestingOpen, setThirdPartyTestingOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [customerSupportOpen, setCustomerSupportOpen] = useState(false);

  return (
    <aside className={open ? "sidebar open" : "sidebar"}>
      <div className="sidebar-search">
        <i className="ti ti-search"></i>
        <input type="text" placeholder="Search articles..." />
      </div>
      <div className="sidebar-section">
        <h6 className="section-label">Get Started</h6>
        <ul className="section-links">
          <li>
            <a href="/" className={pathname === "/" ? "active" : ""}>
              Overview
            </a>
          </li>
          <li>
            <Link
              href="/account-setup"
              className={pathname === "/account-setup" ? "active" : ""}
            >
              Account Setup
            </Link>
          </li>
          <li>
            <Link
              href="/resources"
              className={pathname === "/resources" ? "active" : ""}
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              href="/support"
              className={pathname === "/support" ? "active" : ""}
            >
              Support
            </Link>
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
            className={
              groupBuysOpen
                ? "sidebar-dropdown-btn active"
                : "sidebar-dropdown-btn"
            }
            type="button"
            onClick={() => setGroupBuysManuallyOpen(!groupBuysManuallyOpen)}
            aria-expanded={groupBuysOpen}
          >
            <span className="dropdown-title">
              <i className="ti ti-users"></i>
              <span>Group Buys</span>
            </span>

            <i
              className={
                groupBuysOpen
                  ? "ti ti-chevron-down dropdown-chevron open"
                  : "ti ti-chevron-down dropdown-chevron"
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
              <Link
                href="/group-buys/fundamentals"
                className={
                  pathname === "/group-buys/fundamentals" ? "active" : ""
                }
              >
                Lifecycle
              </Link>
              <a href="/">Research</a>
              <a href="/">Planning & Setup</a>
              <a href="/">Pricing & Profitability</a>
              <a href="/">Vendors</a>
              <a href="/">Fulfillment</a>
              <a href="/">Public Updates</a>
              <a href="/">Regulation, Restriction and Exclusions</a>
            </div>
          </div>
        </div>

        {/* Vendors Dropdown Component */}
        <div className="sidebar-dropdown">
          <button
            className="sidebar-dropdown-btn"
            type="button"
            onClick={() => setVendorsOpen(!vendorsOpen)}
            aria-expanded={vendorsOpen}
          >
            <span className="dropdown-title">
              <i className="ti ti-building-store"></i>
              <span>Vendors</span>
            </span>

            <i
              className={
                vendorsOpen
                  ? "ti ti-chevron-down dropdown-chevron open"
                  : "ti ti-chevron-down dropdown-chevron"
              }
            ></i>
          </button>

          <div
            className={
              vendorsOpen
                ? "sidebar-dropdown-menu open"
                : "sidebar-dropdown-menu"
            }
          >
            <div className="sidebar-dropdown-inner">
              <a href="/">Vendor Overview</a>
              <a href="/">Gray Market Vendors</a>
              <a href="/">Vendor Vetting</a>
              <a href="/">Approved Vendors</a>
              <a href="/">No-Go Vendors</a>
              <a href="/">Vendor Behavior Policy</a>
              <a href="/">Vendor Communication</a>
              <a href="/">Vendor Incident Log</a>
            </div>
          </div>
        </div>
        {/* Order Management Dropdown Component */}
        <div className="sidebar-dropdown">
          <button
            className="sidebar-dropdown-btn"
            type="button"
            onClick={() => setOrderManagementOpen(!orderManagementOpen)}
            aria-expanded={orderManagementOpen}
          >
            <span className="dropdown-title">
              <i className="ti ti-clipboard-check"></i>
              <span>Order Management</span>
            </span>

            <i
              className={
                orderManagementOpen
                  ? "ti ti-chevron-down dropdown-chevron open"
                  : "ti ti-chevron-down dropdown-chevron"
              }
            ></i>
          </button>

          <div
            className={
              orderManagementOpen
                ? "sidebar-dropdown-menu open"
                : "sidebar-dropdown-menu"
            }
          >
            <div className="sidebar-dropdown-inner">
              <a href="/">Order Intake</a>
              <a href="/">Order Statuses</a>
              <a href="/">Order Changes</a>
              <a href="/">Customer Holds</a>
              <a href="/">Add-Ons</a>
              <a href="/">No Split Shipping</a>
              <a href="/">No Split Location Fulfillment</a>
              <a href="/">Shipping Readiness</a>
              <a href="/">Order Reconciliation</a>
            </div>
          </div>
        </div>

        {/* Inventory Dropdown Component */}
        <div className="sidebar-dropdown">
          <button
            className="sidebar-dropdown-btn"
            type="button"
            onClick={() => setInventoryOpen(!inventoryOpen)}
            aria-expanded={inventoryOpen}
          >
            <span className="dropdown-title">
              <i className="ti ti-package"></i>
              <span>Inventory</span>
            </span>

            <i
              className={
                inventoryOpen
                  ? "ti ti-chevron-down dropdown-chevron open"
                  : "ti ti-chevron-down dropdown-chevron"
              }
            ></i>
          </button>

          <div
            className={
              inventoryOpen
                ? "sidebar-dropdown-menu open"
                : "sidebar-dropdown-menu"
            }
          >
            <div className="sidebar-dropdown-inner">
              <a href="/">Inventory Intake</a>
              <a href="/">Inventory Verification</a>
              <a href="/">Shortages</a>
              <a href="/">Missing Kits</a>
              <a href="/">Broken Items</a>
              <a href="/">Extra Kits</a>
              <a href="/">Bulk Packing Lists</a>
              <a href="/">Final Reconciliation</a>
            </div>
          </div>
        </div>

        {/* 3rd Party Testing Dropdown Component */}
        <div className="sidebar-dropdown">
          <button
            className="sidebar-dropdown-btn"
            type="button"
            onClick={() => setThirdPartyTestingOpen(!thirdPartyTestingOpen)}
            aria-expanded={thirdPartyTestingOpen}
          >
            <span className="dropdown-title">
              <i className="ti ti-flask"></i>
              <span>3rd Party Testing</span>
            </span>

            <i
              className={
                thirdPartyTestingOpen
                  ? "ti ti-chevron-down dropdown-chevron open"
                  : "ti ti-chevron-down dropdown-chevron"
              }
            ></i>
          </button>

          <div
            className={
              thirdPartyTestingOpen
                ? "sidebar-dropdown-menu open"
                : "sidebar-dropdown-menu"
            }
          >
            <div className="sidebar-dropdown-inner">
              <a href="/">Testing Overview</a>
              <a href="/">COAs</a>
              <a href="/">Sample Selection</a>
              <a href="/">Testing Timelines</a>
              <a href="/">Failed Results</a>
              <a href="/">Retesting</a>
              <a href="/">COA Requests</a>
              <a href="/">Testing Communication Rules</a>
            </div>
          </div>
        </div>

        {/* Customer Support Dropdown Component */}
        <div className="sidebar-dropdown">
          <button
            className="sidebar-dropdown-btn"
            type="button"
            onClick={() => setCustomerSupportOpen(!customerSupportOpen)}
            aria-expanded={customerSupportOpen}
          >
            <span className="dropdown-title">
              <i className="ti ti-message-circle"></i>
              <span>Customer Support</span>
            </span>

            <i
              className={
                customerSupportOpen
                  ? "ti ti-chevron-down dropdown-chevron open"
                  : "ti ti-chevron-down dropdown-chevron"
              }
            ></i>
          </button>

          <div
            className={
              customerSupportOpen
                ? "sidebar-dropdown-menu open"
                : "sidebar-dropdown-menu"
            }
          >
            <div className="sidebar-dropdown-inner">
              <a href="/">Support Workflow</a>
              <a href="/">Template Responses</a>
              <a href="/">Address Changes</a>
              <a href="/">Missing Items</a>
              <a href="/">Impatient Customers</a>
              <a href="/">Status Update Requests</a>
              <a href="/">COA Requests</a>
              <a href="/">Behavior Policy</a>
              <a href="/">Incident Examples</a>
              <a href="/">Escalation Rules</a>
            </div>
          </div>
        </div>

        <h6 className="section-label">Circumvent</h6>
        <ul className="section-links">
          <li>
            <a href="#">International Orders</a>
          </li>
          <li>
            <a href="#">GB Issues</a>
          </li>
          <li>
            <a href="#">Guarantees</a>
          </li>
          <li>
            <a href="#">Reputation</a>
          </li>
        </ul>
        {/* WARNING: this is where the Sidebar closes */}
      </div>
    </aside>
  );
}
