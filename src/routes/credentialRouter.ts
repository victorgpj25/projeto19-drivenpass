import express from 'express'

import { 
    insertCredential,
    getCredentials,
    getCredentialsById,
    deleteCredentials
} from '../controllers/credentialController'
import { validateInsertCredentialReqBody } from '../middlewares/credentialMiddleware'
import { verifyToken } from '../middlewares/authMiddleware'
import { validateReqParamsId } from '../middlewares/reqParamsMiddleware'

const credentialRouter = express.Router()

credentialRouter.post('/credentials', verifyToken, validateInsertCredentialReqBody, insertCredential)
credentialRouter.get('/credentials', verifyToken, getCredentials)
credentialRouter.get('/credentials/:id', verifyToken, validateReqParamsId, getCredentialsById)
credentialRouter.delete('/credentials/:id', verifyToken, validateReqParamsId, deleteCredentials)

export default credentialRouter