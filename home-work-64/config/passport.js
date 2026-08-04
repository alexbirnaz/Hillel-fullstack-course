import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcryptjs";
import { users } from "../data/users.js";

passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        const user = users.find((u) => u.email === email);

        if (!user) {
          return done(null, false, { message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
          return done(null, false, { message: "Wrong password" });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    },
  ),
);

passport.serializeUser((user, done) => {
  done(null, user.email);
});

passport.deserializeUser((email, done) => {
  const user = users.find((u) => u.email === email);
  done(null, user);
});

export default passport;
