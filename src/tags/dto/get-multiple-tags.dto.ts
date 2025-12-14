import { IsArray, IsInt } from 'class-validator';

export class GetMultipleTagsDto {
  @IsArray()
  @IsInt({ each: true })
  id: Array<number>;
}
