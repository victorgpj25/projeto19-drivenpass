export interface IConnection {
    id: number
    userId: number
    tag: string 
    network: string
    password: string 
}

export type IConnectionInsertData = Omit<IConnection, 'id'>