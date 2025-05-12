const mongoose = require('mongoose');
const Member = require('./models/Member');

mongoose.connect('mongodb://localhost:27017/teamdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const members = [
  {
    _id: 'madhav',
    name: 'Madhav Menon B',
    regNo: 'RA2211027010126',
    year: '3rd Year',
    role: 'Developer',
    bio: 'Third year CSE BDA student passionate about MERN stack.',
    aboutProject: 'Building a MERN app to showcase team members dynamically.',
    hobbies: ['Basketball', 'Coding', 'Reading'],
    certificate: 'AWS Certified Cloud Practitioner',
    internship: 'Renault Nissan Automotive - SCM Optimization',
    aim: 'To become a full-stack engineer and AI specialist.',
    imageUrl: '/images/madhav.jpg',
  },
  {
    _id: 'srikanth',
    name: 'Srikanth Venkatesan',
    regNo: 'RA2211027010119',
    year: '3rd Year',
    role: 'Developer',
    bio: 'Third year CSE BDA student passionate about Big tech.',
    aboutProject: 'Building a MERN app to showcase team members dynamically.',
    hobbies: ['MovieBuff', 'Coding', 'Gym'],
    certificate: 'Oracle Certified Cloud Practitioner',
    internship: 'Black Bulls - AI Internship',
    aim: 'To become a full-stack engineer',
    imageUrl: '/images/srikanth.png',
  },
  {
    _id: 'rahul',
    name: 'Rahul Mahadevan',
    regNo: 'RA2211027010089',
    year: '3rd Year',
    role: 'Developer',
    bio: 'Third year CSE BDA student passionate about learning',
    aboutProject: 'Building a MERN app to showcase team members dynamically.',
    hobbies: ['Cinema', 'Football', 'Psychology'],
    certificate: 'Redhat Certified Cloud Practitioner',
    internship: 'Reddiflow Internship',
    aim: 'To become a full-stack engineer.',
    imageUrl: '/images/rahul.png',
  },
  {
    _id: 'sarthak',
    name: 'Sarthak Sharma',
    regNo: 'RA2211027010095',
    year: '3rd Year',
    role: 'Developer',
    bio: 'Third year CSE BDA student passionate about MERN stack.',
    aboutProject: 'Building a MERN app to showcase team members dynamically.',
    hobbies: ['Gym', 'Coding', 'Rock-Climbing'],
    certificate: 'Google Certified Cloud Practitioner',
    internship: 'Reddiflow Internship',
    aim: 'To become a full-stack engineer and AI specialist.',
    imageUrl: '/images/sarthak.jpg',
  },
  // Add Srikanth, Rahul, Sarthak similarly...
];

async function seedDatabase() {
    try {
      await Member.deleteMany({});
      console.log('Existing members cleared.');
  
      await Member.insertMany(members);
      console.log('Seed data inserted successfully!');
  
    } catch (err) {
      console.error('Error seeding data:', err);
    } finally {
      mongoose.disconnect();
    }
  }
  
  seedDatabase();
