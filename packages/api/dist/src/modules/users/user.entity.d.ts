import { Model } from "sequelize-typescript";
export declare class User extends Model {
    name: string;
    email: string;
    password: string;
    gender: string;
    creationDate: Date;
    updatedOn: Date;
    deletionDate: Date;
}
