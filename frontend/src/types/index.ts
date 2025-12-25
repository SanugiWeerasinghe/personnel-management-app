export interface Employee {
    id?: number;
    first_name: string;
    last_name: string;
    email: string;
    phone?: string;
    department_id?: number;
    created_at?: string;
    updated_at?: string;
}

export interface Department {
    id?: number;
    name: string;
    created_at?: string;
    updated_at?: string;
}