import { Module } from "@nestjs/common";
import { TweetController } from "./tweet.controller";
import { TweetService } from "./tweet.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Tweet } from "./entities/tweet.entity";
import { Likes } from "./entities/likes.entity";
import { Comments } from "./entities/comments.entity";
import { Retweets } from "./entities/retweets.entity";

@Module({
  imports: [SequelizeModule.forFeature([Tweet, Likes, Comments, Retweets])],

  controllers: [TweetController],
  providers: [TweetService],
})
export class TweetModule {}
