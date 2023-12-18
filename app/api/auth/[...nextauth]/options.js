import User from "@/models/regmodel"
// import bcrypt from "bcryptjs/dist/bcrypt"
import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";

export const options = {
  providers: [
    GitHubProvider({
      profile(profile) {

        // profile.userrole = "GitHub User"
        let userRole = "GitHub User"

        if (profile?.email == "mathsatoka111@gmail.com") {
          profile.userRole = "admin"
        }

        profile.userRole = "Github user"
        console.log(profile, "profile Github");
        return {
          ...profile
        }


      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_Secret,
    }),

    GoogleProvider({
      profile(profile) {
        console.log(profile, "Profile Google");

        let userRole = "Google User";
        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        }
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_Secret,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "your-email"
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "your-password"
        }
      },
      async authorize(credentials) {
        try {
          const foundUser = await User.findOne({ email: credentials.email }).lean().exec();

          if (foundUser) {
            
            console.log("User Exists");

            const match = await bcrypt.compare(credentials.password, foundUser.password);

            if (match) {

              console.log("Good pass");

              delete foundUser.password;
              foundUser.role = "Unverified Email";

              return foundUser;
            }
          }
        } catch (error) {
          console.log(error);
        }

        return null;
      }


      // async authorize(credentials) {
      //   try {
      //     const foundUser = await User.findOne({ email: credentials.email }).lean().exec();

      //     if (foundUser) {
      //       console.log("User Exists");

      //       const match = await bcrypt.compare(credentials.password, foundUser.password);

      //       if (match) {
      //         console.log("Good pass");

      //         delete foundUser.password;
      //         foundUser["role"] = "Unverified Email";

      //         return foundUser;
      //       }
      //     }
      //   } catch (error) {
      //     console.log(error);
      //   }

      //   return null;
      // }

    })

  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;

      return token
    },

    async sessionStorage({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session
    }
  }
}
