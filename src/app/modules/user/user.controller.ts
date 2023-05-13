import { createUserToDB, getUsersFromDB } from './user.service';
import { NextFunction, Request, Response } from "express";

export const createUser= async(req: Request, res: Response, next: NextFunction) => {
    const user = await createUserToDB();

    res.status(200).json({
        status: 'success',
        data: user,
    });
}

export const getUsers= async(req: Request, res: Response, next: NextFunction) => {

    const user = await getUsersFromDB();

    res.status(200).json({
        status: 'success',
        data: user,
    });
}