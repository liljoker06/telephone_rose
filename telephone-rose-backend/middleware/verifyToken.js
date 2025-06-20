import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); 

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  console.error('❌ JWT_SECRET is not defined ! Vérifie ton fichier .env');
}

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: 'Non autorisé : Token manquant' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // ajoute les infos utilisateur à la requête
    next();
  } catch (err) {
    console.error('Token invalide :', err);
    return res.status(401).json({ error: 'Non autorisé : Token invalide' });
  }
};

export default verifyToken;
