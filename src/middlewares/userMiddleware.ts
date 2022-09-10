import { Request, Response, NextFunction } from 'express'

import { signUpSchema } from '../schemas/userSchema'

export function validateSignUpReqBody(req: Request, res: Response, next: NextFunction) {
    const validation = signUpSchema.validate(req.body)
    if (validation.error) {
        res.status(422).send({ErrorMessage: 'Sign-Up failed due to ' + validation.error})
        return
    }

    next();
}