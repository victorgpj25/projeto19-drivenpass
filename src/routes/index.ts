import express from 'express'

import userRouter from './userRouter'
import credentialRouter from './credentialRouter'
import noteRouter from './noteRouter'
import cardRouter from './cardRouter'
import connectionRouter from './connectionRouter'

const router = express.Router()

router.use(userRouter)
router.use(credentialRouter)
router.use(noteRouter)
router.use(cardRouter)
router.use(connectionRouter)

export default router