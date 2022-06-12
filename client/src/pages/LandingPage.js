import React from 'react'

import { Link } from 'react-router-dom';
import { Button } from '@mui/material'
import {AssuredWorkload,DoubleArrow} from '@mui/icons-material'


function LandingPage() {
  return (
   <div className='App'>
   <div className='logo'>
      <AssuredWorkload />
   </div>
  <div className='section'>
    <div className='title-div'>
    <h1>COMMERZ BANK</h1>
    <h4>Banking and Budgeting made simple.</h4>
   </div>
   <div >
      
   <Link to="/application">
<Button size='large' variant='outlined' endIcon={<DoubleArrow />}>Get Loan</Button>
</Link>
   </div>
   <div className='content-div'>
      <p>
 Join an ethical bank that uses its savers' money to tend to charities and social enterprises.
      </p>
      <Link to="/data">
<Button size='large' variant='outlined' endIcon={<DoubleArrow />}>Applications</Button>
</Link>
   </div>
 
  </div>
 </div>
  )
}

export default LandingPage