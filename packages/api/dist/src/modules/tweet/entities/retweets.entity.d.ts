import { Model } from "sequelize-typescript";
export declare class Retweets extends Model {
    user_id: number;
    tweet_id: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
