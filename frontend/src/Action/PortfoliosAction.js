import {
    REQUEST_PORTFOLIO,
    SUCCESS_PORTFOLIO,
    FAIL_PORTFOLIO,
    REQUEST_DESKPORTFOLIO,
    SUCCESS_DESKPORTFOLIO,
    FAIL_DESKORTFOLIO,
    REQUEST_SINGLE_PORTFOLIO,
    SUCCESS_SINGLE_PORTFOLIO,
    FAIL_SINGLE_PORTFOLIO,
    REQUEST_RESUME,
    SUCCESS_RESUME,
    FAIL_RESUME,
    CLEAR_ERRORS
} from '../Const/Const.js'
import axios from 'axios'

export const getPortfolios = () => async(dispatch)=>{
    try {
        dispatch({
            type:REQUEST_PORTFOLIO
        })
        const {data} = await axios.get('/api/v2/portfolios')
        dispatch({
            type: SUCCESS_PORTFOLIO,
            payload: data.portfolio

        })

    } catch (error) {
        dispatch({
            type:FAIL_PORTFOLIO,
            payload: error.response.data.message
        })
    }
}


export const Getsingleport = (id) => async(dispatch)=>{
    
    try {
        dispatch({
            type:REQUEST_SINGLE_PORTFOLIO
        })
        const {data} = await axios.get(`/api/v2/portfolios/${id}`)
        dispatch({
            type: SUCCESS_SINGLE_PORTFOLIO,
            payload: data.portfolio

        })

    } catch (error) {
        dispatch({
            type:FAIL_SINGLE_PORTFOLIO,
            payload: error.response.data.message
        })
    }
}

export const DeskPortfolios = () => async(dispatch)=>{
    try {
        dispatch({
            type:REQUEST_DESKPORTFOLIO
        })
        const {data} = await axios.get('/api/v2/desktopport')
        dispatch({
            type: SUCCESS_DESKPORTFOLIO,
            payload: data.portfolio

        })

    } catch (error) {
        dispatch({
            type:FAIL_DESKORTFOLIO,
            payload: error.response.data.message
        })
    }
}

export const createForm = (data) => async(dispatch) =>{

    console.log(data)
    const cofig = { headers: { "Content-Type": "application/json" } }
     await axios.post('/api/v2/register', data, cofig)

}
export const getResume = () => async(dispatch)=>{
    try {
        dispatch({
            type:REQUEST_RESUME
        })
        const {data} = await axios.get('/api/v2/resume')
        dispatch({
            type: SUCCESS_RESUME,
            payload: data.resume

        })

    } catch (error) {
        dispatch({
            type:FAIL_RESUME,
            payload: error.response.data.message
        })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS

    })
}