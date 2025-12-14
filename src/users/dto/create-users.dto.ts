import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

/**
 * Declaring Create Users DTO
 */
export class CreateUsersDto {
  /**
   * Users first name
   * String
   * Max length of 96 characters
   * Required
   */
  @ApiProperty({
    name: 'firstName',
    type: 'string',
    description:
      'First name of the user, must be a string of max length 96 character',
    example: 'Abhilash',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(96, { message: 'First Name has a maximum 96 characters' })
  firstName: string;

  /**
   * Users last name
   * String and optional
   * Max length of 96 characters
   * Opitonal
   */
  @ApiProperty({
    name: 'lastName',
    type: 'string',
    description:
      'Last name of the user, must be a string of max length 96 character',
    example: 'SK',
    required: false,
  })
  @IsString()
  @IsOptional()
  @MaxLength(96, { message: 'First Name has a maximum 96 characters' })
  lastName?: string;

  /**
   * Email of user
   * string and required
   * max length of 96 characters
   */
  @ApiProperty({
    name: 'email',
    type: 'string',
    description:
      'Email of the user, must be a string of max length 96 character',
    example: 'abhi@gmail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(96, { message: 'First Name has a maximum 96 characters' })
  email: string;

  /**
   * password of user
   * string and required
   * max length of 96 character
   */
  @ApiProperty({
    name: 'password',
    type: 'string',
    description:
      'Password of the user, must be a string of max length 96 character',
    example: 'Kaizen47$',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(96, { message: 'First Name has a maximum 96 characters' })
  password: string;
}
