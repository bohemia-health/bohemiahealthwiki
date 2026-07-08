// components/GroupBuyLifecycleGraphic/GroupBuyLifecycleGraphic.jsx

"use client";

import { useState } from "react";
import styles from "./DocsOrbitGraphic.module.scss";

const phases = [
  {
    num: "01",
    title: "Research",
    desc: "Survey member demand, vet the compound, and confirm a supplier can meet spec at volume.",
    center: [320, 92],
    line: [320, 134, 320, 224],
  },
  {
    num: "02",
    title: "Negotiate",
    desc: "Lock pricing, MOQs, and delivery windows with the shortlisted supplier before committing.",
    center: [548, 320],
    line: [506, 320, 416, 320],
  },
  {
    num: "03",
    title: "Order",
    desc: "Place the confirmed order, collect payment from members, and track fulfillment milestones.",
    center: [320, 548],
    line: [320, 506, 320, 416],
  },
  {
    num: "04",
    title: "Fulfill",
    desc: "Receive, quality-check, and dispatch to members; close the batch and archive the COA.",
    center: [92, 320],
    line: [134, 320, 224, 320],
  },
];

const nodePositions = [
  { top: 50, left: 278 },
  { top: 278, left: 506 },
  { top: 506, left: 278 },
  { top: 278, left: 50 },
];

export default function GroupBuyLifecycleGraphic() {
  const [active, setActive] = useState(0);

  const phase = phases[active];
  const [glowCX, glowCY] = phase.center;
  const [lineX1, lineY1, lineX2, lineY2] = phase.line;

  return (
    <section className={styles.wrapper}>
      <div className={styles.orbit}>
        <svg
          className={styles.svg}
          viewBox="0 0 640 640"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="320"
            cy="320"
            r="290"
            stroke="rgba(245,246,248,0.03)"
            strokeWidth="1"
          />

          <circle
            cx="320"
            cy="320"
            r="228"
            stroke="rgba(245,246,248,0.10)"
            strokeWidth="1"
            strokeDasharray="2 7"
          />

          <circle cx={glowCX} cy={glowCY} r="68" fill="rgba(107,91,255,0.07)" />

          <circle
            cx="320"
            cy="320"
            r="142"
            stroke="rgba(107,91,255,0.07)"
            strokeWidth="1"
          />

          <circle cx="320" cy="320" r="120" fill="rgba(107,91,255,0.05)" />
          <circle cx="320" cy="320" r="104" fill="rgba(107,91,255,0.06)" />

          <circle
            cx="320"
            cy="320"
            r="96"
            fill="#191D28"
            stroke="rgba(157,143,255,0.18)"
            strokeWidth="1"
          />

          <line
            x1={lineX1}
            y1={lineY1}
            x2={lineX2}
            y2={lineY2}
            stroke="rgba(157,143,255,0.48)"
            strokeWidth="1.5"
          />

          <circle cx={lineX2} cy={lineY2} r="3" fill="#9D8FFF" />
        </svg>

        {phases.map((item, index) => (
          <button
            key={item.num}
            type="button"
            className={`${styles.node} ${
              active === index ? styles.activeNode : ""
            }`}
            style={{
              top: `${nodePositions[index].top}px`,
              left: `${nodePositions[index].left}px`,
            }}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
          >
            <span className={styles.nodeNumber}>{item.num}</span>
            <span className={styles.nodeName}>{item.title}</span>
          </button>
        ))}

        <div className={styles.centerPanel}>
          <div className={styles.phaseLabel}>Phase {phase.num} / 4</div>
          <div className={styles.phaseTitle}>{phase.title}</div>
          <div className={styles.phaseDesc}>{phase.desc}</div>
        </div>
      </div>
    </section>
  );
}
