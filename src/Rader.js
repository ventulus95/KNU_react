import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
;

const average = (subject, data) => {
  let sum = 0;
  for(let i = 0; i < data.length; ++i) {
    sum += data[i][subject];
  }
  return sum / data.length;
}

const RaderChartBox = ({data}) => {
  //{ name, korean, english, math, physical, music, art };
  const [studentName, setStuduentName] = useState("영호");
  const findData = data.find(item => item.name === studentName);

  const raderData = [
  { subject: 'korean', avgScore: average("korean", data), sScore: findData ? findData.korean: 0},
  { subject: 'english', avgScore: average("english", data), sScore: findData ? findData.korean: 0},
  { subject: 'math', avgScore: average("math", data), sScore: findData ? findData.korean: 0},
  { subject: 'physical', avgScore: average("physical", data), sScore: findData ? findData.korean: 0},
  { subject: 'music', avgScore: average("music", data), sScore: findData ? findData.korean: 0},
  { subject: 'art', avgScore: average("art", data), sScore: findData ? findData.korean: 0}
];

return (
  <Paper style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
    <div style={{margin: "10px 100px"}}>
      <TextField
        label="학생명"
        value={studentName}
        onChange={event => setStuduentName(event.target.value)}
        margin="normal"
      />
    </div>
    <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={raderData}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar name="avg" dataKey="avgScore" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <Radar name="student" dataKey="sScore" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
    </RadarChart>
  </Paper>
  );
}

export default RaderChartBox;