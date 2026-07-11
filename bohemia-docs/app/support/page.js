import PageShell from "@/components/PageShell";
import ComingSoonNotice from "@/components/ComingSoonNotice";

export const metadata = { title: "Support — Bohemia Health Docs" };

export default function SupportPage() {
  return (
    <PageShell
      title="Support"
      lede="How to get help with orders, shipping, and everything in between."
    >
      <ComingSoonNotice />
    </PageShell>
  );
}
