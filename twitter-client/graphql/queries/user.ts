import { graphql } from "../../gql";

export const VerifyUserGoogleTokenQuery = graphql(`
  #graphql
  query verifyUserGoogleToken($token: String!) {
    verifyGoogleToken(token: $token)
  }
`);

export const getCurrentUserQuery = graphql(`
  query GetCurrentUser {
    getCurrentUser {
      id
      email
      firstName
      lastName
      profileImageUrl
    }
  }
`);
