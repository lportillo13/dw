// components/SelectLanguages.js
export default function SelectLanguages({ selected, onChange }) {
    const languages = [
      { code: 'es', label: 'Español' },
      { code: 'en', label: 'English' },
      { code: 'fr', label: 'Français' }
    ];
  
    const toggle = (code) => {
      if (selected.includes(code)) {
        onChange(selected.filter(l => l !== code));
      } else {
        onChange([...selected, code]);
      }
    };
  
    return (
      <div className="mb-4 justify-content-center">
        <label className="form-label fw-semibold">Selecciona los idiomas en los que deseas responder</label>
        <div className="d-flex flex-wrap gap-3">
          {languages.map(({ code, label }) => (
            <label key={code} className="form-check">
              <input
                type="checkbox"
                className="form-check-input me-1"
                checked={selected.includes(code)}
                onChange={() => toggle(code)}
              />
              {label}
            </label>
          ))}
        </div>
      </div>
    );
  }
  