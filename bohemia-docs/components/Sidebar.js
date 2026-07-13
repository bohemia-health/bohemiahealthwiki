"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  TOP_SECTIONS,
  DROPDOWNS,
  BOTTOM_SECTION,
  FOOTER_LINKS,
} from "@/components/nav-data";

function SidebarSection({ section, pathname }) {
  return (
    <>
      <p className="section-label">{section.label}</p>
      <ul className="section-links">
        {section.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={pathname === link.href ? "active" : ""}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function SidebarDropdown({ item, pathname }) {
  const routeOpen = item.basePath ? pathname.startsWith(item.basePath) : false;
  const [manualOpen, setManualOpen] = useState(false);
  const open = manualOpen || routeOpen;

  return (
    <div className="sidebar-dropdown">
      <button
        className={open ? "sidebar-dropdown-btn active" : "sidebar-dropdown-btn"}
        type="button"
        onClick={() => setManualOpen(!manualOpen)}
        aria-expanded={open}
      >
        <span className="dropdown-title">
          <i className={item.icon} aria-hidden="true"></i>
          <span>{item.label}</span>
        </span>
        <i
          className={
            open
              ? "ti ti-chevron-right dropdown-chevron open"
              : "ti ti-chevron-right dropdown-chevron"
          }
          aria-hidden="true"
        ></i>
      </button>

      <div className={open ? "sidebar-dropdown-menu open" : "sidebar-dropdown-menu"}>
        <ul className="sidebar-dropdown-inner">
          {item.links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={pathname === link.href ? "active" : ""}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Sidebar({ open = false }) {
  const pathname = usePathname();
  const [scrolling, setScrolling] = useState(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    return () => clearTimeout(scrollTimeout.current);
  }, []);

  const handleScroll = () => {
    setScrolling(true);
    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => setScrolling(false), 700);
  };

  return (
    <aside className={open ? "sidebar open" : "sidebar"}>
      <div
        className={scrolling ? "sidebar-scroll scrolling" : "sidebar-scroll"}
        onScroll={handleScroll}
      >
        <nav className="sidebar-section" aria-label="Docs navigation">
          {TOP_SECTIONS.map((section) => (
            <SidebarSection
              key={section.label}
              section={section}
              pathname={pathname}
            />
          ))}

          {DROPDOWNS.map((item) => (
            <SidebarDropdown key={item.label} item={item} pathname={pathname} />
          ))}

          <SidebarSection section={BOTTOM_SECTION} pathname={pathname} />
        </nav>
      </div>

      <footer className="sidebar-footer">
        {FOOTER_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={pathname === link.href ? "active" : ""}
          >
            <i className={link.icon} aria-hidden="true"></i>
            <span>{link.label}</span>
          </Link>
        ))}
      </footer>
    </aside>
  );
}
