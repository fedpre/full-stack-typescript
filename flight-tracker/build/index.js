"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// create instance of express server
const app = (0, express_1.default)();
// add the middleware to accept json HTTP requests
app.use(express_1.default.json());
// define the port on which the server will be running
const PORT = 3000;
// test endpoint
app.get('/ping', (_req, res) => {
    console.log("someone pinged here");
    res.send('pong');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
