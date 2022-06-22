import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleNumberChange, handleScoreChange } from '../redux/quiz'

const FinalScreen = () => {
  const {score} = useSelector(state => state.quiz)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0))
    dispatch(handleNumberChange(50))
    navigate("/")
  }

  return (
    <Box mt={30}>
        <Typography variant="h3" fontWeight="bold" mb={3}>
          Final Score : {score}
        </Typography>
        <Button onClick={handleBackToSettings} variant="outlined">back to settings</Button>
    </Box>
  )
}

export default FinalScreen