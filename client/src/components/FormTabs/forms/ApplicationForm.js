import React from 'react'
import { Box, Typography,Alert } from '@mui/material'
import { useSelector } from 'react-redux'

import InputField from './inputField'
import FormPagination from '../formPagination'
import { updateAmount, updateInterest, updateTenure } from '../../../app/slices/loanForm'

export default function ApplicationForm({ value, setValue }) {

    const { amount, interest, tenure } = useSelector(state => state.loanForm)
    const { errorMsg, successMsg } = useSelector(state => state.message)

    return (
        <Box>
            <Box mb='20px' >
                <Typography variant='h5' fontWeight='600' mb='20px' >
                    Loan Details
                </Typography>

                <InputField type='number' label='Loan Amount' value={amount} setValue={updateAmount} />
                <InputField type='number' label='Interest' value={interest} setValue={updateInterest} />
                <InputField type='number' label='Period of Loan(in months)' value={tenure} setValue={updateTenure} />

            </Box>
            <FormPagination setValue={setValue} value={value} />
            <div style={{visibility : errorMsg? 'visible' : 'hidden'}}>
            <Alert severity='error'>{errorMsg}</Alert>
            </div>
            <div style={{visibility : successMsg? 'visible' : 'hidden'}}>
            <Alert severity='success'>{successMsg}</Alert>
            </div>
        </Box>
    )
} 
