import express from 'express'

import { insertCredential } from '../controllers/credentialController'
import { validateInsertCredentialReqBody } from '../middlewares/credentialMiddleware'

const credentialRouter = express.Router()

credentialRouter.post('/credentials', verifyToken, validateInsertCredentialReqBody, insertCredential)

export default credentialRouter