import { Router } from 'express';
import { 
    createDepartment, 
    getDepartments, 
    updateDepartment, 
    deleteDepartment 
} from '../controllers/departmentController';

const router = Router();

// Route to create a new department
router.post('/', createDepartment);

// Route to get all departments
router.get('/', getDepartments);

// Route to update a department by ID
router.put('/:id', updateDepartment);

// Route to delete a department by ID
router.delete('/:id', deleteDepartment);

export default router;