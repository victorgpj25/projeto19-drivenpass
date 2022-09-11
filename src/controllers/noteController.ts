import { Request, Response } from 'express'

import * as noteService from '../services/noteService'

export async function insertNote(req: Request, res: Response) {
    const userId = Number(res.locals.userId)
    const { tag, note }: {tag: string, note: string} = req.body

    await noteService.insertNote(userId, tag, note)

    res.sendStatus(201)
}

export async function getNotes(req: Request, res: Response) {
    const userId = Number(res.locals.userId)
    const notes = await noteService.getNotes(userId)

    res.status(200).send(notes)
}

export async function getNotesById(req: Request, res: Response) {
    const userId = Number(res.locals.userId)
    const id = Number(req.params.id)
    const note = await noteService.getNoteById(userId, id)

    res.status(200).send(note)
}

export async function deleteNote(req: Request, res: Response) {
    const userId = Number(res.locals.userId)
    const id = Number(req.params.id)
    await noteService.deleteNote(userId, id)

    res.sendStatus(200)
}