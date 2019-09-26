import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import DataTable from "./DataTable";
// import ScatterChartBox from "./ScatterChartBox";
// import RadarChartBox from "./RadarChartBox";


const  createData = (name, korean, english, math, physical, music, art) => {
  return { name, korean, english, math, physical, music, art };
}

const data = [
  createData('영호', 72, 90, 92, 90, 67, 91),
  createData('지영', 81, 100, 93, 90, 56, 94),
  createData('지은', 59, 69, 79, 60, 58, 66),
  createData('영희', 100, 94, 82, 90, 59, 91),
  createData('영수', 55, 82, 78, 90, 62, 88),
  createData('지훈', 75, 95, 54, 90, 83, 100),
  createData('원진', 85, 78, 97, 90, 73, 98),
  createData('지연', 85, 92, 81, 90, 88, 95),
  createData('창규', 90, 85, 64, 90, 90, 94),
  createData('수진', 93, 70, 90, 90, 62, 88),
  createData('동혁', 100, 68, 84, 90, 81, 79),
  createData('민지', 88, 100, 93, 90, 84, 76),
  createData('민수', 71, 96, 87, 90, 54, 98),
  createData('미라', 79, 94, 95, 90, 65, 95),
  createData('은지', 68, 88, 93, 90, 71, 92),
  createData('민영', 93, 75, 98, 90, 82, 94),
  createData('범식', 69, 69, 88, 90, 64, 98),
  createData('호철', 88, 91, 73, 90, 71, 94),
  createData('성훈', 99, 85, 71, 90, 89, 96),
  createData('기덕', 98, 83, 91, 90, 91, 94)
]

function App() {
  return (
    <div className="App">
     <Header/>

    </div>
  );
}

export default App;
