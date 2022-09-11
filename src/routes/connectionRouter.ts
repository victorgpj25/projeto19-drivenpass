import express from 'express'

import { 
    insertConnection, 
    getConnections,
    getConnectionById, 
    deleteConnection
} from '../controllers/connectionController'
import { validatePostConnectionReqBody } from '../middlewares/connectionMiddleware'
import { verifyToken } from '../middlewares/authMiddleware'
import { validateReqParamsId } from '../middlewares/reqParamsMiddleware'

const connectionRouter = express.Router()

connectionRouter.post('/connections', verifyToken, validatePostConnectionReqBody, insertConnection)
connectionRouter.get('/connections', verifyToken, getConnections)
connectionRouter.get('/connections/:id', verifyToken, validateReqParamsId, getConnectionById)
connectionRouter.delete('/connections/:id', verifyToken, validateReqParamsId, deleteConnection)

export default connectionRouter