import * as credentialRepository from '../repositories/credentialRepository'

import * as credentialTypes from '../types/credentialTypes'
import * as encryptUtils from './encryptUtils'

export async function verifyTagConflict(userId: number, tag: string) {
    const credential = await credentialRepository.findByTagAndUserId(userId, tag)
    if (credential) throw {code: 'tag_conflict', message: 'Given tag is already in use'}
}

export async function returnDecryptedCredentialsInArray(credentials: credentialTypes.ICredential[]) {
    if (!credentials.length) return credentials
    credentials.forEach(async credential => credential.password = await encryptUtils.decryptData(credential.password))
    return credentials
}

export async function returnDecryptedCredentials(credentials: credentialTypes.ICredential) {
    if (!credentials) return credentials
    const decryptedCredentials: credentialTypes.ICredential = {
        id: credentials.id,
        userId: credentials.userId,
        tag: credentials.tag,
        url: credentials.url,
        username: credentials.username,
        password: await encryptUtils.decryptData(credentials.password)
    }
    return decryptedCredentials
}