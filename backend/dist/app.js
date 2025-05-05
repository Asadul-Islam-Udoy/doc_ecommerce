"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const UserRouter_1 = __importDefault(require("./routers/UserRouter"));
const app = (0, express_1.default)();
dotenv_1.default.config({ path: '.env' });
app.use('/api/users', UserRouter_1.default);
app.use(express_1.default.static(path_1.default.join(__dirname, '../frontend/build')));
app.get('*', (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../frontend/build/index.html'));
});
exports.default = app;
