import { Model } from "sequelize-typescript";
import { Likes } from "./likes.entity";
import { Comments } from "./comments.entity";
import { Retweets } from "./retweets.entity";
export declare class Tweet extends Model {
    text: string;
    user_id: number;
    likes: Likes[];
    comments: Comments[];
    retweets: Retweets[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
