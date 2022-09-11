import * as noteRepository from '../repositories/noteRepository'

import * as noteUtils from "../utils/credentialUtils"

export async function insertNote(userId: number, tag: string, note: string) {
    await noteUtils.verifyTagConflict(userId, tag)

    await noteRepository.insert({userId, tag, note})
}