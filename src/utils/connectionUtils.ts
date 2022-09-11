import * as connectionRepository from '../repositories/connectionRepository'

import * as connectionTypes from '../types/connectionTypes'
import * as encryptUtils from './encryptUtils'

export async function verifyTagConflict(userId: number, tag: string) {
    const connection = await connectionRepository.findByTagAndUserId(userId, tag)
    if (connection) throw {code: 'tag_conflict', message: 'Given tag is already in use'}
}

export async function returnDecryptedConnectionsInArray(connections: connectionTypes.IConnection[]) {
    if (!connections.length) return connections
    connections.forEach(async connection => {
        connection.password = await encryptUtils.decryptData(connection.password)
        })
    return connections
}

export async function returnDecryptedConnection(connection: connectionTypes.IConnection) {
    if (!connection) return connection
    const decryptedConnection: connectionTypes.IConnection = {
        id: connection.id,
        userId: connection.userId,
        tag: connection.tag, 
        network: connection.network,
        password: await encryptUtils.decryptData(connection.password), 
    }
    return decryptedConnection
}