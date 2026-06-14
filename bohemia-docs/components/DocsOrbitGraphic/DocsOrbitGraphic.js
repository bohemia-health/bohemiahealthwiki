// components/DocsOrbitGraphic.jsx

import styles from "./DocsOrbitGraphic.module.css";

export default function DocsOrbitGraphic() {
  return (
    <div className={styles.graphicWrap}>
      <svg
        className={styles.graphic}
        viewBox="0 0 1200 800"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Documentation orbit graphic"
      >
        <rect width="1200" height="800" fill="#171A21" />

        <circle
          cx="600"
          cy="400"
          r="250"
          fill="none"
          stroke="#2A2F3D"
          strokeWidth="3"
        />

        <circle
          cx="600"
          cy="400"
          r="130"
          fill="#1F232C"
          stroke="#2A2F3D"
          strokeWidth="2"
        />

        <line
          x1="600"
          y1="400"
          x2="600"
          y2="158"
          stroke="#9D8FFF"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <circle
          cx="600"
          cy="158"
          r="34"
          fill="#2A2F3D"
          stroke="#9D8FFF"
          strokeWidth="3"
        />

        <circle
          cx="842"
          cy="400"
          r="34"
          fill="#2A2F3D"
          stroke="#3D4252"
          strokeWidth="2"
        />

        <circle
          cx="600"
          cy="642"
          r="34"
          fill="#2A2F3D"
          stroke="#3D4252"
          strokeWidth="2"
        />

        <circle
          cx="358"
          cy="400"
          r="34"
          fill="#2A2F3D"
          stroke="#3D4252"
          strokeWidth="2"
        />

        <circle cx="600" cy="400" r="9" fill="#9D8FFF" />
      </svg>
    </div>
  );
}
