import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import chalk from 'chalk';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoute.js'
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
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan('dev')); // Morgan middleware for logging

// Routes
app.use('/api/v1/auth', authRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to my blog application!');
});

const PORT = process.env.PORT || 8000; 

// Start the server
app.listen(PORT, () => {
  console.log(chalk.yellow(`Server is running on port ${PORT}`)); // Styling the log message
});
