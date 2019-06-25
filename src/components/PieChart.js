import React from "react";
import PropTypes from "prop-types";
import {
  requireNativeComponent,
  processColor,
  ColorPropType
} from "react-native";

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

PieChart.propTypes = {
  strokeWidth: PropTypes.number,
  strokeColor: ColorPropType,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      size: PropTypes.number.isRequired,
      color: ColorPropType
    })
  )
};

const NativePieChart = requireNativeComponent("PieChartView", PieChart);
