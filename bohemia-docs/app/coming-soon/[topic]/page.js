import PageShell from "@/components/PageShell";
import ComingSoonNotice from "@/components/ComingSoonNotice";
import { titleFromSlug } from "@/components/nav-data";

export async function generateMetadata({ params }) {
  const { topic } = await params;
  return { title: `${titleFromSlug(topic)} — Bohemia Health Docs` };
}

export default async function ComingSoonPage({ params }) {
  const { topic } = await params;
  const title = titleFromSlug(topic);

  return (
    <PageShell title={title}>
      <ComingSoonNotice />
    </PageShell>
  );
}
