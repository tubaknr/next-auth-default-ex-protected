import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from "next-auth/providers/credentials"
;
// 'options' object in 'NextAuthOptions' type.
// export: accessible from other files.
// const: this is a constant variable called 'options'. it's type is 'NextAuthOptions'.

// openssl rand -base64 32 ----> package.json ile aynı dizinde .env.local dosyası oluştur ve içerisine şifreyi koy.
export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "Your-cool-username",
                },
                password: {
                    label: "Password:",
                    type: "password",
                    palceholder: "Your-password",
                }
            },
            async authorize(credentials){
                // https://next-auth.js.org/providers/credentials
                const user = {id: "42", name: "Tuba", password: "nextauth"}

                if (credentials?.username === user.name && credentials?.password === user.password){
                    return user;
                }
                else{
                    return null;
                }
            }
        })
    ],
    
}