"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = exports.RoomType = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var RoomType;
(function (RoomType) {
    RoomType["SINGLE"] = "SINGLE";
    RoomType["DOUBLE"] = "DOUBLE";
    RoomType["SUITE"] = "SUITE";
    RoomType["DELUXE"] = "DELUXE";
})(RoomType || (exports.RoomType = RoomType = {}));
class Room {
    roomNumber;
    type;
    price;
    isAvailable;
}
exports.Room = Room;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 101, description: 'Room number between 1-999' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(999),
    __metadata("design:type", Number)
], Room.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: RoomType, enumName: 'RoomType' }),
    (0, class_validator_1.IsEnum)(RoomType),
    __metadata("design:type", String)
], Room.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 150, description: 'Price between 50-1000' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(50),
    (0, class_validator_1.Max)(1000),
    __metadata("design:type", Number)
], Room.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Room.prototype, "isAvailable", void 0);
//# sourceMappingURL=room.entity.js.map