import { Model } from "sequelize-typescript";
export declare class User extends Model {
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
