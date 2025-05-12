export declare enum RoomType {
    SINGLE = "SINGLE",
    DOUBLE = "DOUBLE",
    SUITE = "SUITE",
    DELUXE = "DELUXE"
}
export declare class Room {
    roomNumber: number;
    type: RoomType;
    price: number;
    isAvailable: boolean;
}
