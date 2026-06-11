import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

// METADATA
export const metadata = {
  title: "Bohemia Health Docs",
  description:
    "Build a seamless end-to-end workflow through Bohemia Health's internal docs.",
  applicationName: "Bohemia Health™: A Biotechnology Company",
  openGraph: {
    title: "Bohemia Health™: A Biotechnology Company",
    description:
      "Removing Friction. Bohemia Health is a biotechnology company at the cutting-edge of peptide therapy and e-commerce.",
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
        />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Onest:wght@400;600;700&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <div className="container">
          <Sidebar />
          <main className="content">{children}</main>
        </div>
      </body>
    </html>
  );
}
