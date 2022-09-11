import { prisma } from '../config/database'

import * as cardTypes from '../types/cardTypes'

export async function insert(cardInsertData: cardTypes.ICardInsertData) {
    await prisma.cards.create({
        data: cardInsertData
    })
}

export async function findByTagAndUserId(userId: number, tag: string) {
    const card: cardTypes.ICard | null = await prisma.cards.findFirst({
        where: {
            userId,
            tag
        }
    })

    return card
}

export async function findByUserId(userId: number) {
    const cards: cardTypes.ICard[] | null = await prisma.cards.findMany({
        where: {
            userId
        }
    })
    return cards
}

export async function findByCardId(userId: number, cardId: number) {
    const card: cardTypes.ICard | null = await prisma.cards.findFirst({
        where: {
            id: cardId,
            userId
        }
    })
    return card
}

export async function remove(cardId: number) {
    await prisma.cards.delete({
        where: {
            id: cardId
        }
    })
}