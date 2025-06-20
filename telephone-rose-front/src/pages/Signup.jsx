import { useNavigate } from 'react-router-dom';
import { UserPlusIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { registerUser } from '../services/auth';

export default function Signup() {
  const navigate = useNavigate();
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(pseudo, password);
      console.log(res.data);
      navigate('/login');
    } catch (err) {
      console.error(err.response?.data?.error || 'Erreur serveur');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-roseFonce to-noirElegant text-roseClair p-4">
      <h1 className="text-5xl font-glamour mb-8 text-center">💋 Créer un compte Téléphone Rose 💋</h1>

      <form onSubmit={handleSubmit} className="flex flex-col bg-noirElegant/70 p-8 rounded-xl shadow-lg w-full max-w-sm space-y-6">
        <label className="flex flex-col text-elegant text-lg">
          Votre Pseudo
          <input
            type="text"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
            required
            className="mt-2 p-3 rounded-md bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-roseClair"
          />
        </label>

        <label className="flex flex-col text-elegant text-lg">
          Mot de passe
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-2 p-3 rounded-md bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-roseClair"
          />
        </label>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-6 py-3 bg-or text-noirElegant font-bold rounded-full hover:bg-roseClair transition text-xl"
        >
          <UserPlusIcon className="w-6 h-6" />
          Créer mon compte
        </button>
      </form>

      <p className="mt-6 text-elegant">
        Déjà inscrit ?{' '}
        <button
          onClick={() => navigate('/login')}
          className="text-or hover:text-roseClair underline font-bold"
        >
          Connectez-vous ici
        </button>
      </p>
    </div>
  );
}
