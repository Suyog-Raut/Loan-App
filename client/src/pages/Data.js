import React, { useState,useEffect } from 'react'
import {Table,TableContainer,Paper,Pagination, TableBody, TableHead,TableRow,TableCell} from '@mui/material'
import axios from "axios";


function Data() {
   const [data,setData] = useState([]);
   const rows = [ 
  {
    title : "Name"
  },
  {
    title : "Phone No."
  },
  {
    title : "Business Name"
  },
  {
    title : "Business Type"
  },
  {
    title : "Loan Amount"
  },
  {
    title : "Interest"
  },
  {
    title : "GST No."
  },
  {
    title : "Tenure(in months)"
  }
   ];
   useEffect(() => {

     async function fetchData()
       {try 
        {
        const applications = await axios("/data");
        setData(applications.data.applications);
        } catch (err) {
         setData({ error: err.message });
      }}

     fetchData();
   }, [])
   
 if(!data) return <p>Server Down</p>

  return (
    <div className='applications'>
 <h1>Applications</h1>
 <TableContainer component={Paper}>
 <Table aria-label='' stickyHeader>
  <TableHead >
    <TableRow key={rows[0].title}>
    {rows.map((row) => {return <TableCell key={row.title}><h3>{row.title}</h3></TableCell>})}
    </TableRow>
  </TableHead>
  <TableBody>
     {data.map((column)=>
      {
        return  <TableRow key={column.firstName}>
            <TableCell key={column.firstName}>{column.firstName} {column.lastName}</TableCell>
            <TableCell key={column.businessName}>{column.businessName}</TableCell>
            <TableCell key={column.businessType}>{column.businessType}</TableCell>
            <TableCell key={column.amount}>{column.amount}</TableCell>
            <TableCell key={column.interest}>{column.interest}</TableCell>
            <TableCell key={column.phoneNumber}>{column.phoneNumber}</TableCell>
            <TableCell key={column.tenure}>{column.tenure}</TableCell>
            <TableCell key={column.gstNumber}>{column.gstNumber}</TableCell>
          </TableRow> 
    })}
  </TableBody>
  
 </Table>
 <Pagination />
 </TableContainer>
    </div>
  )
}

export default Data