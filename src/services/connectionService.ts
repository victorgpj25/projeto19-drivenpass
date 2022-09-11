import * as connectionRepository from '../repositories/connectionRepository'

import * as connectionUtils from "../utils/connectionUtils"
import * as encryptUtils from '../utils/encryptUtils'

export async function insertConnection(userId: number, tag: string, network: string, password: string) {
    await connectionUtils.verifyTagConflict(userId, tag)
    const encryptedPassword = await encryptUtils.encryptData(password)

    await connectionRepository.insert({userId, tag, network, password: encryptedPassword})
}

export async function getConnections(userId: number) {
    const connections = await connectionRepository.findByUserId(userId)
    const decryptedconnections = connectionUtils.returnDecryptedConnectionsInArray(connections)
    return decryptedconnections
}

export async function getConnectionById(userId: number, connectionId: number) {
    const connection = await connectionRepository.findByConnectionId(userId, connectionId)
    if (!connection) throw {code: 'search_failed', message: 'Given id does not exist or belongs to another user'}
    const decryptedConnection = connectionUtils.returnDecryptedConnection(connection)
    return decryptedConnection
}

export async function deleteConnection(userId: number, connectionId: number) {
    const connection = await connectionRepository.findByConnectionId(userId, connectionId)
    if (!connection) throw {code: 'search_failed', message: 'Given id does not exist or belongs to another user'}
    await connectionRepository.remove(connectionId)
}

