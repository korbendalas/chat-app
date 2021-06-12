import { Injectable, Inject } from "@nestjs/common";
import { User } from "./user.entity";
import { UserDto } from "./user.dto";
import { USER_REPOSITORY } from "../../constants";

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User
  ) {}

  async create(user): Promise<User> {
    return await this.userRepository.create<User>(user);
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { email } });
  }

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }
}