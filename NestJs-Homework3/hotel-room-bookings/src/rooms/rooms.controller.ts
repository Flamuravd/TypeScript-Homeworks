/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Room } from './entities/room.entity';
import { RoomsService } from './rooms.service';

@ApiTags('rooms')
@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all rooms' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of all rooms',
    type: [Room],
  })
  findAll(): Room[] {
    return this.roomsService.findAll();
  }

  @Get(':roomNumber')
  @ApiOperation({ summary: 'Get a room by room number' })
  @ApiParam({ name: 'roomNumber', type: Number, example: 101 })
  @ApiResponse({ status: HttpStatus.OK, description: 'The found room', type: Room })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Room not found',
  })
  findOne(@Param('roomNumber') roomNumber: number): Room {
    return this.roomsService.findOne(roomNumber);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new room' })
  @ApiBody({ type: Room })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The room has been successfully created',
    type: Room,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid room data or room already exists',
  })
  create(@Body() room: Room): Room {
    return this.roomsService.create(room);
  }

  @Put(':roomNumber')
  @ApiOperation({ summary: 'Update a room' })
  @ApiParam({ name: 'roomNumber', type: Number, example: 101 })
  @ApiBody({ type: Room })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The room has been successfully updated',
    type: Room,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Room not found',
  })
  update(
    @Param('roomNumber') roomNumber: number,
    @Body() updatedRoom: Partial<Room>,
  ): Room {
    return this.roomsService.update(roomNumber, updatedRoom);
  }

  @Delete(':roomNumber')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a room' })
  @ApiParam({ name: 'roomNumber', type: Number, example: 101 })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'The room has been successfully deleted',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Room not found',
  })
  delete(@Param('roomNumber') roomNumber: number): void {
    return this.roomsService.delete(roomNumber);
  }
}