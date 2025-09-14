import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function App() {
  const [section, setSection] = useState("home");
  const [atelier2, setAtelier2] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Sus: text + butoane */}
      <div className="flex-1 p-6 md:p-12">
        <div className="flex gap-4 mb-6 flex-wrap">
          <Button onClick={() => setSection("home")}>Home</Button>
          <Button onClick={() => setSection("contact")}>Contact</Button>
          <Button onClick={() => setSection("cost")}>Cost și modalități de plată</Button>
          <Button onClick={() => setSection("program")}>Program</Button>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          {section === "home" && (
            <div>
              <p className="mb-4">
                <strong>MiGa Hub</strong> este un Hub Atelier de limbi străine și arte plastice
                care inaugurează din septembrie două noi ateliere:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>1.</strong> Atelierul de limbi străine prin arte – unde comunicarea se
                  face prin limba străină aleasă 👉{" "}
                  <a
                    href="https://MigaHubArts.github.io/migahub-site2/ArteLS"
                    target="_blank"
                    className="text-blue-600 underline"
                  >
                    link
                  </a>
                </li>
                <li>
                  <strong>2.</strong>{" "}
                  <button
                    onClick={() => setAtelier2(true)}
                    className="text-blue-600 underline"
                  >
                    Atelier de limba franceză online pentru copii (click aici)
                  </button>
                </li>
                <li>
                  <strong>3.</strong> Atelier de limba franceză destinat publicului larg 👉{" "}
                  <a href="#" className="text-blue-600 underline">
                    link
                  </a>
                </li>
              </ul>

              {atelier2 && (
                <div className="mt-6 bg-gray-100 p-4 rounded-xl">
                  <p>
                    În acest atelier de limba franceză se aplică un fel personal de a preda limbi
                    străine, foarte centrat pe elev și pe evoluția acestuia, folosind metode
                    interactive, amuzante și moderne.
                  </p>
                  <p className="mt-2">
                    Aceste cursuri sunt online și se adresează copiilor de toate vârstele. Sunt
                    individuale, croite pentru fiecare cursant în parte. Cursantul are toată
                    atenția profesorului și rezultatele nu întârzie să apară!
                  </p>
                </div>
              )}
            </div>
          )}

          {section === "contact" && (
            <div>
              <p>Email: <strong>arts.languages.hub@gmail.com</strong></p>
              <p className="mt-2">Tel: <strong>0722513667</strong></p>
            </div>
          )}

          {section === "cost" && (
            <div>
              <p><strong>IBAN:</strong> RO00 XXXX 0000 0000 0000 0000</p>
              <p className="mt-2">12 ședințe – <strong>1000 RON</strong></p>
            </div>
          )}

          {section === "program" && (
            <div>
              <p>
                Programul se va stabili la înscriere, în funcție de disponibilitatea cursantului și
                de numărul de locuri disponibile.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Jos: imagine */}
      <div className="w-full md:h-96 h-64">
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
          alt="MiGa Hub"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
