import { createUserToDB } from './user.service';
import { NextFunction, Request, Response } from "express";

const createUser= async(req: Request, res: Response, next: NextFunction) => {
    const user = await createUserToDB();

    res.status(200).json({
        status: 'success',
        data: user,
    });
}

//Pattern
// Route -> Controller -> Service