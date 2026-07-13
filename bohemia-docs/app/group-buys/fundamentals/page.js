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
        Learn the fundamentals in how group orders are researched, made, and ran
        all through one platform. Only system admin can create new group buys.
        Click on the orbital to view each phase's scope.
      </p>
      <DocsOrbitGraphic />

      <h2>Group Buy Concepts</h2>
      <p>
        Group Buys are an organized event or coordinated effort in which a group
        of multiple individuals, or group buy organizer(s) (GBO) negotiate
        wholesale pricing on an item or set of items. They combine their
        singular purchasing power so that the vendor can provide discounts,
        manufacture a customized formulation, or aquire the item under terms
        that would not normally be available to individual clientele.
      </p>

      <p>
        Running a group buy is not simple, it requires effort on the part of the
        organizers and the participants taking place within the group buy.
        Because of this, there are caveats that must be implemented to ensure
        the absolute highest possible success for a group buy.
      </p>

      <p>This takes place within the four phases:</p>
      <table>
        <thead>
          <tr>
            <th>Phase</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Research</td>
            <td>
              Survey member demand, vet the compound, and confirm a supplier
              can meet spec at volume.
            </td>
          </tr>
          <tr>
            <td>Negotiate</td>
            <td>
              Lock pricing, MOQs, and delivery windows with the shortlisted
              supplier before committing.
            </td>
          </tr>
          <tr>
            <td>Order</td>
            <td>
              Place the confirmed order, collect payment from members, and
              track fulfillment milestones.
            </td>
          </tr>
          <tr>
            <td>Fulfill</td>
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
        Pre-planned with guarantees based on the relationship established
        between the entity and the vendor company.
      </p>

      <p>
        Group Buys hold more weight during negotiation, ordering, and
        fulfillment. This can include:
      </p>
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
