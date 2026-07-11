import PageShell from "@/components/PageShell";
import ComingSoonNotice from "@/components/ComingSoonNotice";

export const metadata = { title: "Account Setup — Bohemia Health Docs" };

export default function AccountSetupPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Get Started" },
        { label: "Account Setup", href: "/account-setup" },
      ]}
      title="Account Setup"
      lede="Setting up your workers account with Bohemia Health is easy. We provide a guide to make it seamless."
    >
      <h2>Instructions</h2>
      <ComingSoonNotice />
    </PageShell>
  );
}
