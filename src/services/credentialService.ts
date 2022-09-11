import * as credentialRepository from '../repositories/credentialRepository'

import * as credentialUtils from "../utils/credentialUtils"
import * as encryptUtils from '../utils/encryptUtils'

export async function insertCredential(userId: number, url: string, tag: string, username: string, password: string) {
    await credentialUtils.verifyTagConflict(userId, tag)
    const encryptedPassword = await encryptUtils.encryptData(password)

    await credentialRepository.insert({userId, url, tag, username, password: encryptedPassword})
}

export async function getCredentials(userId: number) {
    const credentials = await credentialRepository.findByUserId(userId)
    const decryptedcredentials = credentialUtils.returnDecryptedCredentialsInArray(credentials)
    return decryptedcredentials
}

export async function getCredentialsById(userId: number, credentialsId: number) {
    const credentials = await credentialRepository.findByCredentialsId(userId, credentialsId)
    if (!credentials) throw {code: 'search_failed', message: 'Given id does not exist or belongs to another user'}
    const decryptedcredentials = credentialUtils.returnDecryptedCredentials(credentials)
    return decryptedcredentials
}

