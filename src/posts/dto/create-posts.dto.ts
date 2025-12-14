import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { CreatePostsMetaDataDto } from 'src/posts/dto/create-posts-metadata.dto';
import { postStatus } from 'src/posts/enum/postStatus.enum';
import { postType } from 'src/posts/enum/postType.enum';

export class CreatePostsDto {
  @ApiProperty({
    name: 'title',
    description: 'Title of the post',
    example: 'Nestjs Blog',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(96, { message: 'Title has maximum length of 96 characters' })
  title: string;

  @ApiProperty({
    name: 'postType',
    description: 'This is the type of the post',
    enum: postType,
    example: postType.POST,
  })
  @IsNotEmpty()
  @IsEnum(postType, {
    message: 'Valid Post Type is required',
  })
  postType: postType;

  @ApiProperty({
    name: 'slug',
    description: 'Slug for the post',
    example: 'nestjs-blog',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(96, { message: 'Slug has a maximum character of 96' })
  slug: string;

  @ApiProperty({
    name: 'status',
    description: 'Status of the post',
    enum: postStatus,
    example: postStatus.DRAFT,
  })
  @IsNotEmpty()
  @IsEnum(postStatus, {
    message: 'Valid Post Status is required',
  })
  status: postStatus;

  @ApiPropertyOptional({
    name: 'content',
    description: 'Content of the post, this is optional',
    example: 'Hello World! From Nestjs',
    required: false,
  })
  @IsString()
  @IsOptional()
  @MaxLength(1024, { message: 'Max character of 1024' })
  content?: string;

  @ApiPropertyOptional({
    name: 'schema',
    example: '{"id":"123","name":"John Doe","active":true}',
    required: false,
  })
  @IsOptional()
  @IsJSON()
  @MaxLength(1024, { message: 'Max character of 1024' })
  schema?: string;

  @ApiPropertyOptional({
    name: 'featuredImageUrl',
    description: 'This is the cdn image url',
    example:
      'https://images.hdqwalls.com/download/goku-by-bosslogic-4k-on-1280x1024.jpg',
    required: false,
  })
  @IsUrl()
  @IsOptional()
  @MaxLength(1024, { message: 'Max character of 1024' })
  featuredImageUrl?: string;

  @ApiProperty({
    name: 'publishedOn',
    example: '2025-12-10T07:45:32+0000',
    required: true,
  })
  @IsISO8601()
  @IsOptional()
  publishedOn: Date;

  @ApiPropertyOptional({
    name: 'tags',
    description: 'An array of strings, optional tags for post',
    example: ['Nestjs', 'Blog with Nestjs'],
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tags?: Array<string>;

  @ApiProperty({
    type: 'array',
    required: false,
    name: 'metaOptions',
    example: [{ key: 'value', value: 'Value hjere' }],
    items: {
      type: 'object',
      properties: {
        key: {
          type: 'string',
          description:
            'The key can be any string identifier for your meta option',
          example: 'metaTitle',
        },
        value: {
          type: 'any',
          description: 'value for your key-value pair',
          example: 'Nestjs',
        },
      },
    },
  })
  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreatePostsMetaDataDto)
  metaOptions?: Array<CreatePostsMetaDataDto>;
}
