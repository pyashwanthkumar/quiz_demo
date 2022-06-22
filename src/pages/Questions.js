import { Button, CircularProgress, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useAxios from '../hooks/useAxios'
import { useNavigate } from 'react-router-dom'
import { handleScoreChange } from '../redux/quiz'
import { decode } from 'html-entities'

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
}

const Questions = () => {
    const {
        question_category,
        question_difficulty,
        question_type,
        number_of_questions,
        score
    } = useSelector(state => state.quiz)
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    let apiUrl = `/api.php?amount=${number_of_questions}`
    
    if(question_category){
        apiUrl.concat(`&category=${question_category}`)
    }
    
    if(question_difficulty){
        apiUrl.concat(`&difficulty=${question_difficulty}`)
    }
    
    if(question_type){
        apiUrl.concat(`&question_type=${question_type}`)
    }
    

    const {response, error, loading} = useAxios({url : apiUrl})

    const [questionIndex, setQuestionIndex] = useState(0)
    const [options, setOptions] = useState([])

    useEffect(() => {
        if(response?.results.length){
            const question = response.results[questionIndex]
            let answers = [...question.incorrect_answers]
            answers.splice(
                //random_position
                getRandomInt(question.incorrect_answers.length),
                0,
                question.correct_answer
            )
            setOptions(answers)
        }
    }, [response, questionIndex])

    if(loading){
        return(
            <Box mt={20}>
                <CircularProgress/>
            </Box>
        )
    }

    const handleClickAnswer = (e) => {
        const question = response.results[questionIndex]
        if(e.target.textContent === question.correct_answer){
            dispatch(handleScoreChange(score + 1))
        }
        if(questionIndex + 1 < response.results.length){
            setQuestionIndex(questionIndex + 1)
        }else{
            navigate("/score")
        }
    }

    return (
        <Box>
            <Typography variant="h4">Question {questionIndex + 1}</Typography>
            <Typography mt={5}>{decode(response.results[questionIndex].question)}</Typography>
            {options.map((data, id) => (
                <Box mt={2} key={id}>
                    <Button onClick={handleClickAnswer} variant="contained">
                        {decode(data)}
                    </Button>
                </Box>
            ))}
            <Box mt={5}>
                Score: {score}/{response.results.length}
            </Box>
        </Box>
    )
}

export default Questions