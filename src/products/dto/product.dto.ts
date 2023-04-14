import { IsString, IsNotEmpty } from 'class-validator';

export class createDto {
    @IsNotEmpty()
    @IsString()
    title: string;
   
    @IsNotEmpty()
    @IsString()
    description: string;
   
    @IsNotEmpty()
    @IsString()
    price: string;
} 
