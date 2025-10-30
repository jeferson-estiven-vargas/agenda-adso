// Este componente muestra UN contacto de la agenda.
// Recibe los datos (props): nombre, telefono, correo, etiqueta.

export default function ContactoCard({ nombre, telefono, correo, etiqueta }) {
  return (
    <div className="card-contacto">
      <h3 className="card-nombre">{nombre}</h3>

      <p className="card-linea">📞 {telefono}</p>
      <p className="card-linea">📧 {correo}</p>

      {etiqueta && (
        <p className="card-etiqueta">{etiqueta}</p>
      )}
    </div>
  );
}