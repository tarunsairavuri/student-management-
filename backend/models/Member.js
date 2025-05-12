const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    _id: String,                // e.g., 'madhav'
    name: String,               // Full name
    regNo: String,              // Registration number
    year: String,               // e.g., '3rd Year'
    role: String,               // e.g., Developer
    bio: String,                // General bio
    aboutProject: String,       // Details about the project
    hobbies: [String],          // Array of hobbies
    certificate: String,        // Major certificate or achievement
    internship: String,         // Internship details
    aim: String,                // Personal or career aim
    imageUrl: String,           // Profile image path
  });
  
const Member = mongoose.model('Member', memberSchema);

module.exports = Member;