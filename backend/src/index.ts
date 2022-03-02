import mongoose ,{Error} from 'mongoose';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import passport from 'passport';
import passportLocal from 'passport-local';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect('mongodb+srv://Omar:<admin>@cluster0.k0jxf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
   
},(err:Error)=>{
    if (err) throw err;
    console.log("Connected To MongoDB")
});
// Middleware
const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }))
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());