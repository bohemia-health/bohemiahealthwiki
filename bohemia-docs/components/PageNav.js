"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TOP_SECTIONS, DROPDOWNS } from "@/components/nav-data";

// sidebar reading order = page order
const PAGE_ORDER = [...TOP_SECTIONS, ...DROPDOWNS].flatMap(
  (section) => section.links,
);

export default function PageNav() {
  const pathname = usePathname();
  const index = PAGE_ORDER.findIndex((link) => link.href === pathname);
  if (index === -1) return null;

  const prev = index > 0 ? PAGE_ORDER[index - 1] : null;
  const next = index < PAGE_ORDER.length - 1 ? PAGE_ORDER[index + 1] : null;
  if (!prev && !next) return null;

  return (
    <nav className="doc-pagenav" aria-label="Page navigation">
      {prev && (
        <Link href={prev.href} className="doc-pagenav-card doc-prev">
          <span className="doc-pagenav-label">Previous</span>
          <span className="doc-pagenav-title">
            <i className="ti ti-chevron-left" aria-hidden="true"></i>
            {prev.label}
          </span>
        </Link>
      )}
      {next && (
        <Link href={next.href} className="doc-pagenav-card doc-next">
          <span className="doc-pagenav-label">Next</span>
          <span className="doc-pagenav-title">
            {next.label}
            <i className="ti ti-chevron-right" aria-hidden="true"></i>
          </span>
        </Link>
      )}
    </nav>
  );
}
