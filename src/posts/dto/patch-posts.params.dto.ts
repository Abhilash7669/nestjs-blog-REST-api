import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';

export class PatchPostsParamsDto {
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  id: number;
}
