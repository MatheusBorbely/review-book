import { NextApiRequest, NextApiResponse } from "next";
import getAllRating from "./getAllRatings";

export default async function handler( req: NextApiRequest, res: NextApiResponse){

    if(req.method === 'GET') return getAllRating(req, res);

    return res.status(405).end();
}