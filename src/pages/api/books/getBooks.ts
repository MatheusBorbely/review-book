import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { NextApiRequest, NextApiResponse } from "next";

export interface Book {
    id: string,
    name: string,
    author: string,
    cover_url: string,
    rate: number,
}

const ParamsSchema = z.object({
    limit: z.number().default(4), 
    order: z.enum(['DESC', 'CRESC']).default('DESC'),
});

export default async function getBooks( req: NextApiRequest, res: NextApiResponse){
    
    const { limit, order } = ParamsSchema.parse(req.query);

   
    const books: Book[] = await prisma.$queryRawUnsafe(`
        SELECT b.id, b.name, b.author, b.cover_url, r.rate
        FROM books b
        LEFT JOIN ratings r ON b.id = r.book_id
        GROUP BY b.id
        ORDER BY AVG(r.rate) ${order}
        LIMIT ${limit}
    `);

    if(!books) return res.status(200).end();
   
    const bookResponse = books.map(({id, name, author, rate, cover_url}) => {
        return {
            id, 
            name,
            author,
            rate,
            cover: cover_url,
        }
    })

    return res.status(200).json(bookResponse);
}