import { Request, Response } from 'express';
import { Department } from '../models/Department';

// Get all departments
export const getDepartments = async (req: Request, res: Response) => {
    try {
        const departments = await Department.findAll();
        res.status(200).json(departments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching departments', error });
    }
};

// Get a department by ID
export const getDepartmentById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const department = await Department.findById(id);
        if (department) {
            res.status(200).json(department);
        } else {
            res.status(404).json({ message: 'Department not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching department', error });
    }
};

// Create a new department
export const createDepartment = async (req: Request, res: Response) => {
    const newDepartment = req.body;
    try {
        const department = await Department.create(newDepartment);
        res.status(201).json(department);
    } catch (error) {
        res.status(500).json({ message: 'Error creating department', error });
    }
};

// Update a department
export const updateDepartment = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedData = req.body;
    try {
        const updatedDepartment = await Department.update(id, updatedData);
        if (updatedDepartment) {
            res.status(200).json(updatedDepartment);
        } else {
            res.status(404).json({ message: 'Department not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating department', error });
    }
};

// Delete a department
export const deleteDepartment = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await Department.delete(id);
        if (result) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Department not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting department', error });
    }
};