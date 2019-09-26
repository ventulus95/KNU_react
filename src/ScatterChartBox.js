import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';

const ScatterChartBox = ({data}) => {
  const [xSubject, setXSubject] = useState('korean')
  const handleChangeX = event => {
    setXSubject(event.target.value)
  }

  const [ySubject, setYSubject] = useState('english')
  const handleChangeY = event => {
    setYSubject(event.target.value)
  }

  //{ name, korean, english, math, physical, music, art };
  return (
    <Paper style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
    <div style={{margin: "10px 100px"}}>
      <Select
          style={{width: "100px", margin: "10px"}}
          value={xSubject}
          onChange={handleChangeX}
        >
          <MenuItem value={"korean"}>korean</MenuItem>
          <MenuItem value={"english"}>english</MenuItem>
          <MenuItem value={"math"}>math</MenuItem>
          <MenuItem value={"physical"}>physical</MenuItem>
          <MenuItem value={"music"}>music</MenuItem>
          <MenuItem value={"art"}>art</MenuItem>
      </Select>

      <Select
          style={{width: "100px", margin: "10px"}}
          value={ySubject}
          onChange={handleChangeY}
        >
          <MenuItem value={"korean"}>korean</MenuItem>
          <MenuItem value={"english"}>english</MenuItem>
          <MenuItem value={"math"}>math</MenuItem>
          <MenuItem value={"physical"}>physical</MenuItem>
          <MenuItem value={"music"}>music</MenuItem>
          <MenuItem value={"art"}>art</MenuItem>
      </Select>
    </div>

    <ScatterChart
      width={400}
      height={400}
      margin={{
        top: 20, right: 20, bottom: 20, left: 20,
      }}
    >
      <CartesianGrid />
      <XAxis type="number" dataKey={xSubject} name={xSubject} unit="점" />
      <YAxis type="number" dataKey={ySubject} name={ySubject} unit="점" />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter name="A school" data={data} fill="#8884d8" />
    </ScatterChart>
    </Paper>
  );
}

export default ScatterChartBox;
