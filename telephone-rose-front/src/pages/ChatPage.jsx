import ChatWindow from '../components/ChatWindow';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../services/auth';  // on importe le service API logout

export default function ChatPage() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser(); // Appelle l'API pour clear le cookie côté serveur
      localStorage.removeItem('isLoggedIn'); // Nettoie le localStorage (ou sessionStorage si tu préfères)

      console.log('Déconnexion réussie');
      navigate('/login');
    } catch (err) {
      console.error('Erreur de déconnexion:', err.response?.data?.error || err.message);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-roseFonce to-noirElegant text-roseClair p-4">
      <header className="flex justify-between items-center p-4 border-b border-roseClair/40 mb-4">
        <h1 className="text-4xl font-glamour flex items-center gap-2">
          💋 Chat Téléphone Rose IA 💋
        </h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 bg-or text-noirElegant font-bold rounded-full hover:bg-roseClair transition text-lg shadow-md"
        >
          <ArrowRightOnRectangleIcon className="w-5 h-5" />
          Déconnexion
        </button>
      </header>

      <main className="flex-grow flex justify-center items-center">
        <div className="w-full max-w-3xl h-[80vh]">
          <ChatWindow />
        </div>
      </main>

      <footer className="text-center p-4 text-sm text-roseClair/70">
        Téléphone Rose IA — Service réservé aux adultes (18+)
      </footer>
    </div>
  );
}
