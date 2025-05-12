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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const room_entity_1 = require("./entities/room.entity");
const rooms_service_1 = require("./rooms.service");
let RoomsController = class RoomsController {
    roomsService;
    constructor(roomsService) {
        this.roomsService = roomsService;
    }
    findAll() {
        return this.roomsService.findAll();
    }
    findOne(roomNumber) {
        return this.roomsService.findOne(roomNumber);
    }
    create(room) {
        return this.roomsService.create(room);
    }
    update(roomNumber, updatedRoom) {
        return this.roomsService.update(roomNumber, updatedRoom);
    }
    delete(roomNumber) {
        return this.roomsService.delete(roomNumber);
    }
};
exports.RoomsController = RoomsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all rooms' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'List of all rooms',
        type: [room_entity_1.Room],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], RoomsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':roomNumber'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a room by room number' }),
    (0, swagger_1.ApiParam)({ name: 'roomNumber', type: Number, example: 101 }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'The found room', type: room_entity_1.Room }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Room not found',
    }),
    __param(0, (0, common_1.Param)('roomNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", room_entity_1.Room)
], RoomsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new room' }),
    (0, swagger_1.ApiBody)({ type: room_entity_1.Room }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'The room has been successfully created',
        type: room_entity_1.Room,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Invalid room data or room already exists',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [room_entity_1.Room]),
    __metadata("design:returntype", room_entity_1.Room)
], RoomsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':roomNumber'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a room' }),
    (0, swagger_1.ApiParam)({ name: 'roomNumber', type: Number, example: 101 }),
    (0, swagger_1.ApiBody)({ type: room_entity_1.Room }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'The room has been successfully updated',
        type: room_entity_1.Room,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Room not found',
    }),
    __param(0, (0, common_1.Param)('roomNumber')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", room_entity_1.Room)
], RoomsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':roomNumber'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a room' }),
    (0, swagger_1.ApiParam)({ name: 'roomNumber', type: Number, example: 101 }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NO_CONTENT,
        description: 'The room has been successfully deleted',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Room not found',
    }),
    __param(0, (0, common_1.Param)('roomNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RoomsController.prototype, "delete", null);
exports.RoomsController = RoomsController = __decorate([
    (0, swagger_1.ApiTags)('rooms'),
    (0, common_1.Controller)('rooms'),
    __metadata("design:paramtypes", [rooms_service_1.RoomsService])
], RoomsController);
//# sourceMappingURL=rooms.controller.js.map