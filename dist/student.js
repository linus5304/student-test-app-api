"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const mongoose_1 = require("mongoose");
const studentSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    class: { type: String, required: true },
    gender: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    imageUrl: { type: String },
});
exports.Student = (0, mongoose_1.model)("Student", studentSchema);
run().catch(err => console.log(err));
async function run() {
    await (0, mongoose_1.connect)("mongodb://127.0.0.1:27017/test");
    const student = new exports.Student({
        firstName: "Bill",
        lastName: "Gates",
        class: "https://i.imgur.com/dM7Thhn.png",
        gender: "M",
        dateOfBirth: "23/02/1980",
    });
    await student.save();
    console.log(student.firstName);
}
//# sourceMappingURL=student.js.map