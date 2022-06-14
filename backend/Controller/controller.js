import Portfolio from '../Model/PortfolioModel.js'
import Userme from '../Model/AdminModel.js'
import Error from  '../Middle/ErrorHandler.js'
import DesktopPort from '../Model/DesktopModel.js'
import ResumeModel from '../Model/ResumeModel.js'

class MyPortfolio {
    static CreatePortfolio = async(req,res,next)=>{
        try {
            
            const portfolio = await Portfolio.create(req.body)
            res.status(201).json({
                success:true,
                portfolio
            })
        } catch (error) {
            res.status(400).json({
                success:false,
                error
        })
        }
    };
    
    static GetPortfolio = async (req, res, next)=>{
        try {
            const portfolio = await Portfolio.find()
            res.status(201).json({
                success:true,
                portfolio
            })
        } catch (error) {
            res.status(400).json({
                success:false,
                error
        })
        }
    };

    static GetsinglePortfolio = async (req, res, next)=>{
        try {
            const portfolio = await Portfolio.findById(req.params.id)
            res.status(201).json({
                success:true,
                portfolio
            })
        } catch (error) {
            res.status(400).json({
                success:false,
                error
        })
        }
    };

    static regeterUser = async(req, res, next)=>{
        
        
        try {
          
            await Userme.create(req.body)
           
            res.status(201).json({
                success:true,
            })
            
        } catch (error) {
            res.status(400).json({
                success:false,
                error
            })
        }
    };

    static loginUser = async(req, res, next)=>{
        try {
            const {email, password} = req.body
            if (!email || !password) {
                return next(new Error('Enter E mail And Password', 400))
            }

            const user = await Userme.findOne({email}).select('+password')

            if (!user) {
                return next(new Error('Wrong E-mail And Password', 400))
            }

            const checkPassword =await user.checkpassword(password)

            if (!checkPassword) {
                return next(new Error('Wrong Password', 400))
            }

            const token = user.getJWTToken()
            
            const option ={
                expire: new Date(
                    Date.now() + process.env.COOKIE_EX * 48*60*60*1000
                ),
                httpOnly: true
            }
           
            res.status(201).cookie('token', token, option).json({
                success:true,
                user,
            })

        } catch (error) {
            res.status(500).json({
                success:false,
                error,
            })
        }
    }

    static logout = async(req, res, next)=>{
        try {
            res.cookie('token', null, {
                expire: new Date(Date.now()),
                httpOnly:true
            });
            res.status(200).json({
                success:true,
                message:"Log Out sucessfully"
            })
        } catch (error) {
            res.status(400).json({
               error
            })
        }
    }
    static CreateDesktopPort = async(req, res, next)=>{
        try {
            
            const portfolio = await DesktopPort.create(req.body)
            res.status(201).json({
                success:true,
                portfolio
            })
        } catch (error) {
            res.status(400).json({
                success:false,
                error
        })
         }
    }

    static getDesktopPort = async(req, res, next)=>{
        try {
            
            const portfolio = await DesktopPort.find()
            res.status(201).json({
                success:true,
                portfolio
            })
        } catch (error) {
            res.status(400).json({
                success:false,
                error
        })
         }
    }

    static resumecreate = async(req, res, next)=>{
        try {
            
         await ResumeModel.create(req.body)
            res.status(201).json({
                success:true,
                
            })
        } catch (error) {
            res.status(400).json({
                success:false,
                error
        })
         }
    }

    static resumeget = async(req, res, next)=>{
        try {
            
         const resume = await ResumeModel.findById('620b512c86592cca843d46a1')
            res.status(201).json({
                success:true,
                resume
            })
        } catch (error) {
            res.status(400).json({
                success:false,
                error
        })
         }
    }

}





export default MyPortfolio

