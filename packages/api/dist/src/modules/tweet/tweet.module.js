"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TweetModule = void 0;
const common_1 = require("@nestjs/common");
const tweet_controller_1 = require("./tweet.controller");
const tweet_service_1 = require("./tweet.service");
const sequelize_1 = require("@nestjs/sequelize");
const tweet_entity_1 = require("./entities/tweet.entity");
const likes_entity_1 = require("./entities/likes.entity");
const comments_entity_1 = require("./entities/comments.entity");
const retweets_entity_1 = require("./entities/retweets.entity");
let TweetModule = class TweetModule {
};
TweetModule = __decorate([
    common_1.Module({
        imports: [sequelize_1.SequelizeModule.forFeature([tweet_entity_1.Tweet, likes_entity_1.Likes, comments_entity_1.Comments, retweets_entity_1.Retweets])],
        controllers: [tweet_controller_1.TweetController],
        providers: [tweet_service_1.TweetService],
    })
], TweetModule);
exports.TweetModule = TweetModule;
//# sourceMappingURL=tweet.module.js.map