import { Request, Response, NextFunction } from 'express'

import { authSchema } from '../schemas/userSchema'

export function validateAuthReqBody(req: Request, res: Response, next: NextFunction) {
    const validation = authSchema.validate(req.body)
    if (validation.error) {
        res.status(422).send({ErrorMessage: 'Authentication failed due to ' + validation.error})
        return
    }

    next();
}