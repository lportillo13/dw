import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { steps } from '../../lib/formSteps';

export default function FormPage() {
  const [answers, setAnswers] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [sessionCode, setSessionCode] = useState(null);
  const [loadCodeInput, setLoadCodeInput] = useState('');
  const [saveMessage, setSaveMessage] = useState('');
  const [showStart, setShowStart] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef(null);

  const visibleSteps = steps.filter(step => !step.condition || step.condition(answers));
  const currentVisibleIndex = visibleSteps.findIndex(s => s.id === visibleSteps[currentStep]?.id);
  const progressPercent = Math.floor((currentVisibleIndex) / (visibleSteps.length - 1) * 100);

  useEffect(() => {
    const step = visibleSteps[currentStep];
    if (step && (step.id === 'lugar_ceremonia' || step.id === 'lugar_recepcion') && window.google) {
      const autocomplete = new window.google.maps.places.Autocomplete(
        inputRef.current,
        { types: ['geocode'], fields: ['formatted_address'] }
      );
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        handleChange(step.id, place.formatted_address || '');
      });
    }
  }, [currentStep, showStart]);

  const handleChange = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleNext = async () => {
    const step = visibleSteps[currentStep];
    if (!answers[step.id]) return;

    if (currentStep < visibleSteps.length - 1) {
      setCurrentStep(i => i + 1);
      return;
    }

    const payload = sessionCode
      ? { session_code: sessionCode, ...answers }
      : { ...answers };

    console.log('SUBMITTING', payload);

    const res = await fetch('/api/couples', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const body = await res.json();

    if (res.ok) {
      if (sessionCode) {
        await fetch(`/api/session/${sessionCode}`, {
          method: 'DELETE',
        });
      }
      setSubmitted(true);
    } else {
      console.error('Error submitting form:', body.error);
      alert('Hubo un error al guardar. Intenta nuevamente.');
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(i => i - 1);
  };

  const handleSave = async () => {
    let code = sessionCode;
    if (!code) {
      const res = await fetch('/api/session', { method: 'POST' });
      const body = await res.json();
      code = body.code;
      setSessionCode(code);
    }
    await fetch(`/api/session/${code}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: answers }),
    });
    setSaveMessage(`Tu código es: ${code}`);
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(sessionCode);
      setSaveMessage('✅ Código copiado al portapapeles');
      setTimeout(() => setSaveMessage(''), 2000);
    } catch (err) {
      alert('No se pudo copiar. Copia manualmente: ' + sessionCode);
    }
  };

  const handleLoadCode = () => {
    if (!loadCodeInput.trim()) return;
    fetch(`/api/session/${loadCodeInput.trim()}`)
      .then(res => res.json())
      .then(body => {
        setAnswers(body.data || {});
        setSessionCode(loadCodeInput.trim());
        setCurrentStep(0);
        window.scrollTo(0, 0);
        setShowStart(false);
      });
  };

  const startNewForm = () => {
    setShowStart(false);
    setCurrentStep(0);
    setAnswers({});
  };

  if (showStart) {
    return (
      <div className="container py-5 text-center" id="start-screen">
        <h1>Formulario de Boda</h1>
        <div className="d-flex justify-content-center gap-2 mt-3">
          <input
            type="text"
            className="form-control w-auto"
            placeholder="Código existente"
            value={loadCodeInput}
            onChange={e => setLoadCodeInput(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleLoadCode}>Cargar</button>
          <button className="btn btn-outline-secondary" onClick={startNewForm}>Nuevo</button>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-success">🎉 ¡Gracias por completar el formulario!</h2>
        <p>Hemos recibido toda la información. Nos pondremos en contacto pronto.</p>
      </div>
    );
  }

  const step = visibleSteps[currentStep];

  return (
    <div className="container py-5">
      <div className="progress mb-4">
        <div className="progress-bar bg-success" role="progressbar"
          style={{ width: `${progressPercent}%` }}
          aria-valuenow={progressPercent}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>

      <div className="mb-3">
        <label htmlFor={step.id} className="form-label fw-semibold">{step.question}</label>
        {step.type === 'select' ? (
          <select
            id={step.id}
            ref={inputRef}
            className="form-select"
            value={answers[step.id] || ''}
            onChange={e => handleChange(step.id, e.target.value)}
            required={step.required}
          >
            <option value="">Seleccionar...</option>
            {step.options.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        ) : (
          <input
            id={step.id}
            ref={inputRef}
            type={step.type}
            className="form-control"
            value={answers[step.id] || ''}
            onChange={e => handleChange(step.id, e.target.value)}
            required={step.required}
          />
        )}
      </div>

      <div className="d-flex justify-content-between mt-4">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handlePrev}
          disabled={currentStep === 0}
        >Anterior</button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleNext}
          disabled={!answers[step.id]}
        >{currentStep < visibleSteps.length - 1 ? 'Siguiente' : 'Enviar'}</button>
      </div>

      <div className="text-center mt-3">
        <button type="button" className="btn btn-outline-info me-2" onClick={handleSave}>Guardar y continuar después</button>
        {sessionCode && (
          <span className="d-inline-flex align-items-center">
            <code className="me-2">{sessionCode}</code>
            <button className="btn btn-sm btn-outline-secondary" onClick={handleCopyCode}>Copiar</button>
          </span>
        )}
        {saveMessage && <p className="text-success mt-2">{saveMessage}</p>}
      </div>
    </div>
  );
}
