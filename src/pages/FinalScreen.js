import React from 'react'
import { useSelector } from 'react-redux'

const FinalScreen = () => {
  const {score} = useSelector(state => state.quiz)

  return (
    <Box>
        
    </Box>
  )
}

export default FinalScreen