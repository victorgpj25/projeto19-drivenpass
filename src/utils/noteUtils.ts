import * as noteRepository from '../repositories/noteRepository'

export async function verifyTagConflict(userId: number, tag: string) {
    const note = await noteRepository.findByTagAndUserId(userId, tag)
    if (note) throw {code: 'tag_conflict', message: 'Given tag is already in use'}
}