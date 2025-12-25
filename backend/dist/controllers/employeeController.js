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
exports.deleteEmployee = exports.updateEmployee = exports.createEmployee = exports.getEmployeeById = exports.getAllEmployees = void 0;
const Employee_1 = require("../models/Employee");
// Get all employees
const getAllEmployees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employees = yield Employee_1.Employee.findAll();
        res.status(200).json(employees);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching employees', error });
    }
});
exports.getAllEmployees = getAllEmployees;
// Get employee by ID
const getEmployeeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const employee = yield Employee_1.Employee.findById(id);
        if (employee) {
            res.status(200).json(employee);
        }
        else {
            res.status(404).json({ message: 'Employee not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching employee', error });
    }
});
exports.getEmployeeById = getEmployeeById;
// Create a new employee
const createEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newEmployee = req.body;
    try {
        const employee = yield Employee_1.Employee.create(newEmployee);
        res.status(201).json(employee);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating employee', error });
    }
});
exports.createEmployee = createEmployee;
// Update an employee
const updateEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updatedData = req.body;
    try {
        const updatedEmployee = yield Employee_1.Employee.update(id, updatedData);
        if (updatedEmployee) {
            res.status(200).json(updatedEmployee);
        }
        else {
            res.status(404).json({ message: 'Employee not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating employee', error });
    }
});
exports.updateEmployee = updateEmployee;
// Delete an employee
const deleteEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield Employee_1.Employee.delete(id);
        if (result) {
            res.status(204).send();
        }
        else {
            res.status(404).json({ message: 'Employee not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting employee', error });
    }
});
exports.deleteEmployee = deleteEmployee;
