import { IsBoolean, IsInt, IsNotEmpty } from 'class-validator';

export class DeletePostResponse {
  @IsBoolean()
  @IsNotEmpty()
  deleted: boolean;

  @IsInt()
  @IsNotEmpty()
  id: number;
}
