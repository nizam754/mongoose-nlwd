import express, {Application, Request, Response, NextFunction} from 'express';
import cors from 'cors';

const app: Application = express()

//using cors
app.use(cors());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello World!')
    next();
})
  

export default app;