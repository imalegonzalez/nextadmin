import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDb } from "./lib/utils";
import { User } from "./lib/models";
import bcrypt from "bcrypt"


const login = async (credentials) => {
    try {
      connectToDb();
      const user = await User.findOne({ username: credentials.username });
    //   console.log(user)
      if (!user) throw new Error("Wrong credentials!");
  
      const isPasswordCorrect =  await bcrypt.compare(
        credentials.password,
        user.password
      );
        if (!isPasswordCorrect) throw new Error("ESTA MAAAAAAAAAAAAAAAL!");
      return user;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to login!");
    }
  };

  export const { signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
      CredentialsProvider({
        async authorize(credentials) {
          try {
            const user = await login(credentials);
            return user;
          } catch (err) {
            return null;
          }
        },
      }),
    ],
    callbacks:{
        async jwt({token, user}){
            if(user){
                token.username = user.username
                token.img = user.img
                token.isAdmin = user.isAdmin
            }
            return token;
        },
        async session({session, token}){
            if(token){
                session.user.username = token.username
                session.user.img = token.img
                session.isAdmin = token.isAdmin
            }
            return token;
        },

    }
})

// export const {signIn, signOut, auth} = NextAuth({
//     ...authConfig,
//     providers: [
//         CredentialsProvider({
    
//           async authorize(credentials) {
//             try {
//                 await login(credentials);
//                 console.log(user)
//                 return user;
//             } catch (error) {
//                 return null;
//             }
//           }
//         })
//       ]
//   })

