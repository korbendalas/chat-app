"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tweet = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_entity_1 = require("../../users/user.entity");
const likes_entity_1 = require("./likes.entity");
const comments_entity_1 = require("./comments.entity");
const retweets_entity_1 = require("./retweets.entity");
let Tweet = class Tweet extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING(140),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Tweet.prototype, "text", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => user_entity_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Tweet.prototype, "user_id", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => likes_entity_1.Likes),
    __metadata("design:type", Array)
], Tweet.prototype, "likes", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => comments_entity_1.Comments),
    __metadata("design:type", Array)
], Tweet.prototype, "comments", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => retweets_entity_1.Retweets),
    __metadata("design:type", Array)
], Tweet.prototype, "retweets", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Tweet.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], Tweet.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    __metadata("design:type", Date)
], Tweet.prototype, "deletedAt", void 0);
Tweet = __decorate([
    sequelize_typescript_1.Table({
        tableName: "tweet",
        timestamps: true,
    })
], Tweet);
exports.Tweet = Tweet;
//# sourceMappingURL=tweet.entity.js.map