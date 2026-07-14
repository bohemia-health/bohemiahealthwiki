export const TOP_SECTIONS = [
  {
    label: "Get Started",
    links: [
      { label: "Overview", href: "/" },
      { label: "Account Setup", href: "/account-setup" },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    label: "Operate",
    links: [
      { label: "Terms of Use", href: "/coming-soon/terms-of-use" },
      { label: "Definitions", href: "/coming-soon/definitions" },
      { label: "Authentication", href: "/coming-soon/authentication" },
      { label: "Roles", href: "/coming-soon/roles" },
    ],
  },
];

export const DROPDOWNS = [
  {
    label: "Group Buys",
    icon: "ti ti-users",
    basePath: "/group-buys",
    links: [
      { label: "Fundamentals", href: "/group-buys/fundamentals" },
      { label: "Research", href: "/group-buys/research" },
      { label: "Planning & Setup", href: "/coming-soon/planning-and-setup" },
      { label: "Pricing & Profitability", href: "/coming-soon/pricing-and-profitability" },
      { label: "Vendors", href: "/coming-soon/group-buy-vendors" },
      { label: "Fulfillment", href: "/coming-soon/fulfillment" },
      { label: "Public Updates", href: "/coming-soon/public-updates" },
      { label: "Regulation, Restriction and Exclusions", href: "/coming-soon/regulation-restriction-and-exclusions" },
    ],
  },
  {
    label: "Vendors",
    icon: "ti ti-building-store",
    links: [
      { label: "Vendor Overview", href: "/coming-soon/vendor-overview" },
      { label: "Gray Market Vendors", href: "/coming-soon/gray-market-vendors" },
      { label: "Vendor Vetting", href: "/coming-soon/vendor-vetting" },
      { label: "Approved Vendors", href: "/coming-soon/approved-vendors" },
      { label: "No-Go Vendors", href: "/coming-soon/no-go-vendors" },
      { label: "Vendor Behavior Policy", href: "/coming-soon/vendor-behavior-policy" },
      { label: "Vendor Communication", href: "/coming-soon/vendor-communication" },
      { label: "Vendor Incident Log", href: "/coming-soon/vendor-incident-log" },
    ],
  },
  {
    label: "Order Management",
    icon: "ti ti-clipboard-check",
    links: [
      { label: "Order Intake", href: "/coming-soon/order-intake" },
      { label: "Order Statuses", href: "/coming-soon/order-statuses" },
      { label: "Order Changes", href: "/coming-soon/order-changes" },
      { label: "Customer Holds", href: "/coming-soon/customer-holds" },
      { label: "Add-Ons", href: "/coming-soon/add-ons" },
      { label: "No Split Shipping", href: "/coming-soon/no-split-shipping" },
      { label: "No Split Location Fulfillment", href: "/coming-soon/no-split-location-fulfillment" },
      { label: "Shipping Readiness", href: "/coming-soon/shipping-readiness" },
      { label: "Order Reconciliation", href: "/coming-soon/order-reconciliation" },
    ],
  },
  {
    label: "Inventory",
    icon: "ti ti-package",
    links: [
      { label: "Inventory Intake", href: "/coming-soon/inventory-intake" },
      { label: "Inventory Verification", href: "/coming-soon/inventory-verification" },
      { label: "Shortages", href: "/coming-soon/shortages" },
      { label: "Missing Kits", href: "/coming-soon/missing-kits" },
      { label: "Broken Items", href: "/coming-soon/broken-items" },
      { label: "Extra Kits", href: "/coming-soon/extra-kits" },
      { label: "Bulk Packing Lists", href: "/coming-soon/bulk-packing-lists" },
      { label: "Final Reconciliation", href: "/coming-soon/final-reconciliation" },
    ],
  },
  {
    label: "3rd Party Testing",
    icon: "ti ti-flask",
    links: [
      { label: "Testing Overview", href: "/coming-soon/testing-overview" },
      { label: "COAs", href: "/coming-soon/coas" },
      { label: "Sample Selection", href: "/coming-soon/sample-selection" },
      { label: "Testing Timelines", href: "/coming-soon/testing-timelines" },
      { label: "Failed Results", href: "/coming-soon/failed-results" },
      { label: "Retesting", href: "/coming-soon/retesting" },
      { label: "COA Requests", href: "/coming-soon/coa-requests" },
      { label: "Testing Communication Rules", href: "/coming-soon/testing-communication-rules" },
    ],
  },
  {
    label: "Customer Support",
    icon: "ti ti-message-circle",
    links: [
      { label: "Support Workflow", href: "/coming-soon/support-workflow" },
      { label: "Template Responses", href: "/coming-soon/template-responses" },
      { label: "Address Changes", href: "/coming-soon/address-changes" },
      { label: "Missing Items", href: "/coming-soon/missing-items" },
      { label: "Impatient Customers", href: "/coming-soon/impatient-customers" },
      { label: "Status Update Requests", href: "/coming-soon/status-update-requests" },
      { label: "COA Requests", href: "/coming-soon/coa-requests" },
      { label: "Behavior Policy", href: "/coming-soon/behavior-policy" },
      { label: "Incident Examples", href: "/coming-soon/incident-examples" },
      { label: "Escalation Rules", href: "/coming-soon/escalation-rules" },
    ],
  },
];

export const BOTTOM_SECTION = {
  label: "Trust & Safety",
  links: [
    { label: "International Orders", href: "/coming-soon/international-orders" },
    { label: "GB Issues", href: "/coming-soon/group-buy-issues" },
    { label: "Guarantees", href: "/coming-soon/guarantees" },
    { label: "Reputation", href: "/coming-soon/reputation" },
  ],
};

export const FOOTER_LINKS = [
  { label: "Docs", href: "/", icon: "ti ti-book-2" },
  { label: "Developers", href: "/coming-soon/developers", icon: "ti ti-code" },
  { label: "Support", href: "/support", icon: "ti ti-lifebuoy" },
];

const TITLE_OVERRIDES = {
  coas: "COAs",
  "coa-requests": "COA Requests",
  "no-go-vendors": "No-Go Vendors",
  "log-in": "Log In",
};

export function titleFromSlug(slug) {
  let clean = slug;
  try {
    clean = decodeURIComponent(slug);
  } catch {
    /* malformed percent-encoding: fall back to the raw slug */
  }
  if (TITLE_OVERRIDES[clean]) return TITLE_OVERRIDES[clean];
  return clean
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Breadcrumb trail for a pathname, excluding the root "Docs" crumb
 * (the navbar renders that itself). Returns [{ label, href? }, ...].
 */
export function breadcrumbsForPath(pathname) {
  if (pathname === "/") {
    return [{ label: "Get Started" }];
  }

  for (const section of [...TOP_SECTIONS, BOTTOM_SECTION]) {
    for (const link of section.links) {
      if (link.href === pathname) {
        return [{ label: section.label }, { label: link.label, href: link.href }];
      }
    }
  }

  for (const item of DROPDOWNS) {
    for (const link of item.links) {
      if (link.href === pathname) {
        return [{ label: item.label }, { label: link.label, href: link.href }];
      }
    }
  }

  for (const link of FOOTER_LINKS) {
    if (link.href === pathname) {
      return [{ label: link.label, href: link.href }];
    }
  }

  if (pathname.startsWith("/coming-soon/")) {
    const slug = pathname.slice("/coming-soon/".length);
    return [{ label: titleFromSlug(slug) }];
  }

  return [];
}
