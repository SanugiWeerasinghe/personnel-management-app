"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departmentController_1 = require("../controllers/departmentController");
const router = (0, express_1.Router)();
// Route to create a new department
router.post('/', departmentController_1.createDepartment);
// Route to get all departments
router.get('/', departmentController_1.getDepartments);
// Route to update a department by ID
router.put('/:id', departmentController_1.updateDepartment);
// Route to delete a department by ID
router.delete('/:id', departmentController_1.deleteDepartment);
exports.default = router;
