import { Request, Response } from 'express'

import * as noteService from '../services/noteService'

export async function insertNote(req: Request, res: Response) {
    const userId = Number(res.locals.userId)
    const { tag, note }: {tag: string, note: string} = req.body

    await noteService.insertNote(userId, tag, note)

    res.sendStatus(201)
}