import Link from "next/link";
import PageShell from "@/components/PageShell";
import Callout from "@/components/Callout";
import DocsOrbitGraphic from "@/components/DocsOrbitGraphic/DocsOrbitGraphic.js";

export const metadata = {
  title: "Group Buy Fundamentals — Bohemia Health Docs",
};

export default function GroupBuyFundamentalsPage() {
  return (
    <PageShell title="Group Buy Fundamentals">
      <p>
        Learn the fundamentals of how group orders are researched, made, and
        run — all through one platform. Only system admins can create new
        group buys. Select a phase on the orbital to view its scope.
      </p>
      <DocsOrbitGraphic />

      <h2>Group Buy Concepts</h2>
      <p>
        A group buy is an organized, coordinated effort in which multiple
        individuals, led by one or more group buy organizers (GBOs), negotiate
        wholesale pricing on an item or set of items. Participants combine
        their purchasing power so that the vendor can provide discounts,
        manufacture a customized formulation, or acquire the item under terms
        that would not normally be available to individual clientele.
      </p>

      <p>
        Running a group buy is not simple — it requires effort from both the
        organizers and the participants. Because of this, there are safeguards
        that must be in place to give every group buy the highest possible
        chance of success.
      </p>

      <p>The work breaks down into four phases:</p>
      <table>
        <thead>
          <tr>
            <th>Phase</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link href="/coming-soon/group-buy-research">Research</Link>
            </td>
            <td>
              Survey member demand, vet the compound, and confirm a supplier
              can meet spec at volume.
            </td>
          </tr>
          <tr>
            <td>
              <Link href="/coming-soon/pricing-and-profitability">
                Negotiate
              </Link>
            </td>
            <td>
              Lock pricing, MOQs, and delivery windows with the shortlisted
              supplier before committing.
            </td>
          </tr>
          <tr>
            <td>
              <Link href="/coming-soon/order-intake">Order</Link>
            </td>
            <td>
              Place the confirmed order, collect payment from members, and
              track fulfillment milestones.
            </td>
          </tr>
          <tr>
            <td>
              <Link href="/coming-soon/fulfillment">Fulfill</Link>
            </td>
            <td>
              Receive, quality-check, and dispatch to members; close the batch
              and archive the COA.
            </td>
          </tr>
        </tbody>
      </table>

      <Callout variant="warning">
        <p>
          A common misconception in this model is where the organizer and/or
          participants begin to treat a group buy as a retail sale. The
          distinction here is that a group buy is not a retail sale or
          transaction. While the cost is lower, the risk is much higher than a
          regular sale with stock on-hand. Ensure that you, and the
          participants understand the difference. This will save you much time
          in the future.
        </p>
      </Callout>

      <h2>Group Buy vs Direct Sale</h2>
      <h3>Direct Sale</h3>
      <p>
        Direct sales involve vendor-to-consumer sales, are faster to fulfill,
        and are not dependent on a minimum order quantity.
      </p>
      <h3>Group Buy</h3>
      <p>
        Group buys are pre-planned, with guarantees based on the relationship
        established between the entity and the{" "}
        <Link href="/coming-soon/vendor-overview">vendor company</Link>.
      </p>

      <p>
        Group Buys hold more weight during negotiation, ordering, and
        fulfillment. This can include:
      </p>
      <ul>
        <li>Requests for one complete batch of a particular peptide</li>
        <li>
          Customized peptide configurations (e.g., Cartalax 40mg, KPV 50mg,
          Retatrutide 100mg)
        </li>
        <li>
          Easily-identifiable or branded vial crimp/cap color combinations
        </li>
      </ul>

      <h2>The Life Cycle of a Group Buy</h2>
      <ol>
        <li>
          A Group Buy Organizer reaches out to the{" "}
          <Link href="/coming-soon/vendor-overview">Vendor</Link> based on
          group interest
        </li>
        <li>
          We verify guarantees, discuss capacity, negotiate pricing, and
          establish the minimum order quantity (MOQ)
        </li>
        <li>The window of the Group Buy is confirmed</li>
        <li>Orders are collected</li>
        <li>The window closes and final numbers are reconciled</li>
        <li>
          An order sheet is written up with specifications of each item ordered
          alongside total quantities
        </li>
        <li>
          Production of each item commences, followed by testing and shipping
          from the vendor to the customer
        </li>
        <li>
          Any delays, shortages, address issues, and customs issues are
          handled by us
        </li>
      </ol>
    </PageShell>
  );
}
