import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/lib/prisma';

console.log("Configuring NextAuth...");

const handler = NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "michael@antigravity.io" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                console.log("Authorize attempt for:", credentials?.email);
                try {
                    // This is a dummy authorize for the demo
                    if (credentials?.email === "michael@antigravity.io" && credentials?.password === "password") {
                        const user = await prisma.user.findUnique({
                            where: { email: credentials.email }
                        });
                        console.log("User found:", !!user);
                        return user ? { id: user.id, name: user.name, email: user.email } : null;
                    }
                    return null;
                } catch (error) {
                    console.error("Auth authorize error:", error);
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: '/auth/signin',
    },
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET || 'your-secret',
    callbacks: {
        async session({ session, token }) {
            return session;
        }
    }
});

export { handler as GET, handler as POST };
