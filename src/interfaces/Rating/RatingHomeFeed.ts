export interface RatingHomeFeed {
    id: string,
    rate: number,
    description: string,
    createdAt: Date,
    book:{
        name: string,
        author: string,
        cover: string,
    },
    user:{
        id: string,
        name: string,
        avatar: string,
    }
}