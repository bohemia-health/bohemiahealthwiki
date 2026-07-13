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

      <h2>Group Buy vs. Direct Sale</h2>
      <h3>Group Buy</h3>
      <p>
        Essentially, this is a preorder. The planning, setup, marketing,
        product list,{" "}
        <Link href="/coming-soon/testing-overview">testing</Link>, and
        everything in between are organized by the group or the group buy
        organizer. Most of the time, the marketing and product list are
        based on{" "}
        <Link href="/coming-soon/group-buy-research">research</Link>{" "}
        facilitated by those running the group buy. The demand drives the
        product list, testing, pricing, and everything else. If you don&apos;t
        have the numbers to back up your group buy, then the group buy
        doesn&apos;t happen. Point blank. The participants fund the group buy
        and line your pockets with the padded profit margin.
      </p>

      <h3>Direct Sale</h3>
      <p>
        This is a financial transaction based on the qualities of the
        product(s) the seller — potentially you, or Bohemia — owns. The stock
        is on hand, with or without testing, at a set price. There is less
        waiting, less risk, and much less work than running an entire group
        buy.
      </p>
      <p>
        Here, Bohemia has already offloaded most of the stress points for the
        average consumer. They do not have to wait for stock to land, for
        testing, or for the vendor to fulfill their end of the bargain. All of
        this has been{" "}
        <Link href="/coming-soon/vendor-vetting">vetted</Link>, verified, and
        confirmed by Bohemia.
      </p>

      <p>
        Group Buys hold more weight during negotiation, ordering, and
        fulfillment. This can include:
      </p>
      <ul>
        <li>Requests for one complete batch of a particular peptide</li>
        <li>
          Customized peptide configurations (e.g., KPV 50mg, Retatrutide
          100mg)
        </li>
        <li>
          Easily-identifiable or branded vial crimp/cap color combinations
        </li>
      </ul>

      <p>
        With both models, success depends on Bohemia&apos;s current
        reputation. Our reputation is what allows us to facilitate large group
        buys, sell multiple peptide lines, and create large custom group buys
        — such as the Cartalax 40mg group buy with Uther.
      </p>

      <h2>Organizer Responsibilities</h2>
      <p>
        Regardless of the model, responsibilities within a group buy should be
        clear from the beginning to prevent potential role overlap.
      </p>
      <p>
        As a group buy organizer, your role includes all or most of the
        following:
      </p>
      <ul>
        <li>
          Organizing, planning, and setting up the group buy form, content,
          information, intake portal, and all required documentation —
          collectively, the group buy documentation — in a convenient, easily
          accessible format for participants to view, use, and save
        </li>
        <li>
          Providing timely, accurate, and transparent{" "}
          <Link href="/coming-soon/public-updates">public updates</Link> and
          announcements regarding the status of a group buy
        </li>
        <li>
          Communicating with and vetting the supplier(s) or vendor(s)
          regarding guarantees, product availability, product lists,
          quantities, and turnaround speeds
        </li>
        <li>
          Upholding guarantees, standards, and warranties initially provided
          to vendors within the guidelines established in the group buy
          documentation
        </li>
        <li>
          Obtaining a vial donor or providing a vial for third-party
          independent testing
        </li>
        <li>
          Sending the vial(s) to a third-party independent lab for testing, as
          established in the group buy documentation
        </li>
        <li>
          Communicating with and vetting the third-party laboratories used for
          independent testing of products listed in the group buy
          documentation
        </li>
        <li>
          Uploading, posting, or archiving all third-party{" "}
          <Link href="/coming-soon/coas">test reports</Link>, documents, and
          related content for items sent for testing by the Organizer
        </li>
        <li>
          Fulfilling and issuing all valid orders made during the group buy
          window
        </li>
        <li>
          Verifying{" "}
          <Link href="/coming-soon/missing-items">
            missing, broken, or damaged item claims
          </Link>{" "}
          made by participants
        </li>
        <li>Replacing missing items in a participant&apos;s order</li>
        <li>
          Accommodating requests made by participants within reasonable limits
          and boundaries
        </li>
      </ul>

      <Callout variant="info">
        <p>
          Bohemia attempts to accommodate all requests made by participants.
          However, the following cannot be honored: vacation holds, time
          constraints, or direct shipping requests, unless offered generally
          or available in the participant&apos;s specific region. See{" "}
          <Link href="/coming-soon/regulation-restriction-and-exclusions">
            Regulation, Restriction and Exclusions
          </Link>{" "}
          for more information.
        </p>
      </Callout>

      <h3>Limitations of Liability</h3>
      <p>
        On occasion, participants may be uncertain about what a group buy
        organizer should or should not be held liable for. It is imperative
        that this confusion is corrected. Group buy organizers should not be
        held liable for:
      </p>
      <ul>
        <li>
          Production, customs, shipping, receiving, or processing timelines,
          timeframes, speeds, or delays
        </li>
        <li>
          Vendor, lab, or other third-party announcements, behavior,
          conflicts, or actions
        </li>
        <li>
          Test results — whether above or below the guarantees, warranties, or
          representations stated in the group buy documentation
        </li>
      </ul>

      <h2>The Life Cycle of a Group Buy</h2>
      <ol>
        <li>
          The Organizer gauges interest based on environmental demand,
          requests, and internal needs. Interest may be informed by prior
          successes, market needs, member requests, or a company restock.
        </li>
        <li>
          The Organizer reaches out to the{" "}
          <Link href="/coming-soon/vendor-overview">vendor</Link> with a
          request for pricing on specific items or a specific configuration.
        </li>
        <li>
          The Organizer creates an intake form and curates a portal, link, or
          web page where participants can place orders within the specified
          guidelines and timeframe.
        </li>
        <li>
          Participants place orders through the intake form, portal, link, or
          web page until the specified order amount or guideline is met.
        </li>
      </ol>

      <Callout variant="info">
        <p>
          If a guideline or order amount is not met within the specified
          window of a group buy, the buy may not be able to proceed as
          planned. See{" "}
          <Link href="/coming-soon/exceptions">Exceptions</Link> for guidance
          on how to proceed.
        </p>
      </Callout>

      <ol start={5}>
        <li>
          Once the deadline or order amount is met, the Organizer places the
          order with the vendor.
        </li>
        <li>
          Items are received in shipments, and the{" "}
          <Link href="/coming-soon/fulfillment">fulfillment</Link> phase
          begins.
        </li>
        <li>
          The Organizer begins sending vials for testing — where testing is
          included as a{" "}
          <Link href="/coming-soon/guarantees">guarantee</Link> — shipping
          orders to participants, and fulfilling the group buy model.
        </li>
        <li>
          Once all guarantees, warranties, representations, and orders have
          been fulfilled, the group buy is considered post-mortem. The topic
          is marked as completed, closed, and archived for viewing and
          informational purposes only.
        </li>
      </ol>
    </PageShell>
  );
}
