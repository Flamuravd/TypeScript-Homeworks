"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomsService = void 0;
const common_1 = require("@nestjs/common");
const room_entity_1 = require("./entities/room.entity");
let RoomsService = class RoomsService {
    rooms = [
        {
            roomNumber: 101,
            type: room_entity_1.RoomType.SINGLE,
            price: 100,
            isAvailable: true,
        },
        {
            roomNumber: 201,
            type: room_entity_1.RoomType.DOUBLE,
            price: 200,
            isAvailable: true,
        },
    ];
    findAll() {
        return this.rooms;
    }
    findOne(roomNumber) {
        const room = this.rooms.find((room) => room.roomNumber === roomNumber);
        if (!room) {
            throw new common_1.NotFoundException(`Room with number ${roomNumber} not found`);
        }
        return room;
    }
    create(room) {
        const existingRoom = this.rooms.find((r) => r.roomNumber === room.roomNumber);
        if (existingRoom) {
            throw new Error(`Room with number ${room.roomNumber} already exists`);
        }
        this.rooms.push(room);
        return room;
    }
    update(roomNumber, updatedRoom) {
        const roomIndex = this.rooms.findIndex((room) => room.roomNumber === roomNumber);
        if (roomIndex === -1) {
            throw new common_1.NotFoundException(`Room with number ${roomNumber} not found`);
        }
        this.rooms[roomIndex] = { ...this.rooms[roomIndex], ...updatedRoom };
        return this.rooms[roomIndex];
    }
    delete(roomNumber) {
        const roomIndex = this.rooms.findIndex((room) => room.roomNumber === roomNumber);
        if (roomIndex === -1) {
            throw new common_1.NotFoundException(`Room with number ${roomNumber} not found`);
        }
        this.rooms.splice(roomIndex, 1);
    }
};
exports.RoomsService = RoomsService;
exports.RoomsService = RoomsService = __decorate([
    (0, common_1.Injectable)()
], RoomsService);
//# sourceMappingURL=rooms.service.js.map