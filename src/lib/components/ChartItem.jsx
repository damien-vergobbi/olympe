import React from "react";
import { ItemChart } from "./styles/Items";

export default function ChartItem ({
  title = "",
  subtitle = "",
  chart = false,
  chartTitle = false,
  chartLegend = false,
  large = false
}) {
  return (
    <ItemChart className={large ? "large" : ""}>
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div className="chart">
        {chartTitle && chart && <p className="chartTitle">{chartTitle}</p>}
        {chart || "Aucun graphique trouvé."}
      </div>

      {chartLegend && <div className="chartLegend">{chartLegend}</div>}
    </ItemChart>
  );
}
