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
import { scategorieService } from '../../Services/Scategories-Service';
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

 
const Listscategories = () => {
  const[Scategories,setScategories]=useState([]);
  useEffect(()=>{
      GetListScategories();
  });
  const GetListScategories=()=>{
    scategorieService.fetchscategorie()
      .then((res)=>{
        setScategories(res.data);
      })
  }
  return (
    <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>nomscategorie</StyledTableCell>
            {/* <StyledTableCell align="right">designation</StyledTableCell>
            <StyledTableCell align="right">Prix d'achats</StyledTableCell>
            <StyledTableCell align="right">prix vente</StyledTableCell>
            <StyledTableCell align="right">quantite</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {Scategories.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.nomscategorie}
              </StyledTableCell>
              {/* <StyledTableCell align="right">{row.designation}</StyledTableCell>
              <StyledTableCell align="right">{row.prixAchat}</StyledTableCell>
              <StyledTableCell align="right">{row.prixVente}</StyledTableCell>
              <StyledTableCell align="right">{row.qtestock}</StyledTableCell> */}

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
    </div>
  )
}

export default Listscategories
