export interface ICard {
    id: number
    userId: number
    tag: string 
    number: string 
    owner: string 
    securityCode: string 
    expirationDate: string 
    password: string 
    isVirtual: boolean
    type: string 
}

export type ICardInsertData = Omit<ICard, 'id'>
