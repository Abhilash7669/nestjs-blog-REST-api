import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
   * @returns user
   */
  async findOne(id: number) {
    const user = await this.userRepository.findOneBy({
      id,
    });
    return user;
  }

  async findUserPosts(id: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
      relations: {
        posts: true,
      },
    });

    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  /**
   * Creates a user in the database
   * @param createUsersDto
   * @returns createUserDto
   */
  async create(createUsersDto: CreateUsersDto) {
    const userExists = await this.userRepository.findOneBy({
      email: createUsersDto.email,
    });

    if (userExists)
      throw new ConflictException('User with same email already exists');

    const createdUser = this.userRepository.create(createUsersDto);
    await this.userRepository.save(createdUser);
    return createdUser;
  }
}
