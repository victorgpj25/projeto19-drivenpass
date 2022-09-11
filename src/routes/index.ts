import express from 'express'

import userRouter from './userRouter'
import credentialRouter from './credentialRouter'
import noteRouter from './noteRouter'

const router = express.Router()

router.use(userRouter)
router.use(credentialRouter)
router.use(noteRouter)

export default router