const express = require('express');
const cors = require('cors');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/cart', cartRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
