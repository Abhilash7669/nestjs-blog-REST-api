import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';
import { CreatePostsDto } from 'src/posts/dto/create-posts.dto';
import { GetPostsParamsDto } from 'src/posts/dto/get-posts-params.dto';
import { PostsService } from 'src/posts/providers/posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @ApiOperation({
    description: 'Finds all Posts from the database',
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    default: 10,
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
    default: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully fetched posts with query',
  })
  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @ApiOperation({
    description: 'Find one post from the database',
  })
  @ApiParam({
    name: 'id',
    description: 'PostId passed to the route params',
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully fetched post',
  })
  @Get('/:id')
  findOne(@Param() postsParamsDto: GetPostsParamsDto) {
    return this.postsService.findOne(postsParamsDto.id);
  }

  @ApiOperation({
    description: 'Create a post in the application',
  })
  @ApiBody({
    type: CreatePostsDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Post created successfully',
  })
  @Post()
  create(@Body() createPostsDto: CreatePostsDto) {
    return this.postsService.create(createPostsDto);
  }
}
