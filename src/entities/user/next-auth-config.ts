import prisma from "@/shared/lib/db"
import {AuthOptions} from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import GithubProvider from "next-auth/providers/github"
import EmailProvider from "next-auth/providers/email"
import { compact } from "lodash-es"
import { privateConfig } from "@/shared/config/private"
import { CreateUser, createUserUseCase } from "./_use-cases/create-user"

const prismaAdapter = PrismaAdapter(prisma);

export const nextAuthConfig: AuthOptions = {
    adapter: {
    ...prismaAdapter,
    createUser: (user: CreateUser) => {
        return createUserUseCase.exec(user);
    },
  } as AuthOptions["adapter"],
    callbacks: {
        session: async ({ session, user }) => {
        return {
            ...session,
            user: {
            ...session.user,
            id: user.id,
            role: user.role,
            },
        };
        },
    },
    pages: {
        signIn: "/auth/sign-in",
        newUser: "/auth/new-user",
        verifyRequest: "/auth/verify-request"
    },
    providers: compact([
        EmailProvider({
            server: {
                host: privateConfig.EMAIL_SERVER_HOST,
                port: +privateConfig.EMAIL_SERVER_PORT,
                auth: {
                    user: privateConfig.EMAIL_SERVER_USER,
                    pass: privateConfig.EMAIL_SERVER_PASSWORD
                },
                tls: {
                    rejectUnauthorized: false
                }
            },
            from: privateConfig.EMAIL_FROM
        }),
        privateConfig.GITHUB_ID && privateConfig.GITHUB_SECRET &&
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? '',
            clientSecret: process.env.GITHUB_SECRET ?? '',
            allowDangerousEmailAccountLinking: true
    }),
    ])
}