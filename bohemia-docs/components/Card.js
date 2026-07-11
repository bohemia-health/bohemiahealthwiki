import Link from "next/link";

export function Card({
  variant = "default",
  title,
  titleAs: TitleTag = "h3",
  href,
  children,
}) {
  const className = `card card--${variant}`;
  const body = (
    <>
      {title && <TitleTag className="card-title">{title}</TitleTag>}
      <div className="card-body">{children}</div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${className} card--link`}>
        {body}
        <i className="ti ti-arrow-narrow-right card-arrow" aria-hidden="true"></i>
      </Link>
    );
  }
  return <div className={className}>{body}</div>;
}

export function CardGrid({ children }) {
  return <div className="card-grid">{children}</div>;
}
