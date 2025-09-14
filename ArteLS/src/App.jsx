import React, { useState, useEffect } from "react";
import Buttons from "./Buttons";
import "./index.css";
import bgImage from "./images/bg21.png";

export default function App() {
  const [activeSection, setActiveSection] = useState("Home");

  // 👇 Scroll automat + highlight pe secțiunea activă
  useEffect(() => {
    const sectionEl = document.getElementById("panou-galben");
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: "smooth", block: "start" });

      // highlight vizual
      sectionEl.classList.add("section-highlight");
      const timer = setTimeout(() => {
        sectionEl.classList.remove("section-highlight");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [activeSection]);

  const sectionContent = {
    Home: [
      <div key="home">
        <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
          MiGa Hub: Arts&Languages
        </h2>
        <p style={{ textAlign: "center", fontWeight: "bold" }}>
          - ateliere de artă în limbi străine pentru copii -
        </p>
        <p style={{ textAlign: "center" }}>
          Învață limbi străine prin artă și comunicare!
        </p>

        <p className="highlight-red">
          - asigurați-vă locul până pe 24 septembrie pentru modulul de franceză
        </p>
        <p className="highlight-red"> 3 octombrie - 7 decembrie </p>

        <p className="highlight-red">
          - asigurați-vă locul până pe 24 septembrie pentru modulul de engleză
        </p>
        <p className="highlight-red"> 3 octombrie - 7 decembrie </p>
        <p className="highlight-red">
          - înscrierile pentru modulul de germană încep din 15 octombrie -
        </p>
      </div>,
    ],

    DespreCursuri: [
      <p key="cursuri-1">
        Bine ați venit la MiGa Hub: Arts&Languages, spațiul unde creativitatea
        se împletește firesc cu învățarea limbilor străine.
      </p>,
      <p key="cursuri-2">
        În cadrul cursurilor pentru copii, activitățile artistice precum
        modelaj, desen, origami sau colaj se desfășoară exclusiv în limba
        aleasă.
      </p>,
      <p key="cursuri-3">
        Atelierele de limbi străine prin arte plastice combină comunicarea
        constantă în limba țintă cu dezvoltarea creativității și a simțului
        estetic.
      </p>,
      <p key="cursuri-4">
        Puteți alege cursuri de franceză, engleză sau germană, asociate cu
        inițierea în modelare, desen, ceramică, pictură și tehnici mixte.
      </p>,
      <p key="cursuri-5">
        Grupurile sunt formate din 4–6 copii, vârsta recomandată fiind 5-12 ani.
        Modulele sunt de 10 ședințe a câte 90 de minute. Prețul unui modul este
        de 1500 RON, materialele fiind incluse în preț.
      </p>,
    ],

    DespreMine: [
      <p key="mine-1">
        Mă numesc Mihaela Mihalache, am absolvit facultățile de Limbi Străine și
        Arte Plastice și sunt artist vizual, profesoară de arte plastice și
        limbi străine.
      </p>,
      <p key="mine-2">
        Am experiență ca artist plastic, CG artist, 3D artist, broadcast graphic
        designer, level și game designer pentru companii precum TVR, DigiTV,
        Ubisoft, Playtika, Activision, Amber, FunLabs.
      </p>,
      <p key="mine-3">
        Am predat limbi străine în școli și grădinițe private din București.
      </p>,
    ],

    IntrebariFrevente: [
      <div key="faq">
        <p>
          <strong>Întrebare:</strong> Copilul meu nu știe limba respectivă, dar
          vrea să o învețe. Mă tem că nu o să înțeleagă nimic, lui i-ar trebui
          un curs în română.
        </p>
        <p>
          <strong>Răspuns:</strong> Dragi părinți, preocuparea dumneavoastră
          este firească. Atelierele sunt concepute ca micuții să ia contact
          direct cu limba străină respectivă și să înceapă să o învețe într-un
          mod cât mai natural.
        </p>

        <p>
          <strong>Întrebare:</strong> Copilul meu deja știe foarte bine limba
          respectivă, nu are nevoie de acest curs.
        </p>
        <p>
          <strong>Răspuns:</strong> În cadrul atelierelor, copiii au ocazia să
          își exerseze și perfecționeze cunoștințele de limbi străine într-un
          mediu relaxat și natural.
        </p>
      </div>,
    ],

    Locatii: [
      <p key="loc-1" style={{ textAlign: "center" }}>
        Arts&Languages funcționează în două locații:
      </p>,
      <p key="loc-2">
        1. Atelierul luminos și spațios din orașul Buzău, aproape de Parcul
        Crâng.
      </p>,
      <p key="loc-3">
        2. Atelierul - expoziție de la pădure, în Satul Săsenii Vechi, situat la
        15 km de Buzău, cu terase minunate și spații de lucru deosebite.
      </p>,
    ],

    "Termeni și Condiții": [
      <p key="termeni-1">
        Un numar maxim de 2 cursuri plătite și neefectuate pot fi recuperate
        într-un interval de maxim 30 de zile, doar dacă există locuri
        disponibile în altă grupă similară.
      </p>,
    ],

    Grupe: [
      <div key="buzau">
        <strong>Atelier în orașul Buzău:</strong>
        <div
          className="schedule"
          style={{ marginLeft: "20px", textAlign: "left" }}
        >
          <div>
            <strong>Vineri</strong>
            <div key="sasenii" className="schedule-textVineri">
              <p>10:30-12:00 → Vârsta 5 - 7 ani - FRANCEZA</p>
              <p>13:30-15:00 → Vârsta 7 - 9 ani - ENGLEZA</p>
              <p>16:30-18:00 → Vârsta 10 - 12 ani - FRANCEZA</p>
            </div>
          </div>

          <div>
            <strong>Sâmbătă</strong>
            <div key="saseniiS" className="schedule-textSambata">
              <p>10:30-12:00 → Vârsta 7 - 9 ani - FRANCEZA</p>
              <p>13:30-15:00 → Vârsta 5 - 7 ani - ENGLEZA</p>
              <p>16:30-18:00 → Vârsta 10 - 12 ani - FRANCEZA</p>
            </div>
          </div>
        </div>
      </div>,

      <div key="sasenii">
        <strong>Atelier la pădure (Săsenii Vechi):</strong>
        <div
          className="schedule"
          style={{ marginLeft: "20px", textAlign: "left" }}
        >
          <div>
            <strong>Duminică</strong>
            <div key="saseniiD" className="schedule-textDuminica">
              <p>10:30-12:00 → Vârsta 10 - 12 ani - FRANCEZA</p>
              <p>13:30-15:00 → Vârsta 7 - 9 ani - FRANCEZA</p>
              <p>16:30-18:00 → Vârsta 5 - 7 ani - ENGLEZA</p>
            </div>
          </div>
        </div>
      </div>,
    ],

    Costuri: [
      <p key="cost-1">
        Un modul de 10 ședințe : 1500 RON (materialele incluse)
      </p>,
      <p key="cost-2">Plata se face în cont RO32BTRLRONCRT0CX2896801</p>,
    ],

    Contact: [
      <div key="contact">
        <p>📞 Telefon: 0722513667 (Mihaela Mihalache)</p>
        <p>
          📧 Email:{" "}
          <a href="mailto:arts.languages.hub@gmail.com">
            arts.languages.hub@gmail.com
          </a>
        </p>
      </div>,
    ],
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="buttons-container">
        <Buttons
          setActiveSection={setActiveSection}
          activeSection={activeSection}
        />
      </div>

      {/* Panou cu scroll intern doar pentru Grupe */}
      <div
        id="panou-galben"
        className={activeSection === "Grupe" ? "grupe" : ""}
      >
        {sectionContent[activeSection]}
      </div>
    </div>
  );
}
