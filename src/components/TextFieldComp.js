import { FormControl, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useDispatch } from 'react-redux'
import { handleNumberChange } from '../redux/quiz'

const TextFieldComp = () => {
    const dispatch = useDispatch()
    
    const handleChange = (e) => {
        dispatch(handleNumberChange(e.target.value))
    }
    
    return (
        <Box mt={3} width="100%">
            <FormControl fullWidth size="small">
                <TextField
                    onChange={handleChange}
                    variant="outlined"
                    label="Number of questions"
                    type="number"
                    size="small"
                />
            </FormControl>
        </Box>
    )
}

export default TextFieldComp