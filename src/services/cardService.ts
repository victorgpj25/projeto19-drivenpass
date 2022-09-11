import * as cardRepository from '../repositories/cardRepository'

import * as cardUtils from '../utils/cardUtils'
import * as encryptUtils from '../utils/encryptUtils'
import * as cardTypes from '../types/cardTypes'

export async function insertCard(userId: number, tag: string, number: string, owner: string, securityCode: string, expirationDate: string, password: string, isVirtual: boolean, type: cardTypes.cardTypes) {
    await cardUtils.verifyTagConflict(userId, tag)
    const encryptedPassword = await encryptUtils.encryptData(password)
    const encryptedSecurityCode = await encryptUtils.encryptData(securityCode)

    await cardRepository.insert({userId, tag, number, owner, securityCode: encryptedSecurityCode, expirationDate, password: encryptedPassword, isVirtual, type })
}

export async function getCards(userId: number) {
    const cards = await cardRepository.findByUserId(userId)
    const decryptedCards = cardUtils.returnDecryptedCardsInArray(cards)
    return decryptedCards
}

export async function getCardById(userId: number, cardId: number) {
    const card = await cardRepository.findByCardId(userId, cardId)
    if (!card) throw {code: 'search_failed', message: 'Given id does not exist or belongs to another user'}
    const decryptedcard = cardUtils.returnDecryptedCard(card)
    return decryptedcard
}

export async function deleteCard(userId: number, cardId: number) {
    const card = await cardRepository.findByCardId(userId, cardId)
    if (!card) throw {code: 'search_failed', message: 'Given id does not exist or belongs to another user'}
    await cardRepository.remove(cardId)
}
