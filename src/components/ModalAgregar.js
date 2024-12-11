import React, { useState } from 'react';
import Entrada from './Entrada';
import Swal from 'sweetalert2';

const ModalAgregar = ({ onAgregar }) => {
  const [nombre, setNombre] = useState('');
  const [dni, setDni] = useState('');
  const [direccion, setDireccion] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !dni || !direccion || !email) {
      Swal.fire('Error', 'Todos los campos son obligatorios', 'error');
      return;
    }
    onAgregar({ nombre, dni, direccion, email });
    setNombre('');
    setDni('');
    setDireccion('');
    setEmail('');
  };

  return (
    <div className="modal fade" id="modalAgregar" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Agregar Empleado</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <Entrada label="Nombre" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
              <Entrada label="DNI" type="text" value={dni} onChange={(e) => setDni(e.target.value)} required />
              <Entrada label="Dirección" type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
              <Entrada label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAgregar;
