import { NextApiRequest, NextApiResponse } from "next";
import getBooks from "./getBooks";

export default async function handler( req: NextApiRequest, res: NextApiResponse){

    if(req.method === 'GET') return getBooks(req,res);

    return res.status(405).end();
}