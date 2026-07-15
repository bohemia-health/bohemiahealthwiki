import Link from "next/link";
import PageShell from "@/components/PageShell";
import Callout from "@/components/Callout";

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
            check where your consumers already are (Such as, a poll, a form, or
            a pinned thread) and count the responses. Treat any opinion that
            does not come from a consumer as an assumption that still has to be
            proven. The interest check is what gives you the numbers, and if you
            don&apos;t have the numbers to back up your group buy, the group buy
            doesn&apos;t happen.
          </p>
        </li>

        <li>
          <h3>Write down what you learned</h3>
          <p>
            Research only counts if you can show it. Summarize your findings
            into a short thread or statement that the rest of the group buy is
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
            <Link href="#planning-and-setup">Planning &amp; Setup</Link>, the
            product list, and your marketing.
          </p>
        </li>

        <li>
          <h3>Decide: yes or no</h3>
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
            Skipping this gate doesn&apos;t speed anything up, it just moves the
            failure later, where it costs more.
          </p>
        </li>
      </ol>

      <h2 id="planning-and-setup">Planning &amp; Setup</h2>
      <p>
        {" "}
        Once you've completed your research, the work shifts from pinpointing
        demand to building your group buy. Each thing a participant sees, uses,
        or saves comes from this stage is uniquely built on the research you've
        collected.{" "}
      </p>

      <p>
        Whether you're new to organizing or you've been working them for years,
        finding the technology you need is an important first step. With so many
        technologies available to you, it's sometimes difficult to know where to
        start. The following topics offer a high-level view of the technologies
        available to you, and guidance about which technologies you might choose
        to solve particular problems.
      </p>

      <h3>Pricing and Profitability</h3>
      <p>
        The second most important thing of facilitating a group buy is
        considering whether the services a merchant provides has an equivalent
        value in sales. Too low in profits, and you're in the negative. Too
        high, and you'll barely pull in any sales.
      </p>

      <p>
        Rule of thumb, start by calculating the minimum order quantity provided
        by the vendor.
      </p>

      <h3>Choosing or building a form-building tool</h3>
      <p>
        Deciding between building an interface to receive or retrieve orders and
        using a web based form tool may be confusing. The difference is pure
        necessity. When choosing, ask yourself these three things:
      </p>

      <ul>
        <li>
          Do I have the skillset required to create a fully customized, fully
          integreted form?
        </li>
        <li>Is there enough time to develop this form?</li>
        <li>Would this form be what a participant expects?</li>
      </ul>
      <p>
        If you answered 'no' to any of these, you need to search for a web based
        form tool.
      </p>

      <ul>
        <li>
          <h4>
            <Link href="https://ezformz.net/">Ezformz</Link>
          </h4>
          <p>
            Ezformz is a free, web based survey and form building tool. Each
            form offers mobile friendly straightforward ways to build your form,
            and fetch only the data you need. They also offer features you'd
            expect, like duplicate tracking, order status, and integration with
            Google Sheets.
          </p>
        </li>
      </ul>
      <img
        src="/assets/ezformz-landing-page.png"
        alt="EZFormz landing page showing a mobile-friendly order form with products, quantities, and a subtotal"
        className="doc-figure"
        width={1785}
        height={1054}
      />

      <p>
        After you've chosen tool or built your framework, you can move on to
        what information should be collected on this form.
      </p>

      <h3>Design Checkout</h3>
      <p>
        Checkout records a transaction, sale, or agreement made between a seller
        and buyer. You can utilize prebuilt UI customized to your needs, third
        party web based tools, or an embedded form linked in your website.
      </p>

      <p>
        Bohemia lets merchants use whatever form, portal, or third party tool to
        create a checkout for buyers. Sensitive information should only include
        what's necessary to ship the buyer's order, such as:
      </p>

      <ul>
        <li>
          <p>First, last, middle names</p>
        </li>
        <li>
          <p>Username</p>
        </li>
        <li>
          <p>Home, Private, PO Box, or Private Mailbox Addresses (PMB)</p>
        </li>
        <li>
          <p>Email address</p>
        </li>
        <li>
          <p>Phone Number</p>
        </li>

        <li>
          <p>VAT/Tax ID information (for international orders)</p>
        </li>

        <li>
          <p>Method of Payment</p>
        </li>

        <li>
          <p>Payment Information</p>
        </li>
      </ul>

      <Callout variant="danger">
        <p>
          Privacy is a fundamental human right. It's also one of our core
          values. Users grant us access to personally identifiable information,
          such as names, addresses, and contact details. Only necessary
          information should be safeguarded and retained.
        </p>

        <p>
          View our{" "}
          <Link href="https://bhmhlth.com/privacy">privacy policy.</Link>
        </p>
      </Callout>

      <p>
        Checkout's should also include enough guidance and information for a
        user to make an informed decision. Products, descriptions, images, fees,
        and options should be clearly listed on the checkout form. The standard
        is displaying all instructions, requirements, terms, and conditions in
        an easily-readable, accessible format.
      </p>

      <Callout variant="warning">
        <p>
          Don't make the mistake of assuming users can understand products,
          amounts items, descriptions, terms, or conditions. When designing
          checkout, everything should be written with the assumption of 'holding
          the user's hand.'
        </p>
      </Callout>

      <p>
        The form, content, information, intake portal, and all required
        documentation, collectively the group buy documentation, is the single
        source of truth for your group buy. This is where guarantees,{" "}
        <Link href="/coming-soon/testing-overview">testing</Link> plans,
        timelines, and pricing live in a format participants can view, use, and
        save.
      </p>

      <h3>Guidance on Specifications</h3>
      <p>
        It's important when writing specifications that merchants adhere to
        market expectations. User's expect a standard, when unmet, can be
        particularly angsty. Avoid:
      </p>
      <ul className="list-avoid">
        <li>
          {/* Guidance 1 - Vagueness or Creating Confusion */}
          <p>Vague or confusing guarantees</p>
          <ul>
            <li>
              <p>
                "97% Purity and 95% Mass" when the &#123;vendor&#125; usually
                guarantees 99% purity and mass or higher"
              </p>
            </li>
            <li>
              <p>
                "&#123;vendor&#125; says since this is a custom-made batch, we
                are only guaranteed &#123;mass&#125;% and &#123;purity&#125;%."
              </p>
            </li>
          </ul>
        </li>

        {/* Guidance 2 - Incorrect Grammar, Writing Structure, or etc */}

        <li>
          <p>Poor sentence structure, grammar, or tone</p>
          <ul>
            <li>
              <p>"Testing Mass Purity Janoshik."</p>
            </li>
            <li>
              <p>
                "It is the last day of the buy get those final orders in by 3pm
                eastern, noon pacific!"
              </p>
            </li>

            <li>
              <p>
                "Please do not buy from us if you cannot read. I'm sick of this,
                do better!"
              </p>
            </li>
          </ul>
        </li>
      </ul>

      <h3>Announcements, Updates & Status Checks</h3>
      <p>
        Participants follow the status of a group buy through timely, accurate,
        and transparent{" "}
        <Link href="/coming-soon/public-updates">public updates</Link>. Plan
        where announcements will be posted and how often before the buy opens,
        not after.
      </p>
    </PageShell>
  );
}
