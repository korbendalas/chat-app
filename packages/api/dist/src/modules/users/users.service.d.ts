import { User } from "./user.entity";
import { UserDto } from "./user.dto";
export declare class UsersService {
    private userModel;
    constructor(userModel: typeof User);
    create(user: UserDto): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    findOneById(id: number): Promise<User>;
}
