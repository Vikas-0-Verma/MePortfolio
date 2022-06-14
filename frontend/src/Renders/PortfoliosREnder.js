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

export const PortfolioRender = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_PORTFOLIO:
            return {
                loading: false,
                portfoilo: []
            }
        case SUCCESS_PORTFOLIO:
            return {
                loading: true,
                portfoilo: action.payload
            }
        case FAIL_PORTFOLIO:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };

        default:
            return state;
    }
}

export const DeskPortfolioRender = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_DESKPORTFOLIO:
            return {
                loading: false,
                portfoilo: []
            }
        case SUCCESS_DESKPORTFOLIO:
            return {
                loading: true,
                portfoilo: action.payload
            }
        case FAIL_DESKORTFOLIO:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };

        default:
            return state;
    }
}

export const singlePortfolioRender = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_SINGLE_PORTFOLIO:
            return {
                loading: false,
                portfoilo: null
            }
        case SUCCESS_SINGLE_PORTFOLIO:
            return {
                loading: true,
                portfoilo: action.payload
            }
        case FAIL_SINGLE_PORTFOLIO:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };

        default:
            return state;
    }
}

export const resume = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_RESUME:
            return {
                loading: false,
            }
        case SUCCESS_RESUME:
            return {
                loading: true,
                resume: action.payload
            }
        case FAIL_RESUME:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };

        default:
            return state;
    }
}