const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();
const app = express();

// CORS configuration (MUST BE FIRST)
app.use(cors());

// Body parser
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Route files
const corporateRoutes = require('./routes/corporateRoutes');
const workforceRoutes = require('./routes/workforceRoutes');
const contentRoutes = require('./routes/contentRoutes');
const webMarketRoutes = require('./routes/webMarketRoutes');

// Mount routers
app.use('/api/corporate', corporateRoutes);
app.use('/api/workforce', workforceRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/web-market', webMarketRoutes);

app.get('/', (req, res) => {
  res.send('HC Parekh Admin API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
