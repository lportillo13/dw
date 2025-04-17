export const steps = [
  // 🗓️ Wedding Details
  { id: "fecha_boda", questionKey: "form.fecha_boda", type: "date", required: true },
  { id: "lugar_ceremonia", questionKey: "form.lugar_ceremonia", type: "text", required: true },
  { id: "hora_ceremonia", questionKey: "form.hora_ceremonia", type: "time", required: true },
  { id: "misma_ubicacion", questionKey: "form.misma_ubicacion", type: "select", options: ["Sí", "No"], required: true },
  { id: "lugar_recepcion", questionKey: "form.lugar_recepcion", type: "text", required: true, condition: (answers) => answers["misma_ubicacion"] === "No" },
  { id: "hora_recepcion", questionKey: "form.hora_recepcion", type: "time", required: true, condition: (answers) => answers["misma_ubicacion"] === "No" },
  { id: "fecha_entrega_propuesta", questionKey: "form.fecha_entrega_propuesta", type: "date", required: true },

  // 💑 Couple Info
  { id: "nombre_novia", questionKey: "form.nombre_novia", type: "text", required: true },
  { id: "nombre_novio", questionKey: "form.nombre_novio", type: "text", required: true },
  { id: "nombre_orden", questionKey: "form.nombre_orden", type: "select", options: ["Nombre de la novia", "Nombre del novio"], required: true },
  { id: "correo_novios", questionKey: "form.correo_novios", type: "email", required: true },
  { id: "telefono_novios", questionKey: "form.telefono_novios", type: "tel", required: true },
  { id: "pais", questionKey: "form.pais", type: "text", required: true },
  { id: "wedding_planner", questionKey: "form.wedding_planner", type: "text", required: false },

  // 🎨 Design
  { id: "color_primario", questionKey: "form.color_primario", type: "color", required: true },
  { id: "color_secundario", questionKey: "form.color_secundario", type: "color", required: true },
  { id: "link_diseño", questionKey: "form.link_diseño", type: "url", required: false },
  { id: "texto_romantico", questionKey: "form.texto_romantico", type: "multilang", required: true }, // 👈 this is the fix

  // 🌐 Website
  { id: "cancion_web", questionKey: "form.cancion_web", type: "url", required: false },
  { id: "comentarios", questionKey: "form.comentarios", type: "textarea", required: false },

  // 📍 Map Links
  { id: "link_ceremonia", questionKey: "form.link_ceremonia", type: "url", required: false },
  { id: "link_recepcion", questionKey: "form.link_recepcion", type: "url", required: false, condition: (answers) => answers["misma_ubicacion"] === "No" },

  // 👗 Dress Code
  { id: "codigo_vestimenta", questionKey: "form.codigo_vestimenta", type: "text", required: false },
  { id: "recomendaciones_vestimenta", questionKey: "form.recomendaciones_vestimenta", type: "text", required: false },
  { id: "link_pinterest_vestimenta", questionKey: "form.link_pinterest_vestimenta", type: "url", required: false },
  { id: "restricciones_vestimenta", questionKey: "form.restricciones_vestimenta", type: "text", required: false },

  // 🎁 Gifts
  { id: "tipo_regalo", questionKey: "form.tipo_regalo", type: "select", options: ["Efectivo", "Transferencia bancaria", "Lista de regalos", "Otro"], required: true },
  { id: "detalle_transferencia", questionKey: "form.detalle_transferencia", type: "textarea", required: true, condition: (answers) => answers["tipo_regalo"] === "Transferencia bancaria" },
  { id: "tienda_lista_regalos", questionKey: "form.tienda_lista_regalos", type: "url", required: true, condition: (answers) => answers["tipo_regalo"] === "Lista de regalos" },
  { id: "detalle_otro_regalo", questionKey: "form.detalle_otro_regalo", type: "textarea", required: true, condition: (answers) => answers["tipo_regalo"] === "Otro" },
  { id: "texto_regalo", questionKey: "form.texto_regalo", type: "textarea", required: false },

  // 🧍 Guests
  { id: "niños", questionKey: "form.niños", type: "select", options: ["Sí", "No"], required: true },
  { id: "fecha_confirmacion", questionKey: "form.fecha_confirmacion", type: "date", required: true },
  { id: "restriccion_alimenticia", questionKey: "form.restriccion_alimenticia", type: "select", options: ["Sí", "No"], required: true },
  { id: "espacios_invitacion", questionKey: "form.espacios_invitacion", type: "select", options: ["1", "2", "3", "4", "5"], required: true }
];