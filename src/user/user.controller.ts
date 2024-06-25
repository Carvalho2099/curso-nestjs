/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { User as UserModel } from "@prisma/client";
import { UserService } from './user.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { ValidationPipe } from 'src/validationSchemas/validation.pipe';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    async sgnupUser(
        @Body( new ValidationPipe()) createUserDto: CreateUserDto,
    ): Promise<UserModel> {
        return this.userService.createUser(createUserDto);
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    async getUser(@Param('id', ParseIntPipe) id: number): Promise<Omit<UserModel, 'password'>> {
        return this.userService.user({id});
    }

    @Patch(':id')
    async updateUser(
        @Body(new ValidationPipe()) userData: UpdateUserDto,
        @Param('id', ParseIntPipe) id: number,
    ): Promise<UserModel> {
        return this.userService.updateUser({
            where: {id},
            data: userData,
        });
    }

    @Delete(':id')
    async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<UserModel> {
        return this.userService.deleteUser({id});
    }
}
