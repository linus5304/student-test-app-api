"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = require("mongoose");
const student_1 = require("./routes/student");
const app = (0, express_1.default)();
const PORT = 3000;
exports.routes = express_1.default.Router();
const main = async () => {
    await (0, mongoose_1.connect)("mongodb+srv://linusbayere:8Su2Mzi6CF2frJ31@cluster0.cm72cin.mongodb.net/?retryWrites=true&w=majority");
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    exports.routes.use("/students", student_1.studentRoute);
    app.use('/', exports.routes);
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    });
};
main();
//# sourceMappingURL=index.js.map