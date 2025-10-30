import { useState } from "react";
export default function FormularioContacto({ onAgregar }) {
const [nombre, setNombre] = useState("");
const [telefono, setTelefono] = useState("");
const [correo, setCorreo] = useState("");
const [etiqueta, setEtiqueta] = useState("");
const manejarEnvio = (e) => {
e.preventDefault();
if (!nombre || !telefono) {
return alert("Completa los campos obligatorios");
}

const nuevo = {
id: Date.now(),
nombre,
telefono,
correo,
etiqueta,
};

onAgregar(nuevo);
// Limpiar formulario
setNombre("");
setTelefono("");
setCorreo("");
setEtiqueta("");
};

return (
<form onSubmit={manejarEnvio} className="form-contacto">
<input
type="text"
placeholder="Nombre"
value={nombre}
onChange={(e) => setNombre(e.target.value)}
required
/>
<input
type="tel"
placeholder="Teléfono"
value={telefono}
onChange={(e) => setTelefono(e.target.value)}
required
/>
<input
type="email"
placeholder="Correo"
value={correo}
onChange={(e) => setCorreo(e.target.value)}
/>
<input
type="text"
placeholder="Etiqueta (opcional)"
value={etiqueta}
onChange={(e) => setEtiqueta(e.target.value)}
/>
<button type="submit">Agregar contacto</button>
</form>
);
}