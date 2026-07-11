import Link from "next/link";

export default function ComingSoonNotice() {
  return (
    <div className="coming-soon">
      <i className="ti ti-pencil" aria-hidden="true"></i>
      <p className="coming-soon-title">This article is being written.</p>
      <p className="coming-soon-sub">
        Check back soon — or head back to the docs home.
      </p>
      <Link href="/" className="btn-accent">
        Back to Docs
      </Link>
    </div>
  );
}
