const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.use("/api/products", require('./routes/products'));
app.use("/api/users", require('./routes/users').router);
app.use("/api/orders", require('./routes/orders'));
app.use("/api/admin", require('./routes/admin'));
app.use("/chatbot", require('./chatbot/ai'));

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
