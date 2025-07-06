import express from 'express';
import itemRoutes from './routes/itemRoutes';
import quizRoutes from './routes/quizRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());

// Routes
app.use('/api/items', itemRoutes);
app.use('/api/quiz', quizRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;