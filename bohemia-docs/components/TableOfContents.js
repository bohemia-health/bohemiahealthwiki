"use client";

import { useEffect, useState } from "react";

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll(".doc-page h2, .doc-page h3"),
    );
    if (els.length < 2) return;

    const usedIds = new Set();
    els.forEach((el) => {
      const base = el.id || slugify(el.textContent);
      let id = base;
      let n = 2;
      while (usedIds.has(id)) id = `${base}-${n++}`;
      usedIds.add(id);
      el.id = id;
    });

    setHeadings(
      els.map((el) => ({
        id: el.id,
        text: el.textContent,
        level: el.tagName === "H2" ? 2 : 3,
      })),
    );

    const update = () => {
      // active section = last heading above the reading line; if the page
      // is scrolled to the bottom, the last section wins
      const line = 120;
      let current = els[0].id;
      for (const el of els) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
      }
      const doc = document.documentElement;
      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 2) {
        current = els[els.length - 1].id;
      }
      setActiveId(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (headings.length < 2) return null;

  return (
    <nav className="doc-toc" aria-label="On this page">
      <ul>
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={heading.level === 3 ? "doc-toc-sub" : undefined}
          >
            <a
              href={`#${heading.id}`}
              className={activeId === heading.id ? "active" : undefined}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
