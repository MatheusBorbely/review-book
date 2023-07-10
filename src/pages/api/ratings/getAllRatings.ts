import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getAllRating( req: NextApiRequest, res: NextApiResponse){
    
    const feed = await prisma.rating.findMany({
        include:{
            book:{
                select:{
                    name: true,
                    author: true,
                    cover_url: true,   
                }
            },
            user: {
                select: {
                  id: true,
                  name: true,
                  avatar_url: true,
                },
            },
        }
    });

    if(!feed) return res.status(200).end();

    const feedResponse = feed.map((rating) => {
       return {
            id: rating.id,
            rate: rating.rate,
            description: rating.description,
            createdAt: rating.created_at,
            book:{
                name: rating.book.name,
                author: rating.book.author,
                cover: rating.book.cover_url,
            },
            user:{
                id: rating.user.id,
                name: rating.user.name,
                avatar: rating.user.avatar_url,
            }
       } 
    })

    return res.status(200).json(feedResponse)
}