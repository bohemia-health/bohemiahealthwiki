import PageShell from "@/components/PageShell";
import { Card, CardGrid } from "@/components/Card";
import DocsOrbitGraphic from "@/components/DocsOrbitGraphic/DocsOrbitGraphic.js";

export const metadata = {
  title: "Group Buy Fundamentals — Bohemia Health Docs",
};

export default function GroupBuyFundamentalsPage() {
  return (
    <PageShell
      title="Group Buy Fundamentals"
    >
      <DocsOrbitGraphic />

      <Card variant="highlight" titleAs="h2" title="Group Buy">
        <p>
          <em>/gru:p/baɪ/</em> — a purchasing model where individuals pool
          their collective buying power to secure discounts or bring custom
          products to life.
        </p>
      </Card>

      <h2>Group Buy vs Direct Sale</h2>
      <CardGrid>
        <Card title="Direct Sale">
          <p>
            Direct sales involve vendor-to-consumer sales, are faster to
            fulfill, and are not dependent on a minimum order quantity.
          </p>
        </Card>
        <Card title="Group Buy">
          <p>
            Pre-planned with guarantees based on the relationship established
            between the entity and the vendor company.
          </p>
        </Card>
      </CardGrid>

      <Card title="Group Buys hold more weight during negotiation, ordering, and fulfillment. This can include:">
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
      </Card>

      <h2>The Life Cycle of a Group Buy</h2>
      <ol>
        <li>
          A Group Buy Organizer reaches out to the Vendor based on group
          interest
        </li>
        <li>
          We verify guarantees, discuss capacity, negotiate pricing, and
          establish minimum order quantity
        </li>
        <li>The window of the Group Buy is confirmed</li>
        <li>Orders are collected</li>
        <li>The window closes and final numbers are reconciled</li>
        <li>
          An order sheet is written up with specifications of each item ordered
          alongside total quantity
        </li>
        <li>
          Production of each item commences, testing, shipping from the vendor,
          to the customer
        </li>
        <li>
          Any delays, shortages, address issues, and custom issues are handled
          by us
        </li>
      </ol>
    </PageShell>
  );
}
