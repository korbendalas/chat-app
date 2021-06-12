import { UserService } from "./users.service";
export declare class UsersController {
    private readonly userService;
    constructor(userService: UserService);
    signupUser(userData: {
        name?: string;
        email: string;
    }): Promise<any>;
}
