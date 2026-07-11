import PageShell from "@/components/PageShell";
import ComingSoonNotice from "@/components/ComingSoonNotice";

export const metadata = { title: "Resources — Bohemia Health Docs" };

export default function ResourcesPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Get Started" },
        { label: "Resources", href: "/resources" },
      ]}
      title="Resources"
      lede="Guides, references, and tools for navigating Bohemia Health group buys."
    >
      <ComingSoonNotice />
    </PageShell>
  );
}
