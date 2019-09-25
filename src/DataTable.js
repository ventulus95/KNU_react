import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const DataTable = ({data}) => {
  return (
  <Paper style={{margin: "30px 100px"}}>
  <div style={{maxHeight: "600px", overflow: "auto"}}>
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell align="right">국어</TableCell>
          <TableCell align="right">영어</TableCell>
          <TableCell align="right">수학</TableCell>
          <TableCell align="right">체육</TableCell>
          <TableCell align="right">음악</TableCell>
          <TableCell align="right">미술</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(row => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            {/* korean, english, math, physical, music, art */}
            <TableCell align="right">{row.korean}</TableCell>
            <TableCell align="right">{row.english}</TableCell>
            <TableCell align="right">{row.math}</TableCell>
            <TableCell align="right">{row.physical}</TableCell>
            <TableCell align="right">{row.music}</TableCell>
            <TableCell align="right">{row.art}</TableCell>
          </TableRow>
      ))}
      </TableBody>
    </Table>
  </div>
  </Paper>
  )
}

export default DataTable;