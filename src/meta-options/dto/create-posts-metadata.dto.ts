import { ApiProperty } from '@nestjs/swagger';
import { IsJSON, IsNotEmpty } from 'class-validator';

export class CreatePostsMetaDataDto {
  @ApiProperty({
    name: 'metaValue',
    description: 'Must be a JSON value',
    example: '{"sideBarEnabled": true}',
  })
  @IsNotEmpty()
  @IsJSON()
  metaValue: string;
}
