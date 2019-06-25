import React from "react";
import { requireNativeComponent, processColor } from "react-native";

const NativePieChart = requireNativeComponent("PieChartView");

export default function PieChart() {
  return (
    <NativePieChart
      data={[
        { size: 5, color: processColor("red") },
        { size: 10, color: processColor("pink") },
        { size: 12, color: processColor("blue") }
      ]}
      strokeWidth={3}
      strokeColor="black"
      style={{
        width: 200,
        height: 200,
        backgroundColor: "transparent"
      }}
    />
  );
}
