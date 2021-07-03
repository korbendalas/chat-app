import { AuthService } from "./auth.service";
import { UserDto } from "../users/user.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        user: any;
        token: string;
    }>;
    signUp(user: UserDto): Promise<{
        user: any;
        token: string;
    }>;
}
