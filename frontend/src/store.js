import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { DeskPortfolioRender, PortfolioRender, resume, singlePortfolioRender } from './Renders/PortfoliosREnder'

const reducer = combineReducers({
    portfoilos:PortfolioRender,
    deskPort:DeskPortfolioRender,
    single:singlePortfolioRender,
    resume: resume
})

let initialState = {

}

const middleware = [thunk];

const store = createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store