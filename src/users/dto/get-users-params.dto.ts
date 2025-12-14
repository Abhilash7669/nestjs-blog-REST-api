import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';

export class GetUsersParamsDto {
  /**
   * Get users params id
   * number
   */
  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  id: number;
}
