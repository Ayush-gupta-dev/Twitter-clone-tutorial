import { graphql } from "../../gql";

export const VerifyUserGoogleTokenQuery= graphql(`
    #graphql
    query verifyUserGoogleToken($token:String!){
    verifyGoogleToken(token:$token)
    }
`);