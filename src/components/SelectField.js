import { FormControl, InputLabel, MenuItem, Select, Box } from '@mui/material'
import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { handleCategoryChange, handleDifficultyChange, handleTypeChange, handleNumberChange, handleScoreChange } from '../redux/quiz'

const SelectField = props => {
    const {label, options} = props
    const dispatch = useDispatch()
    const [value, setValue] = useState("")

    const handleChange = (e) => {
        setValue(e.target.value)
        switch(label){
            case "Category":
                dispatch(handleCategoryChange(e.target.value))
            case "Difficulty":
                dispatch(handleDifficultyChange(e.target.value))
            case "Type":
                dispatch(handleTypeChange(e.target.value))
            default:
                return
        }
    }
    return (
        <Box mt={3} width="100%">
            <FormControl fullWidth>
                <InputLabel>
                {label}
                </InputLabel>
                <Select value={value} label={label} onChange={handleChange}>
                    {options.map(({id, name}) => (
                        <MenuItem value={name} key={id}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
  )
}

export default SelectField