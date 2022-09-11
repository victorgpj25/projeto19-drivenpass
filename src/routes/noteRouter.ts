import express from 'express'

import { 
    insertNote, 
    getNotes,
    getNotesById 
} from '../controllers/noteController'
import { validatePostNoteReqBody } from '../middlewares/noteMiddleware'
import { verifyToken } from '../middlewares/authMiddleware'
import { validateReqParamsId } from '../middlewares/reqParamsMiddleware'

const noteRouter = express.Router()

noteRouter.post('/notes', verifyToken, validatePostNoteReqBody, insertNote)
noteRouter.get('/notes', verifyToken, getNotes)
noteRouter.get('/notes/:id', verifyToken, validateReqParamsId, getNotesById)

export default noteRouter