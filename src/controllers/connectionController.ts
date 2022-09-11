import { Request, Response } from 'express'

import * as connectionService from '../services/connectionService'

export async function insertConnection(req: Request, res: Response) {
    const userId = Number(res.locals.userId)
    const { tag, network, password }: {tag: string, network: string, password: string} = req.body

    await connectionService.insertConnection(userId, tag, network, password)

    res.sendStatus(201)
}

export async function getConnections(req: Request, res: Response) {
    const userId = Number(res.locals.userId)
    const connections = await connectionService.getConnections(userId)

    res.status(200).send(connections)
}

export async function getConnectionById(req: Request, res: Response) {
    const userId = Number(res.locals.userId)
    const id = Number(req.params.id)
    const connection = await connectionService.getConnectionById(userId, id)

    res.status(200).send(connection)
}

export async function deleteConnection(req: Request, res: Response) {
    const userId = Number(res.locals.userId)
    const id = Number(req.params.id)
    await connectionService.deleteConnection(userId, id)

    res.sendStatus(200)
}