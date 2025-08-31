import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { sequelize } from './models/index.js';
import notificationRoutes from './routes/notificationRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/notifications', notificationRoutes);

const PORT = process.env.PORT || 4000
sequelize.sync({ alter: true }).then(() => {
  console.log('Database synced');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((error) => {
  console.error('Error syncing database:', error)
});
