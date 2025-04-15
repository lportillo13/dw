// components/BilingualWeddingForm.js
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

export default function BilingualWeddingForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [lang, setLang] = useState("en"); // default language: English

  // Translations for English (en) and Spanish (es)
  const translations = {
    en: {
      title: "Wedding Invitation Details",
      description: "Congratulations! You're one step closer to sharing your wedding details. Please complete the form with accurate information.",
      coupleInfo: "Couple Information",
      brideName: "Bride Name",
      groomName: "Groom Name",
      email: "Email",
      phone: "Phone Number",
      country: "Country (Service Location)",
      weddingPlanner: "Wedding Planner",
      weddingDetails: "Wedding Details",
      weddingDate: "Wedding Date",
      ceremonyVenue: "Ceremony Venue",
      ceremonyTime: "Ceremony Time (optional)",
      receptionVenue: "Reception Venue",
      receptionTime: "Reception Time",
      proposalDate: "Proposal Delivery Date",
      customization: "Invitation & Website Customization",
      primaryColor: "Primary Color",
      secondaryColor: "Secondary Color",
      package: "Selected Package",
      choosePackage: "Choose...",
      packagePremium: "Premium",
      packageDeluxe: "Deluxe",
      packageGold: "Gold",
      duplicationService: "Duplicate Invitations in English & Spanish?",
      invitationNameBride: "How should the bride's name appear?",
      invitationNameGroom: "How should the groom's name appear?",
      firstNameOrder: "Which name should appear first?",
      musicLink: "Background Music (YouTube link)",
      bibleText: "Bible Verse / Quote (optional)",
      mapsCeremony: "Maps Link for Ceremony",
      mapsReception: "Maps Link for Reception",
      dressCode: "Dress Code",
      giftType: "Gift Type",
      giftDetails: "Gift Account Details / Registry Info",
      submit: "Submit"
    },
    es: {
      title: "Detalles de Invitación de Boda",
      description: "¡Felicidades! Estás un paso más cerca de compartir los detalles de tu boda. Por favor completa el formulario con información precisa.",
      coupleInfo: "Información de la Pareja",
      brideName: "Nombre de la Novia",
      groomName: "Nombre del Novio",
      email: "Correo Electrónico",
      phone: "Número de Teléfono",
      country: "País de Origen del Servicio",
      weddingPlanner: "Wedding Planner",
      weddingDetails: "Detalles de la Boda",
      weddingDate: "Fecha de la Boda",
      ceremonyVenue: "Lugar de la Ceremonia",
      ceremonyTime: "Hora de la Ceremonia (opcional)",
      receptionVenue: "Lugar de la Recepción",
      receptionTime: "Hora de la Recepción",
      proposalDate: "Fecha de Entrega de la Propuesta",
      customization: "Personalización de la Invitación y Sitio Web",
      primaryColor: "Color Primario",
      secondaryColor: "Color Secundario",
      package: "Paquete Seleccionado",
      choosePackage: "Elige...",
      packagePremium: "Premium",
      packageDeluxe: "Deluxe",
      packageGold: "Gold",
      duplicationService: "¿Duplicar invitaciones en inglés e español?",
      invitationNameBride: "¿Cómo debe aparecer el nombre de la novia?",
      invitationNameGroom: "¿Cómo debe aparecer el nombre del novio?",
      firstNameOrder: "¿Cuál nombre debe aparecer primero?",
      musicLink: "Música de Fondo (enlace de YouTube)",
      bibleText: "Texto Bíblico / Cita (opcional)",
      mapsCeremony: "Enlace de Maps para la Ceremonia",
      mapsReception: "Enlace de Maps para la Recepción",
      dressCode: "Código de Vestimenta",
      giftType: "Tipo de Regalo",
      giftDetails: "Detalles de la Cuenta Bancaria o Registro de Regalos",
      submit: "Enviar"
    }
  };

  const onSubmit = data => {
    console.log("Form Data:", data);
    // Later: post data to an API endpoint for processing
  };

  return (
    <div className="container mt-5">
      {/* Language Switcher */}
      <div className="d-flex justify-content-end mb-3">
        <button 
          className={`btn ${lang === 'en' ? 'btn-primary' : 'btn-outline-primary'} me-2`} 
          onClick={() => setLang('en')}
        >
          English
        </button>
        <button 
          className={`btn ${lang === 'es' ? 'btn-primary' : 'btn-outline-primary'}`} 
          onClick={() => setLang('es')}
        >
          Español
        </button>
      </div>

      <h1>{translations[lang].title}</h1>
      <p>{translations[lang].description}</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Couple Information */}
        <h3>{translations[lang].coupleInfo}</h3>
        <div className="mb-3">
          <label htmlFor="brideName" className="form-label">{translations[lang].brideName}</label>
          <input 
            type="text" 
            className="form-control" 
            id="brideName" 
            {...register("brideName", { required: `${translations[lang].brideName} is required.` })}
          />
          {errors.brideName && <small className="text-danger">{errors.brideName.message}</small>}
        </div>

        {/* (Repeat similar fields for groomName, email, phone, etc.) */}

        <button type="submit" className="btn btn-primary">
          {translations[lang].submit}
        </button>
      </form>
    </div>
  );
}
