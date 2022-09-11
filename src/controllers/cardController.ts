import { Request, Response } from 'express'

import * as cardService from '../services/cardService'

import * as cardTypes from '../types/cardTypes'

export async function insertCard(req: Request, res: Response) {
    const userId = Number(res.locals.userId)
    const { tag, number, owner, securityCode, expirationDate, password, isVirtual, type }: 
    {
        tag: string, 
        number: string | number, 
        owner: string, 
        securityCode: string | number, 
        expirationDate: string, 
        password: string | number, 
        isVirtual: boolean, 
        type: cardTypes.cardTypes
    } = req.body

    await cardService.insertCard(userId, tag, String(number), owner, String(securityCode), expirationDate, String(password), isVirtual, type)

    res.sendStatus(201)
}

export async function getCards(req: Request, res: Response) {
    const userId = Number(res.locals.userId)
    const cards = await cardService.getCards(userId)

    res.status(200).send(cards)
}

export async function getCardById(req: Request, res: Response) {
    const userId = Number(res.locals.userId)
    const id = Number(req.params.id)
    const card = await cardService.getCardById(userId, id)

    res.status(200).send(card)
}

export async function deleteCard(req: Request, res: Response) {
    const userId = Number(res.locals.userId)
    const id = Number(req.params.id)
    await cardService.deleteCard(userId, id)

    res.sendStatus(200)
}