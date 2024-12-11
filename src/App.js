import React, { useEffect, useState } from 'react';
import { getEmpleados, addEmpleado } from './services/apiService';
import ListadoEmpleados from './components/ListadoEmpleados';
import ModalAgregar from './components/ModalAgregar';
import Swal from 'sweetalert2';

const App = () => {
  const [empleados, setEmpleados] = useState([]);

  const fetchEmpleados = async () => {
    try {
      const { data } = await getEmpleados();
      setEmpleados(data);
    } catch (error) {
      Swal.fire('Error', 'No se pudo cargar el listado de empleados', 'error');
    }
  };

  const handleAgregar = async (empleado) => {
    try {
      const { data } = await addEmpleado(empleado);
      setEmpleados([...empleados, data]);
      Swal.fire('Éxito', 'Empleado agregado correctamente', 'success');
    } catch (error) {
      Swal.fire('Error', 'No se pudo agregar el empleado', 'error');
    }
  };

  useEffect(() => {
    fetchEmpleados();
  }, []);

  return (
    <div className="container mt-5">
      <h1>Gestión de Empleados</h1>
      <button
        className="btn btn-primary mb-3"
        data-bs-toggle="modal"
        data-bs-target="#modalAgregar"
      >
        Agregar Empleado
      </button>
      <ListadoEmpleados empleados={empleados} />
      <ModalAgregar onAgregar={handleAgregar} />
    </div>
  );
};

export default App;
