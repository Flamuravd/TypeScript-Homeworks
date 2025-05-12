/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsInt, IsNumber, Max, Min } from 'class-validator';

export enum RoomType {
  SINGLE = 'SINGLE',
  DOUBLE = 'DOUBLE',
  SUITE = 'SUITE',
  DELUXE = 'DELUXE',
}

export class Room {
  @ApiProperty({ example: 101, description: 'Room number between 1-999' })
  @IsInt()
  @Min(1)
  @Max(999)
  roomNumber: number;

  @ApiProperty({ enum: RoomType, enumName: 'RoomType' })
  @IsEnum(RoomType)
  type: RoomType;

  @ApiProperty({ example: 150, description: 'Price between 50-1000' })
  @IsNumber()
  @Min(50)
  @Max(1000)
  price: number;

  @ApiProperty({ example: true })
  @IsBoolean()
  isAvailable: boolean;
}