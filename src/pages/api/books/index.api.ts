import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

export default async function handler( req: NextApiRequest, res: NextApiResponse){
    if(req.method !== 'GET') return res.status(405).end();

    const idSchema = z.string()

    const id = idSchema.parse(req.query.bookId);
    
    if(!id) return res.status(400).end();

    const feed = await prisma.book.findUnique({
        where: {
            id,
        } 
    })

    if(!feed) return res.status(200).end();

    return res.status(200).json(feed)
}