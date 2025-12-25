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
exports.Department = void 0;
const database_1 = __importDefault(require("../config/database"));
class Department {
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [rows] = yield database_1.default.query('SELECT * FROM departments');
                return rows;
            }
            catch (error) {
                throw error;
            }
        });
    }
    static findByPk(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [rows] = yield database_1.default.query('SELECT * FROM departments WHERE id = ?', [id]);
                const result = rows;
                return result.length > 0 ? result[0] : null;
            }
            catch (error) {
                throw error;
            }
        });
    }
    static findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.findByPk(id);
        });
    }
    static create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = data;
                const [result] = yield database_1.default.query('INSERT INTO departments (name) VALUES (?)', [name]);
                const insertResult = result;
                return Object.assign({ id: insertResult.insertId }, data);
            }
            catch (error) {
                throw error;
            }
        });
    }
    static update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existingDepartment = yield this.findByPk(id);
                if (!existingDepartment)
                    return null;
                const { name } = data;
                yield database_1.default.query('UPDATE departments SET name = ? WHERE id = ?', [name || existingDepartment.name, id]);
                return Object.assign(Object.assign({}, existingDepartment), data);
            }
            catch (error) {
                throw error;
            }
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [result] = yield database_1.default.query('DELETE FROM departments WHERE id = ?', [id]);
                const deleteResult = result;
                return deleteResult.affectedRows > 0;
            }
            catch (error) {
                throw error;
            }
        });
    }
    // For convenience - save method (supports the controller pattern)
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            const department = this;
            if (department.id) {
                yield Department.update(department.id, { name: department.name });
            }
        });
    }
    // For convenience - destroy method (supports the controller pattern)
    destroy() {
        return __awaiter(this, void 0, void 0, function* () {
            const department = this;
            return Department.delete(department.id);
        });
    }
}
exports.Department = Department;
