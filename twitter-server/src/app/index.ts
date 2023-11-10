import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServer } from '@apollo/server';
import express from 'express'
import bodyParser from 'body-parser';
import { User } from './user';
import cors from 'cors'
import { GraphqlContext } from '../interfaces';
import JWTService from '../services/jwt';
import { Tweet } from './tweet';

export async function initServer(){
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    const graphqlServer= new ApolloServer<GraphqlContext>({
        typeDefs: `
        ${User.types}
        ${Tweet.types}

            type Query{
               ${User.queries}
               ${Tweet.queries}
            }
            type Mutation{
                ${Tweet.mutations}
            }

        `,
        resolvers: {
            Query:{
                ...User.resolvers.queries,
                ...Tweet.resolvers.queries
            },
            Mutation:{
                ...Tweet.resolvers.mutations
            },
            ...Tweet.resolvers.extraResolver,
            ...User.resolvers.extraResolvers
        },
    });
    await graphqlServer.start();
    app.use("/graphql", expressMiddleware(graphqlServer,{
        context: async({req,res})=>{
            return{
                user:req.headers.authorization? JWTService.decodeToken(req.headers.authorization.split('Bearer ')[1]) : undefined
            }
        }
    }));
    return app;
}