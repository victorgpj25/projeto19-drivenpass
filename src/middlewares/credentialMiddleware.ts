import { Request, Response, NextFunction } from 'express'

import { credentialSchema } from '../schemas/credentialSchema'

export function validateInsertCredentialReqBody(req: Request, res: Response, next: NextFunction) {
    const validation = credentialSchema.validate(req.body)
    if (validation.error) {
        res.status(422).send({ErrorMessage: 'Posting credential failed due to ' + validation.error})
        return
    }

    next();
}