import prisma from "@/shared/lib/db"
import {AuthOptions} from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import GithubProvider from "next-auth/providers/github"
import { compact } from "lodash-es"
import { privateConfig } from "@/shared/config/private"

export const nextAuthConfig: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: compact([
        privateConfig.GITHUB_ID && privateConfig.GITHUB_SECRET &&
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? '',
            clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
    ])
}