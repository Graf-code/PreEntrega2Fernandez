import { useState } from "react";
import './CheckoutForm.css';

// Componente CheckoutForm, que recibe una función " onConfirm " como prop.
const CheckoutForm = ({ onConfirm }) => {
  // Tengo un estado para almacenar los datos del usuario y otro para manejar mensajes de error.
  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    email: '',
    repeatEmail: '',
  });

   // Añado el estado para manejar mensajes de error.
  const [error, setError] = useState('');
  
  // Esta función maneja los cambios en los campos del formulario.
  const handleChange = (event) => {         // Extraigo el nombre y el valor del campo del evento.
    const { name, value } = event.target;   // Actualizo el estado con los nuevos datos.
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Aca manejo la confirmación del formulario.
  const handleConfirm = (event) => {
    event.preventDefault(); // Evito el comportamiento predeterminado del formulario.

    // Verifico que todos los campos estén completos.
    if (!userData.name || !userData.phone || !userData.email || !userData.repeatEmail) {
      setError('Por favor, complete todos los campos');  // Si no están completos, muestro un mensaje de error.
      return;
    }

     // Verifico que los correos electrónicos coincidan.
    if (userData.email !== userData.repeatEmail) {
      setError('Los correos electrónicos no coinciden'); // Si no coinciden, muestro otro mensaje de error.
      return; 
    }
    
    // Llamo a la función onConfirm y le paso los datos del usuario.
    onConfirm(userData);
  };

  // Renderizo el formulario con los campos, el botón y mensajes de error si los hay.
  return (
    <div className="container mb-2 form__dates">
      <form onSubmit={handleConfirm} className="form__checkout">

        {/* Aquí comienza la sección del campo Nombre */}
        <label className="form__label">
          Nombre
          <input
            className="form"
            type="text"
            name="name"
            value={userData.name}
            required
            onChange={handleChange}
            placeholder="Ingrese nombre completo"
          />
        </label>

        {/* La sección del campo Teléfono */}
        <label className="form__label">
          Telefono
          <input
            className="form"
            type="text"
            name="phone"
            value={userData.phone}
            required
            onChange={handleChange}
            placeholder="Ingrese numero de telefono"
          />
        </label>

        {/* La sección del campo Email */}
        <label className="form__label">
          Email
          <input
            className="form"
            type="email"
            name="email"
            value={userData.email}
            required
            onChange={handleChange}
            placeholder="Ingrese su E-mail"
          />
        </label>
        
        {/* La sección del campo Repetir Email */}
        <label className="form__label">
          Repetir Email
          <input
            className="form"
            type="email"
            name="repeatEmail"
            value={userData.repeatEmail}
            required
            onChange={handleChange}
            placeholder="Repita su E-mail"
          />
        </label>

         {/* La sección del botón de CREAR ORDEN */}
        <div>
          <button type="submit" className="btn btn-primary button__order">
            Crear Orden
          </button>
        </div>

         {/* La sección para mostrar mensajes de error */}
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default CheckoutForm;