export interface Rating {
    id: string,
    rate: number,
    description: string,
    createdAt: Date,
    user: string,
    book: string,
}