import { Request, Response, NextFunction } from 'express'

export default function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
    if (error.code === 'search_failed') {
        return res.status(400).send({ErrorMessage: error.message})
    }
    if (error.code === 'signin_failed') {
        return res.status(401).send({ErrorMessage: error.message})
    }
    if (error.code === 'no_token') {
        return res.status(401).send({ErrorMessage: error.message})
    }
    if (error.code === 'invalid_token') {
        return res.status(401).send({ErrorMessage: error.message})
    }
    if (error.code === 'email_conflict') {
        return res.status(409).send({ErrorMessage: error.message})
    }
    if (error.code === 'tag_conflict') {
        return res.status(409).send({ErrorMessage: error.message})
    }
    if (error.code === 'invalid_req_params') {
        return res.status(422).send({ErrorMessage: error.message})
    }
    
    res.sendStatus(500)
}