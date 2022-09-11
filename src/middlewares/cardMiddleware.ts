import { Request, Response, NextFunction } from 'express'

import { cardSchema } from '../schemas/cardSchema'

export function validatePostCardReqBody(req: Request, res: Response, next: NextFunction) {
    const validation = cardSchema.validate(req.body)
    if (validation.error) {
        res.status(422).send({ErrorMessage: 'Posting card failed due to ' + validation.error})
        return
    }

    next();
}