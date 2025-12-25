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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDepartment = exports.updateDepartment = exports.createDepartment = exports.getDepartmentById = exports.getDepartments = void 0;
const Department_1 = require("../models/Department");
// Get all departments
const getDepartments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const departments = yield Department_1.Department.findAll();
        res.status(200).json(departments);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching departments', error });
    }
});
exports.getDepartments = getDepartments;
// Get a department by ID
const getDepartmentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const department = yield Department_1.Department.findById(id);
        if (department) {
            res.status(200).json(department);
        }
        else {
            res.status(404).json({ message: 'Department not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching department', error });
    }
});
exports.getDepartmentById = getDepartmentById;
// Create a new department
const createDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newDepartment = req.body;
    try {
        const department = yield Department_1.Department.create(newDepartment);
        res.status(201).json(department);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating department', error });
    }
});
exports.createDepartment = createDepartment;
// Update a department
const updateDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updatedData = req.body;
    try {
        const updatedDepartment = yield Department_1.Department.update(id, updatedData);
        if (updatedDepartment) {
            res.status(200).json(updatedDepartment);
        }
        else {
            res.status(404).json({ message: 'Department not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating department', error });
    }
});
exports.updateDepartment = updateDepartment;
// Delete a department
const deleteDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield Department_1.Department.delete(id);
        if (result) {
            res.status(204).send();
        }
        else {
            res.status(404).json({ message: 'Department not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting department', error });
    }
});
exports.deleteDepartment = deleteDepartment;
