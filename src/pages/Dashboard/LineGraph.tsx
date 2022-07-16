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
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { click } from '@testing-library/user-event/dist/click';
import { randomFillSync } from 'crypto';

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
    <ResponsiveContainer width={900} height={500}>
      <LineChart
        data={report}
        margin={{
          top: 30,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" stroke="5550bd" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="roas" stroke="#8884d8" />
        <Line type="monotone" dataKey="click" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
