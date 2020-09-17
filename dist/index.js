"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 5000;
app.get('/d', (req, res) => {
    res.send("Hello");
});
app.get('/', (req, res) => {
    res.send("uwu");
});
app.listen(port, () => console.log("\x1b[32m", "[SERVER]", "\x1b[36m", `LISTENING TO PORT::${port}`));
