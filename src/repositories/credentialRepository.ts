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