import express from 'express'

import { 
    insertCredential,
    getCredentials,
    getCredentialsById
} from '../controllers/credentialController'
import { 
    validateInsertCredentialReqBody, 
    validateCredentialsReqParams 
} from '../middlewares/credentialMiddleware'
import { verifyToken } from '../middlewares/authMiddleware'

const credentialRouter = express.Router()

credentialRouter.post('/credentials', verifyToken, validateInsertCredentialReqBody, insertCredential)
credentialRouter.get('/credentials', verifyToken, getCredentials)
credentialRouter.get('/credentials/:id', verifyToken, validateCredentialsReqParams, getCredentialsById)

export default credentialRouter