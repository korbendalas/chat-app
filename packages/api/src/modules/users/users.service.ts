import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./user.entity";
import { UserDto } from "./user.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User
  ) {}

  async create(user: UserDto): Promise<User> {
    return await this.userModel.create<User>(user);
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userModel.findOne<User>({ where: { email } });
  }

  async findOneById(id: number): Promise<User> {
    return await this.userModel.findOne<User>({ where: { id } });
  }
}
