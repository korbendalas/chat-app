import { Model } from "sequelize-typescript";
export declare class Likes extends Model {
    user_id: number;
    tweet_id: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
