import { prisma } from '../config/database'

import * as connectionTypes from '../types/connectionTypes'

export async function insert(connectionInsertData: connectionTypes.IConnectionInsertData) {
    await prisma.connections.create({
        data: connectionInsertData
    })
}

export async function findByTagAndUserId(userId: number, tag: string) {
    const connection: connectionTypes.IConnection | null = await prisma.connections.findFirst({
        where: {
            userId,
            tag
        }
    })

    return connection
}

export async function findByUserId(userId: number) {
    const connections: connectionTypes.IConnection[] | null = await prisma.connections.findMany({
        where: {
            userId
        }
    })
    return connections
}

export async function findByConnectionId(userId: number, connectionId: number) {
    const connection: connectionTypes.IConnection | null = await prisma.connections.findFirst({
        where: {
            id: connectionId,
            userId
        }
    })
    return connection
}

export async function remove(connectionId: number) {
    await prisma.connections.delete({
        where: {
            id: connectionId
        }
    })
}