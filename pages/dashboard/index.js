// pages/dashboard.js
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import SidebarTabs from "./SidebarTabs";

import InformacionGeneral from "./InformacionGeneral";
import ActivarSecciones from "./ActivarSecciones";
import Web from "./Web";
import Calendario from "./Calendario";
import Cancion from "./Cancion";
import TextoRomantico from "./TextoRomantico";
import Evento from "./Evento";
import RSVP from "./RSVP";
import Links from "./Links";
import TitulosYTexto from "./TitulosYTexto";

import enCommon from "../../locales/en/common.json";
import esCommon from "../../locales/es/common.json";

export default function DashboardPage() {
  const router = useRouter();
  const { couple_id: id } = router.query;

  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState("es");
  const common = lang === "es" ? esCommon : enCommon;

  const [activeTab, setActiveTab] = useState("");
  const allTabs = [
    { name: "Información General", always: true },
    { name: "Activar Secciones", always: true },
    { name: "Web", always: true },
    { name: "Calendario", flag: "activar_calendario" },
    { name: "Canción", flag: "activar_cancion" },
    { name: "Texto Romántico", flag: "activar_texto_romantico" },
    {
      name: "Evento",
      condition: () =>
        Boolean(formData.es_evento) ||
        Boolean(formData.activar_ceremonia) ||
        Boolean(formData.activar_recepcion),
    },
    { name: "RSVP", flag: "activar_confirmacion" },
    { name: "Links", flag: "activar_confirmacion" },
    { name: "Títulos & Texto", always: true },
  ];
  const tabs = allTabs
    .filter(
      (tab) =>
        tab.always ||
        (tab.flag && Boolean(formData[tab.flag])) ||
        (tab.condition && tab.condition())
    )
    .map((tab) => tab.name);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/getCoupleDetails?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) setFormData(data);
        else alert(data.error);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleJsonbChange = (fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: {
        ...(prev[fieldName] || {}),
        [lang]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/updateCouple", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...formData }),
    });
    const result = await res.json();
    if (result.error) alert("Error: " + result.error);
    else alert(common.buttons.saveChanges + "!");
  };

  useEffect(() => {
    if (tabs.length && !tabs.includes(activeTab)) {
      setActiveTab(tabs[0]);
    }
  }, [tabs, activeTab]);

  const renderTabContent = () => {
    const props = { formData, handleChange, handleJsonbChange, lang, coupleId: id };
    switch (activeTab) {
      case "Información General":
        return <InformacionGeneral {...props} />;
      case "Activar Secciones":
        return <ActivarSecciones {...props} />;
      case "Web":
        return <Web {...props} />;
      case "Calendario":
        return <Calendario {...props} />;
      case "Canción":
        return <Cancion {...props} />;
      case "Texto Romántico":
        return <TextoRomantico {...props} />;
      case "Evento":
        return <Evento {...props} />;
      case "RSVP":
        return <RSVP {...props} />;
      case "Links":
        return <Links {...props} />;
      case "Títulos & Texto":
        return <TitulosYTexto {...props} />;
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="container mt-5">
          <p>{lang === "es" ? "Cargando..." : "Loading..."}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div style={{ textAlign: "right", padding: "1rem" }}>
        <button
          onClick={() => setLang("es")}
          className={lang === "es" ? "btn btn-secondary" : "btn btn-outline-secondary"}
        >
          Español
        </button>{" "}
        <button
          onClick={() => setLang("en")}
          className={lang === "en" ? "btn btn-secondary" : "btn btn-outline-secondary"}
        >
          English
        </button>
      </div>
      <div style={{ display: "flex" }}>
        <SidebarTabs tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} lang={lang} />
        <div style={{ flex: 1, paddingLeft: "1rem" }}>
          <h1>{common.titles.dashboard}</h1>
          <form onSubmit={handleSubmit}>
            {renderTabContent()}
            <button type="submit" className="btn btn-primary mt-3">
              {common.buttons.saveChanges}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
