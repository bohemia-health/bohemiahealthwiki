const ICONS = {
  danger: "ti-alert-octagon",
  warning: "ti-alert-triangle",
  info: "ti-info-circle",
};

export default function Callout({ variant = "info", children }) {
  return (
    <aside className={`callout callout--${variant}`} role="note">
      <i className={`ti ${ICONS[variant]}`} aria-hidden="true"></i>
      <div className="callout-body">{children}</div>
    </aside>
  );
}
