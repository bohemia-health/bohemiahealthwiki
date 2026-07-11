import Link from "next/link";

export default function PageShell({ breadcrumbs = [], title, lede, children }) {
  return (
    <>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Docs</Link>
        {breadcrumbs.map((crumb) => (
          <span key={crumb.label} className="breadcrumb-item">
            <i className="ti ti-chevron-right" aria-hidden="true"></i>
            {crumb.href ? (
              <Link href={crumb.href}>{crumb.label}</Link>
            ) : (
              <span>{crumb.label}</span>
            )}
          </span>
        ))}
      </nav>
      <article className="doc-page">
        {title && (
          <header className="doc-header">
            <h1>{title}</h1>
            {lede && <p className="doc-lede">{lede}</p>}
          </header>
        )}
        {children}
      </article>
    </>
  );
}
