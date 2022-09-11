import { Request, Response, NextFunction } from 'express'

import { connectionSchema } from '../schemas/connectionSchema'

export function validatePostConnectionReqBody(req: Request, res: Response, next: NextFunction) {
    const validation = connectionSchema.validate(req.body)
    if (validation.error) {
        res.status(422).send({ErrorMessage: 'Posting connection failed due to ' + validation.error})
        return
    }

    next();
}