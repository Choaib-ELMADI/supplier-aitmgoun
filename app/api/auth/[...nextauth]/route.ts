import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";

import { mergeAnonymosCartIntoUserCart } from "@/lib/db/cart";
import { prisma } from "@/lib/db/prisma";
import { env } from "@/lib/env";



export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        GoogleProvider({
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        session({ session, user }) {
            session.user.id = user.id;

            return session;
        },
    },
    events: {
        async signIn({ user }) {
            await mergeAnonymosCartIntoUserCart(user.id);
        }
    }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };