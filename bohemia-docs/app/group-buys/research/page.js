import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata = {
  title: "User Research — Bohemia Health Docs",
};

export default function GroupBuyResearchPage() {
  return (
    <PageShell title="User Research">
      <p>
        When organizing a{" "}
        <Link href="/group-buys/fundamentals">group buy</Link>, it&apos;s
        important to start by understanding your end goal and your target
        consumers. Failing to align on a single core purpose can make your
        setup appear unstructured and disorganized. If you don&apos;t
        understand your consumers — who they are or what they want — you may
        wind up building the wrong thing.
      </p>

      <h2>Understanding Services and Needs</h2>
      <p>
        A group buy provides a service to the consumer. Consumers use group
        buys to help them get things done — for example, receiving products
        directly to their door,{" "}
        <Link href="/coming-soon/testing-overview">third-party testing</Link>{" "}
        of a batch, or lowering the risk of delays caused by reships. These
        are their needs, and a consumer is searching for a service that
        satisfies them.
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
    </PageShell>
  );
}
