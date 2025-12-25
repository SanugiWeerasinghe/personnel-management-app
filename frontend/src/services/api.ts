import axios from 'axios';

const API_URL = 'http://localhost:3500/api'; // Backend running on port 3500

// Employee API calls
export const fetchEmployees = async () => {
    const response = await axios.get(`${API_URL}/employees`);
    return response.data;
};

export const createEmployee = async (employeeData: any) => {
    const response = await axios.post(`${API_URL}/employees`, employeeData);
    return response.data;
};

export const updateEmployee = async (id: number, employeeData: any) => {
    const response = await axios.put(`${API_URL}/employees/${id}`, employeeData);
    return response.data;
};

export const deleteEmployee = async (id: number) => {
    const response = await axios.delete(`${API_URL}/employees/${id}`);
    return response.data;
};

// Department API calls
export const fetchDepartments = async () => {
    const response = await axios.get(`${API_URL}/departments`);
    return response.data;
};

export const createDepartment = async (departmentData: any) => {
    const response = await axios.post(`${API_URL}/departments`, departmentData);
    return response.data;
};

export const updateDepartment = async (id: number, departmentData: any) => {
    const response = await axios.put(`${API_URL}/departments/${id}`, departmentData);
    return response.data;
};

export const deleteDepartment = async (id: number) => {
    const response = await axios.delete(`${API_URL}/departments/${id}`);
    return response.data;
};