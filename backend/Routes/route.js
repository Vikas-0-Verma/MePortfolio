import express from "express";
const Route = express()
import MyPortfolio from '../Controller/controller.js'

Route.get('/portfolios', MyPortfolio.GetPortfolio)
Route.post('/portfolios', MyPortfolio.CreatePortfolio)
Route.get('/portfolios/:id', MyPortfolio.GetsinglePortfolio)
Route.post('/register', MyPortfolio.regeterUser)
Route.post('/login', MyPortfolio.loginUser)
Route.get('/logout', MyPortfolio.logout)
Route.post('/desktopport',  MyPortfolio.CreateDesktopPort)
Route.get('/desktopport',  MyPortfolio.getDesktopPort)
Route.post('/resume',  MyPortfolio.resumecreate)
Route.get('/resume',  MyPortfolio.resumeget)
export default Route
