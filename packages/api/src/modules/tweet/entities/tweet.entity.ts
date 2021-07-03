import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  ForeignKey,
  HasMany,
} from "sequelize-typescript";
import { User } from "../../users/user.entity";
import { Likes } from "./likes.entity";
import { Comments } from "./comments.entity";
import { Retweets } from "./retweets.entity";

@Table({
  tableName: "tweet",
  timestamps: true,
})
export class Tweet extends Model {
  @Column({
    type: DataType.STRING(140),
    allowNull: false,
  })
  text: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  user_id: number;

  @HasMany(() => Likes)
  likes: Likes[];

  @HasMany(() => Comments)
  comments: Comments[];

  @HasMany(() => Retweets)
  retweets: Retweets[];

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
