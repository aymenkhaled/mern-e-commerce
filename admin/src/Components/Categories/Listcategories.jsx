import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { categorieService } from '../../Services/Categories-Service';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Listcategories = () => {
  const[Categories,setCategories]=useState([]);
  useEffect(()=>{
      GetListCategories();
  });
  const GetListCategories=()=>{
    categorieService.fetchcategorie()
      .then((res)=>{
        setCategories(res.data);
      })
  }
  
  return (
    <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>nomcategorie</StyledTableCell>
            <StyledTableCell align="right">imagecategorie</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {Categories.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.nomcategorie}
              </StyledTableCell>
              {/* <StyledTableCell align="right">{row.designation}</StyledTableCell> */}
             

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Listcategories
