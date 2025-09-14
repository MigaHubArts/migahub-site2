import React from "react";

export default function Buttons({ setActiveSection, activeSection }) {
  const buttons = [
    { key: "Home", label: "Home" },
    { key: "DespreCursuri", label: "Despre cursuri" },
    { key: "DespreMine", label: "Despre mine" },
    { key: "Locatii", label: "Locații" },
    { key: "Grupe", label: "Grupe" },
    { key: "Termeni și Condiții", label: "Termeni și Condiții" },
    { key: "Costuri", label: "Costuri și modalitate de plată" },
    { key: "IntrebariFrevente", label: "Întrebări frecvente" },
    { key: "Contact", label: "Contact" },
  ];

  return (
    <>
      {buttons.map((btn) => (
        <button
          key={btn.key}
          onClick={() => setActiveSection(btn.key)}
          className={activeSection === btn.key ? "active" : ""}
        >
          {btn.label}
        </button>
      ))}
    </>
  );
}
