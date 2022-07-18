import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

type Data = {
  imp: number;
  click: number;
  cost: number;
  conv: number;
  convValue: number;
  ctr: number;
  cvr: number;
  cpc: number;
  cpa: number;
  roas: number;
  date: string;
}[];

export default function LineGraph() {
  const [report, setReport] = useState<Data>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/report?date_gte=2022-02-06&date_lte=2022-02-12',
        );
        setReport(response?.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  console.log('report', report);
  return (
    <ResponsiveContainer width={900} height="30%">
      <LineChart
        data={report}
        margin={{
          top: 30,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="1" vertical={false} />
        <XAxis
          dataKey="date"
          stroke="5550bd"
          domain={['dataMin', 'dataMax']}
          padding={{ left: 40, right: 40 }}
        />
        <YAxis />
        <Tooltip />
        <Line
          type="linear"
          dataKey="roas"
          stroke="#596cf6"
          activeDot={{ r: 6 }}
          strokeWidth={2}
        />
        <Line
          type="linear"
          dataKey="click"
          stroke="#85da47"
          activeDot={{ r: 6 }}
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
