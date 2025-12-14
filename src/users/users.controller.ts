import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { CreateUsersDto } from 'src/users/dto/create-users.dto';
import { GetUsersParamsDto } from 'src/users/dto/get-users-params.dto';
import { UsersService } from 'src/users/providers/users.service';

/**
 * Controller for users
 */
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Controller to findAll users
   * @param limit
   * @param page
   */
  @ApiOperation({
    description: 'Find all users from the database',
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    description: 'The number of entries per query',
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
    description: 'The position of the page number',
  })
  @Get()
  findAll(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.usersService.findAll({ limit, page });
  }

  /**
   * Controller to find one user with id from params
   * @param getUsersParamsDto
   */
  @ApiOperation({
    description: 'Finds one User from the database',
  })
  @ApiResponse({
    status: 200,
    description: 'User fetched successfully',
  })
  @ApiParam({
    name: 'id',
    description: 'The id of user passed in the route params',
  })
  @Get('/:id')
  findOne(@Param() getUsersParamsDto: GetUsersParamsDto) {
    return this.usersService.findOne(getUsersParamsDto.id);
  }

  /**
   * Controller to create a user
   * @param createUsersDto
   */
  @ApiOperation({
    description: 'Creates a user in the application',
  })
  @ApiResponse({
    status: 201,
    description: 'User has been created successfully with the query',
  })
  @Post()
  create(@Body() createUsersDto: CreateUsersDto) {
    return this.usersService.create(createUsersDto);
  }
}
