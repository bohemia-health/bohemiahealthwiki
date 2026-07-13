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
  if (index === -1 || index === PAGE_ORDER.length - 1) return null;

  const next = PAGE_ORDER[index + 1];

  return (
    <Link href={next.href} className="doc-next">
      <span className="doc-next-label">Next</span>
      <span className="doc-next-title">
        {next.label}
        <i className="ti ti-chevron-right" aria-hidden="true"></i>
      </span>
    </Link>
  );
}
