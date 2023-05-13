import express, {Application, Request, Response, NextFunction} from 'express';
import cors from 'cors';
import { Schema, model } from 'mongoose';

const app: Application = express()

//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    // inserting a test data into mongoDB 

    /*
      Step1: Interface
      Step2: Schema
      Step3: Model
      Step4: Database Query
    */

    // res.send('Hello World!')
    // next();





const createUserTODB=async ()=> {
    const user = new User({
        id: "778",
        role: "student",
        password: 'mypassword',
        name: {
            firstName: "M.",
            middleName: "Nizam",
            lastName: "Babu"
        },
        gender: "male",
        email: "abc@gmail.com",
        contactNo: "01265896658",
        emergencyContactNo:"01236548965",
        presentAddress:  "Dhaka",
        permanentAddress: "KSA"
    });
      await user.save();
      console.log(user);
    };

    createUserTODB();

});


export default app;