import pool from '../config/database';

export interface IDepartment {
    id?: number;
    name: string;
    created_at?: Date;
    updated_at?: Date;
}

export class Department {
    static async findAll(): Promise<IDepartment[]> {
        try {
            const [rows] = await pool.query('SELECT * FROM departments');
            return rows as IDepartment[];
        } catch (error) {
            throw error;
        }
    }

    static async findByPk(id: string | number): Promise<IDepartment | null> {
        try {
            const [rows] = await pool.query('SELECT * FROM departments WHERE id = ?', [id]);
            const result = rows as IDepartment[];
            return result.length > 0 ? result[0] : null;
        } catch (error) {
            throw error;
        }
    }

    static async findById(id: string | number): Promise<IDepartment | null> {
        return this.findByPk(id);
    }

    static async create(data: IDepartment): Promise<IDepartment> {
        try {
            const { name } = data;
            const [result] = await pool.query(
                'INSERT INTO departments (name) VALUES (?)',
                [name]
            );
            const insertResult = result as any;
            return { id: insertResult.insertId, ...data };
        } catch (error) {
            throw error;
        }
    }

    static async update(id: string | number, data: Partial<IDepartment>): Promise<IDepartment | null> {
        try {
            const existingDepartment = await this.findByPk(id);
            if (!existingDepartment) return null;

            const { name } = data;
            await pool.query(
                'UPDATE departments SET name = ? WHERE id = ?',
                [name || existingDepartment.name, id]
            );
            return { ...existingDepartment, ...data };
        } catch (error) {
            throw error;
        }
    }

    static async delete(id: string | number): Promise<boolean> {
        try {
            const [result] = await pool.query('DELETE FROM departments WHERE id = ?', [id]);
            const deleteResult = result as any;
            return deleteResult.affectedRows > 0;
        } catch (error) {
            throw error;
        }
    }

    // For convenience - save method (supports the controller pattern)
    async save(): Promise<void> {
        const department = this as any;
        if (department.id) {
            await Department.update(department.id, { name: department.name });
        }
    }

    // For convenience - destroy method (supports the controller pattern)
    async destroy(): Promise<boolean> {
        const department = this as any;
        return Department.delete(department.id);
    }
}
