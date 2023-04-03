import React, { useState } from 'react';

import { makeStyles } from '@mui/styles';
import { useLocation } from 'react-router-dom';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
export default function MyTable() {
  const classes = useStyles();
  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowClick = (row) => {
    setSelectedRows([...selectedRows, row]);
  };
  const {state} = useLocation();
  const handleBuyClick = () => {
    // Handle buy button click here
  };
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="My table">
        <TableHead>
          <TableRow>
            <TableCell>Serial Number</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Buy</TableCell>
          </TableRow>
        </TableHead>
<TableBody>
          {state.map((row, index) => (
            <TableRow key={index} onClick={() => handleRowClick(row)}>
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.city}</TableCell>
  <TableCell>
                <Button variant="contained" color="primary" style={{backgroundColor: '#2d0041'}} onClick={handleBuyClick}>
                  Buy
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


// import React, { useState } from 'react'
// import { useLocation } from 'react-router-dom'



// export default function Show() {

//     const {state} = useLocation();
//     console.log(state)

   
//   return (
//     <div>
//     <ul>{state.map((ele, index)=>{
//     return(
//         <>
//         <li>{ele.name} ,{ele.amount}, {ele.type}</li>
//         </>
//     )
//     })}</ul>
//     </div>
 
//   )
// }
