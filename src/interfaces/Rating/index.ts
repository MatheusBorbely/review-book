export interface Rating {
    id: string,
    rate: number,
    description: string,
    created_at: Date,
    user_id: string,
    book_id: string,
}