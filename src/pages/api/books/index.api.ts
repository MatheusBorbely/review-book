import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import getBooks from "./getBooks";

export default async function handler( req: NextApiRequest, res: NextApiResponse){
    getBooks(req,res)
   

}