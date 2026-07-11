import Link from "next/link";
import { Card, CardGrid } from "@/components/Card";

export default function Page() {
  return (
    <>
      <section className="hero">
        <img src="/assets/banner-dark.png" alt="" className="banner" />
        <div className="hero-text">
          <h1>Bohemia Health Docs</h1>
          <p>
            Explore guides and tutorials to start building on Bohemia&apos;s platform
          </p>
          <div className="hero-btn-container">
            <Link href="/account-setup" className="get-started-btn">
              Get started
              <i className="ti ti-arrow-narrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-cards" aria-label="Browse the docs">
        <h2 className="home-cards-title">Browse the docs</h2>
        <CardGrid>
          <Card titleAs="h3" title="Get Started" href="/account-setup">
            <p>Set up your account and learn how the platform works.</p>
          </Card>
          <Card titleAs="h3" title="Group Buys" href="/group-buys/fundamentals">
            <p>How group buys work, from research to fulfillment.</p>
          </Card>
          <Card titleAs="h3" title="Resources" href="/resources">
            <p>Guides, references, and tools for members.</p>
          </Card>
          <Card titleAs="h3" title="Support" href="/support">
            <p>Get help with orders, shipping, and everything in between.</p>
          </Card>
        </CardGrid>
      </section>
    </>
  );
}
