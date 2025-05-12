const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Member = require('./models/Member'); // Import the Member model

const app = express();
app.use(cors());
app.use(express.json());

app.use('/images', express.static('public/images'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/teamdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
}).on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

// Routes
app.get('/api/members', async (req, res) => {
  try {
    const members = await Member.find(); // Fetch all members
    res.json(members);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch members' });
  }
});

app.get('/api/members/:id', async (req, res) => {
  try {
    const member = await Member.findById(req.params.id); // Fetch member by ID
    if (!member) {
      return res.status(404).json({ error: 'Member not found' });
    }
    res.json(member);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch member' });
  }
});

app.post('/api/members', async (req, res) => {
  try {
    const newMember = new Member(req.body);
    await newMember.save();
    res.status(201).json({ message: 'Member added' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add member' });
  }
});


// Serve static images if they are stored locally in /backend/images folder
app.use('/images', express.static('images'));

app.listen(5000, () => console.log('Server running on port 5000'));
