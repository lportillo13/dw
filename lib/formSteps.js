// lib/formSteps.js
export const steps = [
    // 🗓️ Wedding Details
    { id: "fecha_boda", question: "¿Cuál es la fecha de su boda?", type: "date", required: true },
    { id: "lugar_ceremonia", question: "¿Dónde será la ceremonia?", type: "text", required: true },
    { id: "hora_ceremonia", question: "¿A qué hora comienza la ceremonia?", type: "time", required: true },
    { id: "misma_ubicacion", question: "¿La ceremonia y la recepción serán en el mismo lugar?", type: "select", options: ["Sí", "No"], required: true },
    { id: "lugar_recepcion", question: "¿Dónde será la recepción?", type: "text", required: true, condition: (answers) => answers["misma_ubicacion"] === "No" },
    { id: "hora_recepcion", question: "¿A qué hora comienza la recepción?", type: "time", required: true, condition: (answers) => answers["misma_ubicacion"] === "No" },
    { id: "fecha_entrega_propuesta", question: "¿Para qué fecha desean recibir la primera propuesta de diseño?", type: "date", required: true },
    
    // 💑 Couple Info
    { id: "nombre_novia", question: "Nombre completo de la novia como desean que aparezca:", type: "text", required: true },
    { id: "nombre_novio", question: "Nombre completo del novio como desean que aparezca:", type: "text", required: true },
    { id: "nombre_orden", question: "¿Qué nombre desean que aparezca primero en la invitación?", type: "select", options: ["Nombre de la novia", "Nombre del novio"], required: true },
    { id: "correo_novios", question: "Correo electrónico de contacto:", type: "email", required: true },
    { id: "telefono_novios", question: "Número de teléfono de contacto:", type: "tel", required: true },
    { id: "pais", question: "¿Desde qué país solicitan el servicio?", type: "text", required: true },
    { id: "wedding_planner", question: "¿Tienen wedding planner? Si es así, por favor escriban su nombre o agencia:", type: "text", required: false },
    
    // 🎨 Design
    { id: "color_primario", question: "Selecciona el color primario para la invitación y la web:", type: "color", required: true },
    { id: "color_secundario", question: "Selecciona el color secundario para la invitación y la web:", type: "color", required: true },
    { id: "link_diseño", question: "Si tienen un diseño de referencia, pueden pegar el enlace aquí (Pinterest, Drive, etc.):", type: "url", required: false },
    { id: "texto_biblico", question: "¿Desean incluir un texto bíblico, pensamiento o cita?", type: "text", required: false },
    
    // 🌐 Website
    { id: "cancion_web", question: "¿Qué canción desean que suene en el sitio web? (Enlace de YouTube):", type: "url", required: false },
    { id: "comentarios", question: "¿Tienen algún comentario adicional que deseen agregar?", type: "textarea", required: false },
    
    // 📍 Map Links
    { id: "link_ceremonia", question: "Enlace de Google Maps o Waze para la ceremonia:", type: "url", required: false },
    { id: "link_recepcion", question: "Enlace de Google Maps o Waze para la recepción:", type: "url", required: false, condition: (answers) => answers["misma_ubicacion"] === "No" },
    
    // 👗 Dress Code
    { id: "codigo_vestimenta", question: "¿Cuál es el código de vestimenta para los invitados?", type: "text", required: false },
    { id: "recomendaciones_vestimenta", question: "¿Desean incluir recomendaciones de vestimenta?", type: "text", required: false },
    { id: "link_pinterest_vestimenta", question: "¿Tienen algún enlace con ejemplos de vestimenta (Pinterest, etc.)?", type: "url", required: false },
    { id: "restricciones_vestimenta", question: "¿Existen restricciones de vestimenta que debamos informar?", type: "text", required: false },
    
    // 🎁 Gifts
    { id: "tipo_regalo", question: "¿Qué tipo de regalos prefieren?", type: "select", options: ["Efectivo", "Transferencia bancaria", "Lista de regalos", "Otro"], required: true },
    { id: "detalle_transferencia", question: "Detalles para la transferencia bancaria:", type: "textarea", required: true, condition: (answers) => answers["tipo_regalo"] === "Transferencia bancaria" },
    { id: "tienda_lista_regalos", question: "Tienda o enlace para la lista de regalos:", type: "url", required: true, condition: (answers) => answers["tipo_regalo"] === "Lista de regalos" },
    { id: "detalle_otro_regalo", question: "Por favor describe el tipo de regalo:", type: "textarea", required: true, condition: (answers) => answers["tipo_regalo"] === "Otro" },
    { id: "texto_regalo", question: "¿Qué mensaje desean incluir para solicitar el regalo?", type: "textarea", required: false },
    
    // 🧍 Guests
    { id: "niños", question: "¿Están invitados los niños a su boda?", type: "select", options: ["Sí", "No"], required: true },
    { id: "fecha_confirmacion", question: "¿Hasta qué fecha desean recibir confirmaciones de asistencia?", type: "date", required: true },
    { id: "restriccion_alimenticia", question: "¿Desean incluir una sección para restricciones alimenticias?", type: "select", options: ["Sí", "No"], required: true },
    { id: "espacios_invitacion", question: "¿Cuántos espacios desea incluir por invitación para escribir nombres?", type: "select", options: ["1", "2", "3", "4", "5"], required: true }

  ];
  