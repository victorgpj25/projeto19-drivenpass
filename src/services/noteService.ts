import * as noteRepository from '../repositories/noteRepository'

import * as noteUtils from "../utils/noteUtils"

export async function insertNote(userId: number, tag: string, note: string) {
    await noteUtils.verifyTagConflict(userId, tag)

    await noteRepository.insert({userId, tag, note})
}

export async function getNotes(userId: number) {
    const notes = await noteRepository.findByUserId(userId)
    return notes
}

export async function getNoteById(userId: number, noteId: number) {
    const note = await noteRepository.findByNoteId(userId, noteId)
    if (!note) throw {code: 'search_failed', message: 'Given id does not exist or belongs to another user'}
    return note
}