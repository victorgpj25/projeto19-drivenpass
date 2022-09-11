import * as credentialRepository from '../repositories/credentialRepository'

import * as credentialUtils from "../utils/credentialUtils"
import * as encryptUtils from '../utils/encryptUtils'

export async function insertCredential(userId: number, url: string, tag: string, username: string, password: string) {
    await credentialUtils.verifyTagConflict(userId, tag)
    const encryptedPassword = await encryptUtils.encryptData(password)

    await credentialRepository.insert({url, tag, username, password: encryptedPassword})
}

