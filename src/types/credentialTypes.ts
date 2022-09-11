export interface ICredential {
    id: number
    userId: number
    tag: string
    url: string
    username: string
    password: string
}

export type ICredentialInsertData = Omit<ICredential, 'id'>
