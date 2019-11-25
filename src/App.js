import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Table from 'react-bootstrap/Table'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
    
//       </header>
//     </div>
//   );
// }

// export default App;

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  headTableView:{
    fontStyle: 'bold'
  }
});

function createData(stt,name, calories, fat, carbs, protein) {
  return {stt, name, calories, fat, carbs, protein };
}

const rows = [
  createData("NVB","Ngân hàng TMCP Quốc Dân1", "9.10" , "0.00", "0.00", "3.001.200"),
  createData("SHB","Ngân hàng TMCP Sài Gòn - Hà Nội1", "6.40" , "0.00", "0.00", "1.885.200"),
  createData("TIG","CTCP Tập đoàn đầu tư Thăng Long1", "6.20" , "+0.50", "+8.77", "1.504.400"),
  createData("TIG","CTCP Tập đoàn đầu tư Thăng Long2", "6.20" , "-0.20", "-1.11", "1.504.400"),
  createData("NVB","Ngân hàng TMCP Quốc Dân2", "9.10" , "0.00", "0.00", "3.001.200"),
  createData("SHB","Ngân hàng TMCP Sài Gòn - Hà Nội2", "6.40" , "0.00", "0.00", "1.885.200"),
  createData("TIG","CTCP Tập đoàn đầu tư Thăng Long3", "6.20" , "+0.50", "+8.77", "1.504.400"),
  createData("TIG","CTCP Tập đoàn đầu tư Thăng Long4", "6.20" , "-0.20", "-1.11", "1.504.400"),
  createData("NVB","Ngân hàng TMCP Quốc Dân3", "9.10" , "0.00", "0.00", "3.001.200"),
  createData("SHB","Ngân hàng TMCP Sài Gòn - Hà Nội3", "6.40" , "0.00", "0.00", "1.885.200"),
  createData("TIG","CTCP Tập đoàn đầu tư Thăng Long5", "6.20" , "+0.50", "+8.77", "1.504.400"),
  createData("TIG","CTCP Tập đoàn đầu tư Thăng Long6", "6.20" , "-0.20", "-1.11", "1.504.400"),
  createData("NVB","Ngân hàng TMCP Quốc Dân4", "9.10" , "0.00", "0.00", "3.001.200"),
  createData("SHB","Ngân hàng TMCP Sài Gòn - Hà Nội4", "6.40" , "0.00", "0.00", "1.885.200"),
  createData("TIG","CTCP Tập đoàn đầu tư Thăng Long7", "6.20" , "+0.50", "+8.77", "1.504.400"),
  createData("TIG","CTCP Tập đoàn đầu tư Thăng Long8", "6.20" , "-0.20", "-1.11", "1.504.400")
];

export default function App() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead >
          <TableRow  className={classes.headTableView}>
            <TableCell style={{fontWeight:"bold"}}  className="headTableView"  >Mã CK</TableCell>
            <TableCell style={{fontWeight:"bold"}}  className="headTableView">Tên Công ty</TableCell>
            <TableCell style={{fontWeight:"bold"}}  className="headTableView" align="right">Giá gần nhất</TableCell>
            <TableCell style={{fontWeight:"bold"}}  className="headTableView" align="right">Thay đổi</TableCell>
            <TableCell style={{fontWeight:"bold"}} className="headTableView" align="right">% thay đổi</TableCell>
            <TableCell style={{fontWeight:"bold"}} className="headTableView" align="right">Khối lượng</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          
          rows.map((row, index ) => 
            (
              
                <TableRow onClick={handleClick} style={{backgroundColor:"#ebebe0"}} key={row.name}>
                  
                <TableCell style={{color:"#0088cc"}} >{row.stt}</TableCell>
                <TableCell style={{color:"#0088cc"}} component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right" >{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            )
            
          )   
          }

        </TableBody>
      </Table>
    </Paper>
  );

  function handleClick(event){
    console.log("evet "+ event );
  }

}
