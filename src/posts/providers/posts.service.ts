import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostsDto } from 'src/posts/dto/create-posts.dto';
import { Post } from 'src/posts/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}

  findAll() {
    return `Found all`;
  }

  findOne(id: number) {
    return id;
  }

  create(createPostsDto: CreatePostsDto) {
    return createPostsDto;
  }
}
