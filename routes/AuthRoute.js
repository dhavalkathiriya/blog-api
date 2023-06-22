import express from 'express'
import { LoginController, RegisterController } from '../controller/AuthController'

const authRoute = express.Router()

authRoute.post("/login",LoginController)
authRoute.post("/register",RegisterController)

export default authRoute