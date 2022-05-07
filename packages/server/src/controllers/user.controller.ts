import { Body, Controller, Delete, Get, HttpStatus, Param, Post, UploadedFiles, Put, Req, Res } from "@nestjs/common";
import { User } from "../model/user.schema";
import { UserService } from "../model/user.service";
import { JwtService } from '@nestjs/jwt'
import { response } from "express";

@Controller('api/users')
export class UserController {
    constructor(private readonly userService: UserService, private jwtService: JwtService) {

    }
    @Post ('/signup')
    async Signup(@Res() response, @Body() user: User){
        const newUser = await this.userService.signup(user);
        return response.status(HttpStatus.CREATED).json({newUser});
    }

    @Post('/login')
    async Login(@Res() response, @Body() user: User){
        const token = await this.userService.signin(user, this.jwtService);
        return response.status(HttpStatus.OK).json(token);
    }
}