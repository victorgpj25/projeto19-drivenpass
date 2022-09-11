import { Request, Response } from 'express'

import * as credentialService from '../services/credentialService'

export async function insertCredential(req: Request, res: Response) {
    const userId = Number(res.locals.userId)
    const { url, tag, username, password }: {url: string, tag: string, username: string, password: string} = req.body

    await credentialService.insertCredential(userId, url, tag, username, password)

    res.sendStatus(201)
}
