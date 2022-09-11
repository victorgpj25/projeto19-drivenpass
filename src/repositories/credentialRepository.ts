import { prisma } from '../config/database'

import * as credentialTypes from '../types/credentialTypes'

export async function insert(credentialInsertData: credentialTypes.ICredentialInsertData) {
    await prisma.credentials.create({
        data: credentialInsertData
    })
}

export async function findByTagAndUserId(userId: number, tag: string) {
    const credential: credentialTypes.ICredential | null = await prisma.credentials.findFirst({
        where: {
            userId,
            tag
        }
    })
    return credential
}

export async function findByUserId(userId: number) {
    const credentials: credentialTypes.ICredential[] | null = await prisma.credentials.findMany({
        where: {
            userId
        }
    })
    return credentials
}

export async function findByCredentialsId(userId: number, credentialsId: number) {
    const credentials: credentialTypes.ICredential | null = await prisma.credentials.findFirst({
        where: {
            id: credentialsId,
            userId
        }
    })
    return credentials
}

export async function remove(credentialsId: number) {
    await prisma.credentials.delete({
        where: {
            id: credentialsId
        }
    })
}