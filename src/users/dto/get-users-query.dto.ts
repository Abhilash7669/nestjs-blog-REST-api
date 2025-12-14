import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

/**
 * Declaring the Query for getting users
 */
export class GetUsersQueryDto {
  /**
   * gets the number of entries of data
   */
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  limit?: number;

  /**
   * Gets the position of the page number
   */
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  page?: number;
}
