import express from 'express'

import userRouter from './userRouter'
import credentialRouter from './credentialRouter'

const router = express.Router()

router.use(userRouter)
router.use(credentialRouter)

export default router