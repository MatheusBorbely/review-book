import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler( req: NextApiRequest, res: NextApiResponse){

    if(req.method !== 'GET') return res.status(405).end();
    
    const feed = await prisma.book.findMany();

    if(!feed) return res.status(200).end();

    return res.status(200).json(feed)
}