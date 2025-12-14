import { PartialType } from '@nestjs/swagger';
import { CreatePostsDto } from 'src/posts/dto/create-posts.dto';

export class PatchPostsDto extends PartialType(CreatePostsDto) {}
