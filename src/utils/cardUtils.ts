import * as cardRepository from '../repositories/cardRepository'

import * as cardTypes from '../types/cardTypes'
import * as encryptUtils from './encryptUtils'

export async function verifyTagConflict(userId: number, tag: string) {
    const card = await cardRepository.findByTagAndUserId(userId, tag)
    if (card) throw {code: 'tag_conflict', message: 'Given tag is already in use'}
}

export async function returnDecryptedCardsInArray(cards: cardTypes.ICard[]) {
    if (!cards.length) return cards
    cards.forEach(async card => {
        card.password = await encryptUtils.decryptData(card.password)
        card.securityCode = await encryptUtils.decryptData(card.securityCode)
        })
    return cards
}

export async function returnDecryptedCard(card: cardTypes.ICard) {
    if (!card) return card
    const decryptedCard: cardTypes.ICard = {
        id: card.id,
        userId: card.userId,
        tag: card.tag, 
        number: card.number, 
        owner: card.owner, 
        securityCode: await encryptUtils.decryptData(card.securityCode), 
        expirationDate: card.expirationDate, 
        password: await encryptUtils.decryptData(card.password),
        isVirtual: card.isVirtual, 
        type: card.type
        
    }
    return decryptedCard
}