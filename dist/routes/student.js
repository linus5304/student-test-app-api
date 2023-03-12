"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRoute = void 0;
const student_1 = require("../model/student");
const express_1 = require("express");
exports.studentRoute = (0, express_1.Router)();
exports.studentRoute.post("/create", async (req, res) => {
    const { firstName, lastName, classe, gender, dateOfBirth } = req.body;
    const student = new student_1.Student({
        firstName,
        lastName,
        classe,
        gender,
        dateOfBirth,
    });
    try {
        const result = await student.save();
        res.json(result);
    }
    catch (err) {
        res.send(err).json();
    }
});
exports.studentRoute.get("/", async (req, res) => {
    const result = await student_1.Student.find({});
    try {
        res.json(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.studentRoute.patch("/:id", async (req, res) => {
    try {
        const student = await student_1.Student.findByIdAndUpdate(req.params.id, req.body);
        const result = await (student === null || student === void 0 ? void 0 : student.save());
        res.json(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.studentRoute.delete("/:id", async (req, res) => {
    try {
        const student = await student_1.Student.findByIdAndDelete(req.params.id, req.body);
        if (!student)
            res.status(404).json("No Item found");
        res.status(200).send();
    }
    catch (error) {
        res.status(500).send(error);
    }
});
//# sourceMappingURL=student.js.map