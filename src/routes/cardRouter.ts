import express from 'express'

import { 
    insertCard, 
    getCards,
    getCardById, 
    deleteCard
} from '../controllers/cardController'
import { validatePostCardReqBody } from '../middlewares/cardMiddleware'
import { verifyToken } from '../middlewares/authMiddleware'
import { validateReqParamsId } from '../middlewares/reqParamsMiddleware'

const cardRouter = express.Router()

cardRouter.post('/cards', verifyToken, validatePostCardReqBody, insertCard)
cardRouter.get('/cards', verifyToken, getCards)
cardRouter.get('/cards/:id', verifyToken, validateReqParamsId, getCardById)
cardRouter.delete('/cards/:id', verifyToken, validateReqParamsId, deleteCard)

export default cardRouter