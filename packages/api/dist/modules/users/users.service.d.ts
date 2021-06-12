import { User } from "./user.entity";
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: typeof User);
    create(user: any): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    findOneById(id: number): Promise<User>;
}
