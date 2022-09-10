export interface User {
    id: number
    email: string
    password: string
}

export type userInsertData = Omit<User, 'id'>