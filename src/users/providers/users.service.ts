import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsersDto } from 'src/users/dto/create-users.dto';
import { GetUsersQueryDto } from 'src/users/dto/get-users-query.dto';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';

/**
 * Service for Users
 */
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  /**
   * Finds all users from the database with optional query to filter and has default query values
   * @param getUsersQueryDto
   * @returns string
   */
  findAll(getUsersQueryDto: GetUsersQueryDto) {
    return `Found all users with query, limit: ${getUsersQueryDto.limit} and page: ${getUsersQueryDto.page}`;
  }

  /**
   * Finds one user from the database with id
   * @param id
   * @returns string
   */
  findOne(id: number) {
    return `${id} found`;
  }

  /**
   * Creates a user in the database
   * @param createUsersDto
   * @returns createUserDto
   */
  create(createUsersDto: CreateUsersDto) {
    return createUsersDto;
  }
}
