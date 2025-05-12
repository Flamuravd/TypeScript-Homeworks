import { Room } from './entities/room.entity';
import { RoomsService } from './rooms.service';
export declare class RoomsController {
    private readonly roomsService;
    constructor(roomsService: RoomsService);
    findAll(): Room[];
    findOne(roomNumber: number): Room;
    create(room: Room): Room;
    update(roomNumber: number, updatedRoom: Partial<Room>): Room;
    delete(roomNumber: number): void;
}
