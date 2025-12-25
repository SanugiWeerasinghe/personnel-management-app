import { Request, Response } from 'express';
import { Employee } from '../models/Employee';

// Get all employees
export const getAllEmployees = async (req: Request, res: Response) => {
    try {
        const employees = await Employee.findAll();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching employees', error });
    }
};

// Get employee by ID
export const getEmployeeById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const employee = await Employee.findById(id);
        if (employee) {
            res.status(200).json(employee);
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching employee', error });
    }
};

// Create a new employee
export const createEmployee = async (req: Request, res: Response) => {
    const newEmployee = req.body;
    try {
        const employee = await Employee.create(newEmployee);
        res.status(201).json(employee);
    } catch (error) {
        res.status(500).json({ message: 'Error creating employee', error });
    }
};

// Update an employee
export const updateEmployee = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedData = req.body;
    try {
        const updatedEmployee = await Employee.update(id, updatedData);
        if (updatedEmployee) {
            res.status(200).json(updatedEmployee);
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating employee', error });
    }
};

// Delete an employee
export const deleteEmployee = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await Employee.delete(id);
        if (result) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting employee', error });
    }
};