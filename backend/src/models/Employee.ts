import pool from '../config/database';

export interface IEmployee {
    id?: number;
    first_name: string;
    last_name: string;
    email: string;
    phone?: string;
    department_id?: number;
    created_at?: Date;
    updated_at?: Date;
}

export class Employee {
    static async findAll(): Promise<IEmployee[]> {
        try {
            const [rows] = await pool.query('SELECT * FROM employees');
            return rows as IEmployee[];
        } catch (error) {
            throw error;
        }
    }

    static async findById(id: string | number): Promise<IEmployee | null> {
        try {
            const [rows] = await pool.query('SELECT * FROM employees WHERE id = ?', [id]);
            const result = rows as IEmployee[];
            return result.length > 0 ? result[0] : null;
        } catch (error) {
            throw error;
        }
    }

    static async create(employee: IEmployee): Promise<IEmployee> {
        try {
            const { first_name, last_name, email, phone, department_id } = employee;
            const [result] = await pool.query(
                'INSERT INTO employees (first_name, last_name, email, phone, department_id) VALUES (?, ?, ?, ?, ?)',
                [first_name, last_name, email, phone || null, department_id || null]
            );
            const insertResult = result as any;
            return { id: insertResult.insertId, ...employee };
        } catch (error) {
            throw error;
        }
    }

    static async update(id: string | number, employee: Partial<IEmployee>): Promise<IEmployee | null> {
        try {
            const existingEmployee = await this.findById(id);
            if (!existingEmployee) return null;

            const { first_name, last_name, email, phone, department_id } = employee;
            await pool.query(
                'UPDATE employees SET first_name = ?, last_name = ?, email = ?, phone = ?, department_id = ? WHERE id = ?',
                [
                    first_name || existingEmployee.first_name,
                    last_name || existingEmployee.last_name,
                    email || existingEmployee.email,
                    phone || existingEmployee.phone,
                    department_id !== undefined ? department_id : existingEmployee.department_id,
                    id,
                ]
            );
            return { ...existingEmployee, ...employee };
        } catch (error) {
            throw error;
        }
    }

    static async delete(id: string | number): Promise<boolean> {
        try {
            const [result] = await pool.query('DELETE FROM employees WHERE id = ?', [id]);
            const deleteResult = result as any;
            return deleteResult.affectedRows > 0;
        } catch (error) {
            throw error;
        }
    }
}
