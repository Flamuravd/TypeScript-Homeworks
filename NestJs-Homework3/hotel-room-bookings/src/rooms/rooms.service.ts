/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Room, RoomType } from './entities/room.entity';

@Injectable()
export class RoomsService {
  private rooms: Room[] = [
    {
      roomNumber: 101,
      type: RoomType.SINGLE,
      price: 100,
      isAvailable: true,
    },
    {
      roomNumber: 201,
      type: RoomType.DOUBLE,
      price: 200,
      isAvailable: true,
    },
  ];

  findAll(): Room[] {
    return this.rooms;
  }

  findOne(roomNumber: number): Room {
    const room = this.rooms.find((room) => room.roomNumber === roomNumber);
    if (!room) {
      throw new NotFoundException(`Room with number ${roomNumber} not found`);
    }
    return room;
  }

  create(room: Room): Room {
    // Check if room already exists
    const existingRoom = this.rooms.find((r) => r.roomNumber === room.roomNumber);
    if (existingRoom) {
      throw new Error(`Room with number ${room.roomNumber} already exists`);
    }
    this.rooms.push(room);
    return room;
  }

  update(roomNumber: number, updatedRoom: Partial<Room>): Room {
    const roomIndex = this.rooms.findIndex((room) => room.roomNumber === roomNumber);
    if (roomIndex === -1) {
      throw new NotFoundException(`Room with number ${roomNumber} not found`);
    }
    this.rooms[roomIndex] = { ...this.rooms[roomIndex], ...updatedRoom };
    return this.rooms[roomIndex];
  }

  delete(roomNumber: number): void {
    const roomIndex = this.rooms.findIndex((room) => room.roomNumber === roomNumber);
    if (roomIndex === -1) {
      throw new NotFoundException(`Room with number ${roomNumber} not found`);
    }
    this.rooms.splice(roomIndex, 1);
  }
}