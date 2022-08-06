import NextAuth from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { db } from "../../../util/db"



export default NextAuth({
    adapter: PrismaAdapter(db),
    
 
})