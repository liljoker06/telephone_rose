import { useEffect, useState } from 'react';

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setVisible(false);
  };

  const refuseCookies = () => {
    localStorage.setItem('cookie_consent', 'refused');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-noirElegant/95 text-roseClair p-4 rounded-xl shadow-xl flex flex-col md:flex-row justify-between items-center gap-4 z-50 animate-slide-in">
      <div className="flex flex-col gap-2 text-center md:text-left">
        <p>
          Ce site utilise des cookies pour assurer le bon fonctionnement du service et la gestion de votre session de connexion.
          Aucune donnée personnelle n’est revendue ou utilisée à des fins publicitaires.
        </p>
        <a 
          href="/politique-confidentialite" 
          className="text-or underline hover:text-roseClair transition text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          En savoir plus (Politique de confidentialité)
        </a>
      </div>

      <div className="flex gap-3">
        <button
          onClick={refuseCookies}
          className="px-4 py-2 border border-roseClair text-roseClair font-bold rounded-full hover:bg-roseClair/20 transition text-lg"
        >
          Refuser
        </button>
        <button
          onClick={acceptCookies}
          className="px-4 py-2 bg-or text-noirElegant font-bold rounded-full hover:bg-roseClair transition text-lg"
        >
          Accepter
        </button>
      </div>
    </div>
  );
}
