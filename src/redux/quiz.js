import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    question_category : "",
    question_difficulty : "",
    question_type: "",
    number_of_questions: 50,
    score: 0
}

const slice = createSlice({
    name: 'quiz',
    initialState,
    reducers : {
        handleCategoryChange : (state, action) => {
            console.log(action.payload)
            return {
                ...state,
                question_category: action.payload,
            }
        },
        handleDifficultyChange : (state, action) => {
            console.log(action.payload)
            return {
                ...state,
                question_difficulty: action.payload,
            }
        },
        handleTypeChange : (state, action) => {
            console.log(action.payload)
            return {
                ...state,
                question_type: action.payload,
            }
        },
        handleNumberChange : (state, action) => {
            console.log(action.payload)
            return {
                ...state,
                number_of_questions: action.payload,
            }
        },
        handleScoreChange : (state, action) => {
            console.log(action.payload)
            return {
                ...state,
                score: action.payload,
            }
        }
    }
})

export const {handleCategoryChange, handleDifficultyChange, handleTypeChange, handleNumberChange, handleScoreChange} = slice.actions

export default slice

