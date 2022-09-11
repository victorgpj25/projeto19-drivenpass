import express from 'express'

import { insertNote } from '../controllers/noteController'
import { validatePostNoteReqBody } from '../middlewares/noteMiddleware'
import { verifyToken } from '../middlewares/authMiddleware'

const noteRouter = express.Router()

noteRouter.post('/notes', verifyToken, validatePostNoteReqBody, insertNote)

export default noteRouter