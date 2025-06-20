import express from 'express';
import cors from 'cors';
import chatRoutes from './routes/chatRoutes.js';
import authRoutes from './routes/authRoutes.js';  
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import db from './models/index.js'; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

console.log('🌍 DB_USER =', process.env.DB_USER);
console.log('🌍 DB_PASSWORD =', process.env.DB_PASSWORD);
console.log('🌍 DB_NAME =', process.env.DB_NAME);
console.log('🌍 DB_HOST =', process.env.DB_HOST);

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(cookieParser());
app.use(express.json());

// Routes
app.use('/api/chat', chatRoutes);
app.use('/api/auth', authRoutes);

db.sequelize.authenticate()
  .then(() => {
    console.log('✅ Database connection established successfully.');
    return db.sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log('✅ Database synced');
    app.listen(PORT, () => {
      console.log(`💋 Téléphone Rose Backend running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Error connecting to the database:', err);
  });
