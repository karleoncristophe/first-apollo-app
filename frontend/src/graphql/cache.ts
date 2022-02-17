import { InMemoryCache, makeVar } from "@apollo/client";
import { localUser, token } from "./storage";

export const usersVar = makeVar(localUser);

export const tokenVar = makeVar<boolean>(!!token);

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        token: {
          read() {
            return tokenVar();
          },
        },
        localUser: {
          read() {
            return usersVar();
          },
        },
      },
    },
  },
});
