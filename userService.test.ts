import { register, authenticate, blockUser, reset } from './userService';

describe('Fail Based Tests', () => {
    // Desarrollar aquí pruebas Basadas en Fallas
    it('input the username and not the password expect to throw Username and password are required', () => {

        expect(() => register('user', '')).toThrow('Username and password are required');
    });

    it('Input the username and not the password expect to throw Username and password are required', () => {
        expect(() => register('', 'pass')).toThrow('Username and password are required');
    });
});
describe('Use Based Tests', () => {
    // Desarrollar aquí pruebas Basadas en el Uso
});
describe('Model Based Tests', () => {
    // Desarrollar aquí pruebas Basadas en Modelos
});