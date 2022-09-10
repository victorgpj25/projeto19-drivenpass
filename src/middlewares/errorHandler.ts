import { Request, Response, NextFunction } from 'express'

export default function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
    if (error.code === "email_conflict") {
        return res.status(409).send({ErrorMessage: error.message})
    }


    res.sendStatus(500)
}