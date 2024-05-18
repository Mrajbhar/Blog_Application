import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import chalk from 'chalk';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoute.js';
import postroute from "./routes/postRoute.js"
import cors from 'cors'; 

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log(chalk.green('MongoDB connected'));
})
.catch((err) => {
  console.error(chalk.red('MongoDB connection error:'), err);
});

const app = express();

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan('dev')); // Morgan middleware for logging

// Routes
app.use('/api/v1/auth', authRoutes);

app.use('/api/v1/post',postroute);

// Root endpoint
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the e-commerce app<h1>');
});

const PORT = process.env.PORT || 8000;

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(chalk.red('Error:', err));
  res.status(500).json({ error: 'Internal server error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(chalk.yellow(`Server is running on port ${PORT}`)); // Styling the log message
});
