import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

function MyBarChart() {
  return (
    <VictoryChart domainPadding={20}>
      <VictoryAxis />
      <VictoryAxis dependentAxis />
      <VictoryBar
        data={[
          { x: "Jan", y: 3000 },
          { x: "Feb", y: 2000 },
          { x: "Mar", y: 3500 }
        ]}
        style={{
          data: { fill: "#213ebf" }
        }}
        animate={{ duration: 500 }}
      />
    </VictoryChart>
  );
}
