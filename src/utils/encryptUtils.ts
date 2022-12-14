import bcrypt from 'bcrypt'
import Cryptr from 'cryptr'
import jwt from 'jsonwebtoken'

const cryptr = new Cryptr(String(process.env.CRYPTR_SECRET) || 'superSecretKey')
const jwtKey = String(process.env.JWT_SECRET) || 'superSecretKey'

export async function encryptUserPassword(password: string) {
    return bcrypt.hash(password, 10)
}

export async function encryptData(encryptThis: string) {
    return cryptr.encrypt(encryptThis)
}

export async function decryptData(decryptThis: string) {
    return cryptr.decrypt(decryptThis)
}


export async function generateUserToken(userId: number) {
    return jwt.sign({ userId }, jwtKey, { expiresIn: 86400 }); // token expires in 24 hours
}


export async function verifyPasswordMatch(password: string, encryptedPassword: string) {
    return bcrypt.compareSync(password, encryptedPassword)
}

export async function validateToken(token: string) {
    try {
        const tokenData = jwt.verify(token, jwtKey)
        return (<any>tokenData).userId
    } catch {
        throw {code: 'invalid_token', message: 'Token validation failed'}
    }
}