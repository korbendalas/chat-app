import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "../../users/user.entity";
import { Tweet } from "./tweet.entity";

@Table({
  tableName: "comments",
  timestamps: true,
})
export class Comments extends Model {
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
}
