import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        user: any;
        token: string;
    }>;
    create(user: any): Promise<{
        user: any;
        token: string;
    }>;
    private generateToken;
    private hashPassword;
    private comparePassword;
}
