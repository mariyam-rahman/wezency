import React from "react";
// import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const assignments = [
    {
      id: 1,
      name: "asgmt 1",
      marks: 60,
      deadLine: 60,
    },
    {
      id: 2,
      name: "asgmt 2",
      marks: 60,
      deadLine: 60,
    },
    {
      id: 3,
      name: "asgmt 3",
      marks: 60,
      deadLine: 60,
    },
    {
      id: 4,
      name: "asgmt 4",
      marks: 60,
      deadLine: 60,
    },
    {
      id: 5,
      name: "asgmt 5",
      marks: 60,
      deadLine: 60,
    },
    {
      id: 6,
      name: "asgmt 6",
      marks: 60,
      deadLine: 60,
    },
    {
      id: 7,
      name: "asgmt 7",
      marks: 60,
      deadLine: 60,
    },
    {
      id: 8,
      name: "asgmt 8",
      marks: 60,
      deadLine: 60,
    },
  ];

  return (
    <div className="B" style={{ height: "400px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={assignments}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis dataKey="deadLine" />
          <Tooltip />
          <Legend />
          <Bar dataKey="marks" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="deadLine" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
