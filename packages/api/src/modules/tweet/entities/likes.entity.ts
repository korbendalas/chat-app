import {
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from "sequelize-typescript";
import { User } from "../../users/user.entity";
import { Tweet } from "./tweet.entity";

@Table({
  tableName: "likes",
  timestamps: true,
})
export class Likes extends Model {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id: number;

  @ForeignKey(() => Tweet)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  tweet_id: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
