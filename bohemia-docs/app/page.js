export default function Page() {
  return (
    <>
      <div className="breadcrumb">
        <a href="/">Docs</a>
        <span>{">"}</span>
        <span>
          <a href="#">Get Started</a>
        </span>
      </div>

      <section className="hero">
        <h1>Bohemia Health Docs</h1>
        <p>
          Explore guides and tutorials to start building on Bohemia's platform
        </p>
        <section className="hero-btn-container">
          <a href="/" className="get-started-btn">
            Get started
            <i className="ti ti-arrow-narrow-right"></i>
          </a>
        </section>
      </section>
    </>
  );
}
