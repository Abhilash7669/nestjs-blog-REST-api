import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';
import { CreatePostsDto } from 'src/posts/dto/create-posts.dto';
import { DeletePostsParamsDto } from 'src/posts/dto/delete-posts-params.dto';
import { GetPostsParamsDto } from 'src/posts/dto/get-posts-params.dto';
import { PatchPostsDto } from 'src/posts/dto/patch-posts.dto';
import { PatchPostsParamsDto } from 'src/posts/dto/patch-posts.params.dto';
import { PostsService } from 'src/posts/providers/posts.service';
import { DeletePostResponse } from 'src/posts/res/delete-post.res';

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

  /**
   * Updates a post in the database
   */
  @ApiOperation({
    description: 'Updates a post',
  })
  @ApiParam({
    name: 'id',
    description: 'Post id passed to route param',
    required: true,
  })
  @Patch('/:id')
  update(
    @Body() patchPostsDto: PatchPostsDto,
    @Param() patchPostsParamsDto: PatchPostsParamsDto,
  ) {
    return this.postsService.update(patchPostsDto, patchPostsParamsDto.id);
  }

  /**
   * Deletes one post from the database
   * @param id
   * @returns Promise<DeletePostResponse>
   */
  @ApiOperation({
    description: 'Deletes one post from the database',
  })
  @ApiParam({
    name: 'id',
    description: 'Post id passed to params to be deleted',
    required: true,
  })
  @ApiResponse({
    status: 200,
    type: Promise<DeletePostResponse>,
    description: '{deleted: true, id: postId }',
  })
  @Delete('/:id')
  public delete(
    @Param() deletePostsParamsDto: DeletePostsParamsDto,
  ): Promise<DeletePostResponse> {
    return this.postsService.delete(deletePostsParamsDto.id);
  }
}
