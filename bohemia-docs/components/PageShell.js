import TableOfContents from "@/components/TableOfContents";

export default function PageShell({ title, lede, children }) {
  return (
    <div className="doc-layout">
      <article className="doc-page">
        {title && (
          <header className="doc-header">
            <h1>{title}</h1>
            {lede && <p className="doc-lede">{lede}</p>}
          </header>
        )}
        {children}
      </article>

      <TableOfContents />
    </div>
  );
}
