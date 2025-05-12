import { Room } from './entities/room.entity';
export declare class RoomsService {
    private rooms;
    findAll(): Room[];
    findOne(roomNumber: number): Room;
    create(room: Room): Room;
    update(roomNumber: number, updatedRoom: Partial<Room>): Room;
    delete(roomNumber: number): void;
}
