"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const database_1 = __importDefault(require("../config/database"));
class Employee {
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [rows] = yield database_1.default.query('SELECT * FROM employees');
                return rows;
            }
            catch (error) {
                throw error;
            }
        });
    }
    static findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [rows] = yield database_1.default.query('SELECT * FROM employees WHERE id = ?', [id]);
                const result = rows;
                return result.length > 0 ? result[0] : null;
            }
            catch (error) {
                throw error;
            }
        });
    }
    static create(employee) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { first_name, last_name, email, phone, department_id } = employee;
                const [result] = yield database_1.default.query('INSERT INTO employees (first_name, last_name, email, phone, department_id) VALUES (?, ?, ?, ?, ?)', [first_name, last_name, email, phone || null, department_id || null]);
                const insertResult = result;
                return Object.assign({ id: insertResult.insertId }, employee);
            }
            catch (error) {
                throw error;
            }
        });
    }
    static update(id, employee) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existingEmployee = yield this.findById(id);
                if (!existingEmployee)
                    return null;
                const { first_name, last_name, email, phone, department_id } = employee;
                yield database_1.default.query('UPDATE employees SET first_name = ?, last_name = ?, email = ?, phone = ?, department_id = ? WHERE id = ?', [
                    first_name || existingEmployee.first_name,
                    last_name || existingEmployee.last_name,
                    email || existingEmployee.email,
                    phone || existingEmployee.phone,
                    department_id !== undefined ? department_id : existingEmployee.department_id,
                    id,
                ]);
                return Object.assign(Object.assign({}, existingEmployee), employee);
            }
            catch (error) {
                throw error;
            }
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [result] = yield database_1.default.query('DELETE FROM employees WHERE id = ?', [id]);
                const deleteResult = result;
                return deleteResult.affectedRows > 0;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.Employee = Employee;
