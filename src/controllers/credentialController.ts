import { Request, Response } from 'express'

import * as credentialService from '../services/credentialService'

export async function insertCredential(req: Request, res: Response) {
    const userId = Number(res.locals.userId)
    const { url, tag, username, password }: {url: string, tag: string, username: string, password: string} = req.body

    await credentialService.insertCredential(userId, url, tag, username, password)

    res.sendStatus(201)
}

export async function getCredentials(req: Request, res: Response) {
    const userId = Number(res.locals.userId)
    const credentials = await credentialService.getCredentials(userId)

    res.status(200).send(credentials)
}

export async function getCredentialsById(req: Request, res: Response) {
    const userId = Number(res.locals.userId)
    const id = Number(req.params.id)
    const credentials = await credentialService.getCredentialsById(userId, id)

    res.status(200).send(credentials)
}