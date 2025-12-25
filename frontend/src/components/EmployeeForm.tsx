import React, { useState, useEffect } from 'react';
import { Employee } from '../types';

interface EmployeeFormProps {
    onSubmit: (data: Employee) => void;
    employee?: Employee | null;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ onSubmit, employee }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [departmentId, setDepartmentId] = useState('');

    useEffect(() => {
        if (employee) {
            setFirstName(employee.first_name || '');
            setLastName(employee.last_name || '');
            setEmail(employee.email || '');
            setPhone(employee.phone || '');
            setDepartmentId(employee.department_id?.toString() || '');
        } else {
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhone('');
            setDepartmentId('');
        }
    }, [employee]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newEmployee: Employee = {
            id: employee?.id,
            first_name: firstName,
            last_name: lastName,
            email,
            phone,
            department_id: departmentId ? parseInt(departmentId) : undefined,
        };
        onSubmit(newEmployee);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Phone:</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <label>Department ID:</label>
                <input type="number" value={departmentId} onChange={(e) => setDepartmentId(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default EmployeeForm;