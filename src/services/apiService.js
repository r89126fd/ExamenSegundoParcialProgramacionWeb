import axios from 'axios';

const API_URL = 'https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado';

export const getEmpleados = () => axios.get(API_URL);
export const addEmpleado = (data) => axios.post(API_URL, data);
