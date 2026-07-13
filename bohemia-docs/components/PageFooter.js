"use client";

import { usePathname } from "next/navigation";
import meta from "@/components/page-meta.json";

const dateFormat = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

export default function PageFooter() {
  const pathname = usePathname();
  const entry = meta[pathname];
  if (!entry) return null;

  return (
    <footer className="doc-footer" title={`commit ${entry.sha}`}>
      Last updated {dateFormat.format(new Date(entry.updated))} · Rev{" "}
      {entry.rev}
    </footer>
  );
}
