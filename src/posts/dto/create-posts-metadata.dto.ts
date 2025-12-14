import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostsMetaDataDto {
  @IsString()
  @IsNotEmpty()
  key: string;

  @IsNotEmpty()
  value: unknown;
}
