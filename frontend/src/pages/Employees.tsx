import React, { useEffect, useState } from 'react';
import EmployeeList from '../components/EmployeeList';
import EmployeeForm from '../components/EmployeeForm';
import { Employee } from '../types';

const Employees: React.FC = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await fetch('http://localhost:3500/api/employees');
                const data = await response.json();
                setEmployees(data);
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        };

        fetchEmployees();
    }, []);

    const handleEdit = (employee: Employee) => {
        setSelectedEmployee(employee);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (id: number) => {
        if (window.confirm('Are you sure you want to delete this employee?')) {
            try {
                const response = await fetch(`http://localhost:3500/api/employees/${id}`, {
                    method: 'DELETE',
                });
                
                if (!response.ok) {
                    throw new Error('Failed to delete employee');
                }
                
                setEmployees(employees.filter(emp => emp.id !== id));
                alert('Employee deleted successfully!');
            } catch (error) {
                console.error('Error deleting employee:', error);
                alert('Failed to delete employee');
            }
        }
    };

    const handleFormSubmit = async (employee: Employee) => {
        try {
            let response;
            if (selectedEmployee?.id) {
                response = await fetch(`http://localhost:3500/api/employees/${selectedEmployee.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(employee),
                });
            } else {
                response = await fetch('http://localhost:3500/api/employees', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(employee),
                });
            }
            
            if (!response.ok) {
                throw new Error('Failed to save employee');
            }
            
            setSelectedEmployee(null);
            const refreshResponse = await fetch('http://localhost:3500/api/employees');
            const data = await refreshResponse.json();
            setEmployees(data);
            alert('Employee saved successfully!');
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <h1>👥 Employee Management</h1>
            {selectedEmployee && (
                <div style={{ marginBottom: '20px' }}>
                    <button onClick={() => setSelectedEmployee(null)} style={{ background: '#999' }}>
                        ✕ Cancel Edit
                    </button>
                </div>
            )}
            <h2>{selectedEmployee ? '✏️ Edit Employee' : '➕ Add New Employee'}</h2>
            <EmployeeForm employee={selectedEmployee} onSubmit={handleFormSubmit} />
            <EmployeeList employees={employees} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default Employees;