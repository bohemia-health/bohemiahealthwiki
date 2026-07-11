import { Onest, DM_Sans, DM_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  variable: "--next-font-heading",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--next-font-body",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--next-font-mono",
});

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
    <html
      lang="en"
      className={`${onest.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
        />
      </head>
      <body>
        <Navbar />
        <div className="container">
          <Sidebar />
          <main className="content">{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
