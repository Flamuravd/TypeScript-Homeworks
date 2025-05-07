"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
let PostsService = class PostsService {
    posts = [
        { id: 1, title: 'First Post', content: 'Hello World', authorId: 1 },
        { id: 2, title: 'Second Post', content: 'Another post', authorId: 2 },
        { id: 3, title: 'Third Post', content: 'More content', authorId: 1 },
    ];
    findByAuthor(authorId) {
        return this.posts.filter(post => post.authorId === authorId);
    }
    findAll() {
        return this.posts;
    }
    findOne(id) {
        return this.posts.find(post => post.id === id);
    }
    create(post) {
        const newPost = { id: this.posts.length + 1, ...post };
        this.posts.push(newPost);
        return newPost;
    }
    update(id, updatedPost) {
        const post = this.findOne(id);
        if (!post)
            return undefined;
        Object.assign(post, updatedPost);
        return post;
    }
    delete(id) {
        const index = this.posts.findIndex(post => post.id === id);
        if (index === -1)
            return false;
        this.posts.splice(index, 1);
        return true;
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)()
], PostsService);
//# sourceMappingURL=posts.service.js.map