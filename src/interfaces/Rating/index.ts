export interface Rating {
    id: string,
    rate: number,
    description: string,
    createdAt: Date,
    userId: string,
    bookId: string,
}