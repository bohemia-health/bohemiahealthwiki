import PageShell from "@/components/PageShell";
import ComingSoonNotice from "@/components/ComingSoonNotice";

const TITLE_OVERRIDES = {
  coas: "COAs",
  "coa-requests": "COA Requests",
  "no-go-vendors": "No-Go Vendors",
  "log-in": "Log In",
};

function titleFromSlug(slug) {
  const clean = decodeURIComponent(slug);
  if (TITLE_OVERRIDES[clean]) return TITLE_OVERRIDES[clean];
  return clean
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }) {
  const { topic } = await params;
  return { title: `${titleFromSlug(topic)} — Bohemia Health Docs` };
}

export default async function ComingSoonPage({ params }) {
  const { topic } = await params;
  const title = titleFromSlug(topic);

  return (
    <PageShell breadcrumbs={[{ label: title }]} title={title}>
      <ComingSoonNotice />
    </PageShell>
  );
}
