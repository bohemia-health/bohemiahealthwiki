import Link from "next/link";
import styles from "./page.module.scss";
import DocsOrbitGraphic from "@/components/DocsOrbitGraphic/DocsOrbitGraphic.js";

export default function GroupBuyFundamentalsPage() {
  return (
    <main className="content">
      <div className="breadcrumb">
        <a href="/">Docs</a>
        <span>{">"}</span>
        <span>Group Buys</span>
        <span>{">"}</span>
        <Link href="/group-buys/fundamentals">Overview</Link>
      </div>
      <section className="doc-page">
        <DocsOrbitGraphic />

        <div className={styles.card}>
          <h2>Group Buy</h2>
          <h3>/gru:p/baɪ/</h3>
          <p>
            A purchasing model where individuals pool their collective buying
            power to secure discounts or bring custom products to life.
          </p>
        </div>

        <h2>Group Buy vs Direct Sale</h2>
        <div className="comparisonGrid">
          <div className="card">
            <h3>Direct Sale</h3>
            <p>
              direct sales involve Vendor-2-Consumer sales, are faster to
              fulfill, and non dependent on a minimum order quantity
            </p>
          </div>

          <div className="card">
            <h3>Group Buy</h3>
            <p>
              pre-planned with guarantees based on the relationship established
              between the entity and vendor company
            </p>
          </div>
        </div>

        <div className="card">
          <h3>
            Group Buys hold <span className="highlight-text">more</span> weight
            during negotiation, ordering, and fulfillment secured through the
            vendor. This can include:
          </h3>
          <ul>
            <li>Requests for one complete batch of a particular peptide</li>
            <li>
              Customized peptide configurations (i.e., Cartalax 40mg, KPV 50mg,
              Retatrutide 100mg)
            </li>
            <li>
              Easily-identifiable or branded vial crimp/cap color combinations
            </li>
          </ul>
        </div>

        <h2>The Life Cycle of a Group Buy</h2>
        <ol>
          <li>
            A <span>Group Buy Organizer</span> reaches out to the{" "}
            <span>Vendor</span> based on group interest
          </li>
          <li>
            We verify <span>guarantees</span>, discuss capacity, negotiate
            pricing, and establish minimum order quantity
          </li>
          <li>The window of the Group Buy is confirmed</li>
          <li>Orders are collected</li>
          <li>The window closes and final numbers are reconciled</li>
          <li>
            An order sheet is written up with specifications of each item
            ordered alongside total quantity
          </li>
          <li>
            Production of each item commences, testing, shipping from the
            vendor, to the customer
          </li>
          <li>
            Any delays, shortages, address issues, and custom issues are handled
            by us
          </li>
        </ol>
      </section>
    </main>
  );
}
