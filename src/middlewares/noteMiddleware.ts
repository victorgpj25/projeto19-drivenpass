import { Request, Response, NextFunction } from 'express'

import { noteSchema } from '../schemas/noteSchema'

export function validatePostNoteReqBody(req: Request, res: Response, next: NextFunction) {
    const validation = noteSchema.validate(req.body)
    if (validation.error) {
        res.status(422).send({ErrorMessage: 'Posting note failed due to ' + validation.error})
        return
    }

    next();
}