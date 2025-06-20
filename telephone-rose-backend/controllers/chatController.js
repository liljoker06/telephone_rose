import axios from 'axios';
import fs from 'fs';
import path from 'path';

const conversationDir = path.resolve('./conversations');
if (!fs.existsSync(conversationDir)) {
  fs.mkdirSync(conversationDir);
}

export const chatWithIA = async (req, res) => {
  const { message } = req.body;
  const userId = req.user?.userId || 'anonymous';

  const conversationPath = path.join(conversationDir, `${userId}.json`);

  let conversationHistory = [];
  if (fs.existsSync(conversationPath)) {
    const data = fs.readFileSync(conversationPath, 'utf8');
    conversationHistory = JSON.parse(data);
  }

  // Si aucune conversation, ajouter le message system
  if (conversationHistory.length === 0) {
    conversationHistory.push({
      role: 'system',
      content: "Tu es une IA sexy, comme un téléphone rose. Sois séductrice, joueuse, attentionnée. Parle toujours en français comme une opératrice de téléphone rose. 💋",
    });
  }

  // Ajouter le message utilisateur
  conversationHistory.push({ role: 'user', content: message });

  try {
    const response = await axios.post(
      'http://localhost:11434/api/chat',
      {
        model: 'llama3',
        messages: conversationHistory,
        stream: false,
      }
    );

    const iaMessage = response.data.message.content.trim();

    // Ajouter la réponse IA
    conversationHistory.push({ role: 'assistant', content: iaMessage });

    fs.writeFileSync(conversationPath, JSON.stringify(conversationHistory, null, 2), 'utf8');

    res.json({ reply: iaMessage });

  } catch (error) {
    console.error('Erreur IA:', error.response?.data || error.message);
    res.status(500).json({ error: 'Erreur lors de la génération du message IA' });
  }
};

export const clearConversation = (userId) => {
  const conversationPath = path.join(conversationDir, `${userId}.json`);
  if (fs.existsSync(conversationPath)) {
    fs.unlinkSync(conversationPath);
    console.log(`Conversation supprimée pour userId = ${userId}`);
  }
};
