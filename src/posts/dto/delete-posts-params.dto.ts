import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';

export class DeletePostsParamsDto {
  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  id: number;
}
