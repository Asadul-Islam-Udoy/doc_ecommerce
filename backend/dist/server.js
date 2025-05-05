"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const DbConnection_1 = require("./config/DbConnection");
app_1.default.use('', (req, res) => {
    res.send('<h1>Hello worlds</h1>');
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, DbConnection_1.DbConnection)(); // Wait for DB connection before starting server
    const PORT = process.env.PORT || 5000;
    app_1.default.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
}))();
