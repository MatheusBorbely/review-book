import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { NextApiRequest, NextApiResponse } from "next";
import { Book } from "@/interfaces/Book/Book";

const ParamsSchema = z.object({
    limit: z.number().default(30), 
    order: z.enum(['DESC', 'CRESC']).default('DESC'),
});

export default async function getBooks( req: NextApiRequest, res: NextApiResponse){
    
    const { limit, order } = ParamsSchema.parse(req.query);

   
    const books: Book[] = await prisma.$queryRaw`
        SELECT b.id, b.name, b.author, b.cover_url, r.rate
        FROM books b
        LEFT JOIN ratings r ON b.id = r.book_id
        GROUP BY b.id
        ORDER BY AVG(r.rate) DESC
        LIMIT ${limit}
    `;

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