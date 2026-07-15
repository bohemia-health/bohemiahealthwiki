"use client";

import { useState } from "react";
import styles from "./BreakEvenCalc.module.scss";

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const FIELDS = [
  { key: "moq", label: "Minimum order quantity", suffix: "units", min: 1 },
  { key: "unitCost", label: "Vendor cost per unit", suffix: "$", min: 0 },
  { key: "salePrice", label: "Sale price per unit", suffix: "$", min: 0 },
  { key: "fixedCosts", label: "Fixed costs (testing, supplies)", suffix: "$", min: 0 },
];

export default function BreakEvenCalc() {
  const [values, setValues] = useState({
    moq: 100,
    unitCost: 8,
    salePrice: 14,
    fixedCosts: 250,
  });

  const set = (key) => (e) => {
    const n = Number(e.target.value);
    setValues((v) => ({ ...v, [key]: Number.isFinite(n) ? n : 0 }));
  };

  const { moq, unitCost, salePrice, fixedCosts } = values;
  const totalCost = moq * unitCost + fixedCosts;
  const breakEven = salePrice > 0 ? Math.ceil(totalCost / salePrice) : null;
  const revenueAtMoq = moq * salePrice;
  const profitAtMoq = revenueAtMoq - totalCost;
  const margin = revenueAtMoq > 0 ? profitAtMoq / revenueAtMoq : null;

  const feasible = breakEven !== null && breakEven <= moq;

  return (
    <div className={styles.calc} role="group" aria-label="Break-even quick check">
      <div className={styles.title}>Break-even quick check</div>
      <div className={styles.grid}>
        {FIELDS.map((f) => (
          <label key={f.key} className={styles.field}>
            <span className={styles.label}>{f.label}</span>
            <span className={styles.inputWrap}>
              <input
                type="number"
                min={f.min}
                value={values[f.key]}
                onChange={set(f.key)}
              />
              <span className={styles.suffix}>{f.suffix}</span>
            </span>
          </label>
        ))}
      </div>

      <div className={styles.results}>
        <div className={styles.stat}>
          <span className={styles.label}>Break-even orders</span>
          <span
            className={`${styles.value} ${feasible ? "" : styles.negative}`}
          >
            {breakEven === null ? "—" : `${breakEven} units`}
          </span>
        </div>
        <div className={styles.stat}>
          <span className={styles.label}>Profit if the full MOQ sells</span>
          <span
            className={`${styles.value} ${
              profitAtMoq >= 0 ? styles.positive : styles.negative
            }`}
          >
            {money.format(profitAtMoq)}
            {margin !== null && ` (${Math.round(margin * 100)}% margin)`}
          </span>
        </div>
      </div>

      {!feasible && breakEven !== null && (
        <p className={styles.note}>
          Selling every MOQ unit still wouldn&apos;t cover costs at this price.
          Raise the sale price, lower costs, or reconsider the buy.
        </p>
      )}
    </div>
  );
}
