import { prismaClient } from "../../db";
import { GraphqlContext } from "../../interfaces";
import { Tweet as PrismaTweet } from '@prisma/client';


interface createTweetPayload{
        content: string
        imageURL?: string
}


const mutations={
    createTweet: async (parent:any,{payload}:{payload: createTweetPayload},ctx:GraphqlContext)=>{
        if(!ctx.user) throw new Error("You are not authenticated");
       const tweet = await prismaClient.tweet.create({
            data:{
                content: payload.content,
                imageURL: payload.imageURL,
                author: {connect:{id:ctx.user.id}}

            }
        })
        return tweet
    }
}

const queries={
    getAllTweets:()=>prismaClient.tweet.findMany({orderBy:{createdAt:"desc"}})
}

const extraResolver ={
    Tweet:{
        author: (parent:PrismaTweet)=>{
           return prismaClient.user.findUnique({where:{id:parent.authorId}})
        }
    }
}

export const resolvers = {mutations,extraResolver,queries}