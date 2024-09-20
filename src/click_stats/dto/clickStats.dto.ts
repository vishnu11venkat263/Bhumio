import { IsNotEmpty, IsString, IsUUID, IsOptional } from 'class-validator';

export class clickStatsDto {
   

    @IsNotEmpty()
    @IsString()
    @IsUUID()
    id: string;

   
   
}