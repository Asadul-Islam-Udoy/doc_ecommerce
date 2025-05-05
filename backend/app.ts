import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import UserRouter from './routers/UserRouter';
const app = express();
dotenv.config({path:'.env'});

app.use('/users',UserRouter);

// app.use(express.static(path.join(__dirname,'../frontend/build')));
// app.get('',(req: Request, res: Response)=>{
//    res.sendFile(path.resolve(__dirname,'../frontend/build/index.html'))
// })
export default app;