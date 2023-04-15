import { IsString, IsNotEmpty, MaxLength,
    MinLength } from 'class-validator';

export class createDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    title: string;
   
    @IsNotEmpty()
    @IsString()
    @MaxLength(330)
    description: string;
   
    @IsNotEmpty()
    @IsString()
    price: string;
} 
