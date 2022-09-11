import * as credentialRepository from '../repositories/credentialRepository'

export async function verifyTagConflict(userId: number, tag: string) {
    const credential = await credentialRepository.findByTagAndUserId({userId, tag})
    if (credential) throw {code: 'tag_conflict', message: 'Given tag is already in use'}
}