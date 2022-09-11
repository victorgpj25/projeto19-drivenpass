export interface INote {
    id: number
    userId: number
    tag: string
    note: string
}

export type INoteInsertData = Omit<INote, 'id'>