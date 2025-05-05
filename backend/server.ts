import app from './app';
import {Request,Response} from 'express';
import { DbConnection } from './config/DbConnection';
app.use('',(req:Request,res:Response)=>{
   res.send('<h1>Hello worlds</h1>')
});

(async () => {
    await DbConnection(); // Wait for DB connection before starting server
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
})();
