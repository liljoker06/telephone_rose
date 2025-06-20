import User from '../models/modelUser.js';
import { clearConversation } from './chatController.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const saltRounds = 10;
const JWT_SECRET = process.env.JWT_SECRET;

export const registerUser = async (req, res) => {
  const { pseudo, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { pseudo } });
    if (existingUser) {
      return res.status(400).json({ error: 'Ce pseudo est déjà pris !' });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    await User.create({
      pseudo,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'Compte créé avec succès !' });
  } catch (err) {
    console.error('Erreur register:', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

export const loginUser = async (req, res) => {
  const { pseudo, password } = req.body;

  try {
    const user = await User.findOne({ where: { pseudo } });
    if (!user) {
      return res.status(401).json({ error: 'Utilisateur non trouvé' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Mot de passe incorrect' });
    }

    const token = jwt.sign(
      { userId: user.id, pseudo: user.pseudo },
      JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.cookie('token', token, {
      httpOnly: true,
      secure: false, // En prod tu mettras true avec HTTPS
      sameSite: 'lax',
      maxAge: 2 * 60 * 60 * 1000,
    });

    // RENVOIE aussi le token dans le body
    res.json({ 
      message: 'Connexion réussie', 
      token,           // <-- c'est ça qui te manque
      pseudo: user.pseudo 
    });

  } catch (err) {
    console.error('Erreur login:', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

export const logoutUser = (req, res) => {
  const userId = req.user?.userId;

  res.clearCookie('token', {
    httpOnly: true,
    secure: false,
    sameSite: 'lax'
  });

  // Si userId connu → on supprime la conversation
  if (userId) {
    clearConversation(userId);
  }

  res.json({ message: 'Déconnexion réussie' });
};
