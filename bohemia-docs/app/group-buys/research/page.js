import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata = {
  title: "User Research — Bohemia Health Docs",
};

export default function GroupBuyResearchPage() {
  return (
    <PageShell title="User Research">
      <p>
        When organizing a <Link href="/group-buys/fundamentals">group buy</Link>
        , it&apos;s important to start by understanding your end goal and your
        target consumers. Failing to align on a single core purpose can make
        your setup appear unstructured and disorganized. If you don&apos;t
        understand your consumers, who they are or what they want, you may wind
        up building the wrong thing.
      </p>

      <img
        src="/assets/yes-no-graphic.png"
        alt="Two decision states: a no-go marked with an X and a go marked with a checkmark"
        className="doc-figure"
        width={960}
        height={600}
      />

      <h2>Understanding Services and Needs</h2>
      <p>
        A group buy provides a service to the consumer. Consumers use group buys
        to help them get things done (for example, receiving products directly
        to their door,{" "}
        <Link href="/coming-soon/testing-overview">third-party testing</Link> of
        a batch, or lowering the risk of delays caused by reships). These are
        their needs, and a consumer is searching for a service that satisfies
        them.
      </p>

      <p>Group buys designed around consumers and their needs:</p>
      <ul>
        <li>Are more likely to succeed</li>
        <li>Have returning customers</li>
        <li>
          Cost less to operate by reducing the time and money spent resolving
          problems
        </li>
      </ul>

      <h2>Researching User Needs</h2>
      <p>
        Once you understand what your consumers need, the next step is
        confirming the market can meet it.
      </p>

      <ol>
        <li>
          <h3>Build on what people know</h3>
          <p>
            Rather than bidding on an exhaustive list of every possible product,
            focus on the most relevant ones. You can use campaigns launched by
            competitors, social media platforms, and community forums. Gaps here
            tell you where demand may be building. By focusing on relevance and
            popularity, you create the strongest intent signal you can get.
          </p>
        </li>

        <li>
          <h3>Think like your customers</h3>
          <p>
            Consider the needs people may have to consider a group buy like
            yours. Consumers may want to secure a good deal, get a product
            quickly, or ensure that testing is extensive and transparent.
          </p>
        </li>

        <li>
          <h3>Ask your consumers directly</h3>
          <p>
            Signals and educated guesses only get you so far. Post an interest
            check where your consumers already are (a poll, a form, or a pinned
            thread) and count the responses. Treat any opinion that does not
            come from a consumer as an assumption that still has to be proven.
            The interest check is what gives you the numbers, and if you
            don&apos;t have the numbers to back up your group buy, the group
            buy doesn&apos;t happen.
          </p>
        </li>

        <li>
          <h3>Write down what you learned</h3>
          <p>
            Research only counts if you can show it. Summarize your findings
            into a short demand statement that the rest of the group buy is
            built on:
          </p>
          <p>
            <em>
              Consumers need [product] at [dose or format] so that [outcome],
              backed by [evidence].
            </em>
          </p>
          <p>
            If you can&apos;t fill in every blank, you aren&apos;t done
            researching. This statement becomes the foundation for{" "}
            <Link href="/coming-soon/planning-and-setup">
              Planning &amp; Setup
            </Link>
            , the product list, and your marketing.
          </p>
        </li>

        <li>
          <h3>Decide: go or no-go</h3>
          <p>
            This is the gate every group buy must pass before planning begins.
            Move forward only when all three are true:
          </p>
          <ul>
            <li>
              <strong>Demand</strong> — your interest check cleared the minimum
              numbers
            </li>
            <li>
              <strong>Product</strong> — the product can be third-party tested
              and doesn&apos;t conflict with{" "}
              <Link href="/coming-soon/regulation-restriction-and-exclusions">
                Regulation, Restriction and Exclusions
              </Link>
            </li>
            <li>
              <strong>Supply</strong> — at least one credible{" "}
              <Link href="/coming-soon/vendor-vetting">vendor</Link> can meet
              the spec at volume
            </li>
          </ul>
          <p>
            If any of these are unmet, park the buy or keep researching.
            Skipping this gate doesn&apos;t speed anything up, it just moves
            the failure later, where it costs more.
          </p>
        </li>
      </ol>
    </PageShell>
  );
}
