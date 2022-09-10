import bcrypt from 'bcrypt'
import Cryptr from 'cryptr'

const cryptr = new Cryptr(String(process.env.CRYPTR_KEY) || 'superSecretKey')

export async function encryptUserPassword(password: string) {
    return bcrypt.hash(password, 10)
}