import React from 'react';

const ListadoEmpleados = ({ empleados }) => (
  <div className="table-responsive">
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>DNI</th>
          <th>Dirección</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {empleados.map((empleado) => (
          <tr key={empleado.id}>
            <td>{empleado.nombre}</td>
            <td>{empleado.dni}</td>
            <td>{empleado.direccion}</td>
            <td>{empleado.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ListadoEmpleados;
