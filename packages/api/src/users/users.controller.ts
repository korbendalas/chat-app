import {Body, Controller, Get, Post} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {UserDto} from "./users.dto";
import {UserService} from "./users.service";

@Controller('users')
export class UsersController {
    constructor (private readonly userService:UserService){}
    //
    // @Get()
    // findAll() : Promise<UserDto[]>{
    //   return  this.prismaService.users.findAll()
    // }
    @Post('user')
    async signupUser(
        @Body() userData: { name?: string; email: string },
    ) {
        return this.userService.createUser(userData);
    }
}
