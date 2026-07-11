"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { breadcrumbsForPath } from "@/components/nav-data";

export default function Navbar({ menuOpen, onMenuToggle }) {
  const pathname = usePathname();
  const crumbs = breadcrumbsForPath(pathname);

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
        <nav className="navbar-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Docs</Link>
          {crumbs.map((crumb) => (
            <span key={crumb.label} className="navbar-breadcrumb-item">
              <i className="ti ti-chevron-right" aria-hidden="true"></i>
              {crumb.href ? (
                <Link href={crumb.href}>{crumb.label}</Link>
              ) : (
                <span>{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>

      <ul>
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
