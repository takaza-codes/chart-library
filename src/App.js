import "./App.css";
import { Chart } from "react-google-charts";

function App() {
  const data = [
    ["LLM model", "Percentage"],
    ["Mistral", 4.7],
    ["Gemini", 10.3],
    ["Claude", 14.0],
    ["GPT-4", 27.2],
    ["Llama", 43.9],
  ];

  const options = {
    title: "LLM Usage in June, 2024",
    pieHole: 0.4,
    is3D: true,
    slices: {
      0: { offset: 0.2 },
    },
    pieStartAngle: 100,
    sliceVisibilityThreshold: 0.02,
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "#233238",
        fontSize: 14,
      },
    },
    colors: ["#8AD1C2", "#9F8AD1", "#D18A99", "#BCD18A", "#D1C28A"],
  };

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default App;
