require('dotenv').config();
const mongoose = require('mongoose');
const Course = require('./models/Course');

const courses = [
  { title: 'MERN Stack Development', category: 'Development', duration: '6 Months', level: 'Intermediate', fee: 60000, description: 'Build full stack apps with MongoDB, Express, React and Node.js.' },
  { title: 'Web Development', category: 'Development', duration: '3 Months', level: 'Beginner', fee: 30000, description: 'HTML, CSS, JavaScript and responsive websites from scratch.' },
  { title: 'PHP Laravel', category: 'Development', duration: '3 Months', level: 'Intermediate', fee: 35000, description: 'Backend development with PHP and the Laravel framework.' },
  { title: 'Graphic Designing', category: 'Graphic Designing', duration: '3 Months', level: 'Beginner', fee: 25000, description: 'Photoshop and Illustrator for logos, branding and social media.' },
  { title: 'UI/UX Design', category: 'Graphic Designing', duration: '3 Months', level: 'Beginner', fee: 28000, description: 'Design clean app and website interfaces with Figma.' },
  { title: 'Digital Marketing', category: 'Digital Marketing', duration: '3 Months', level: 'Beginner', fee: 25000, description: 'SEO, Google Ads, Meta ads and social media marketing.' },
  { title: 'SEO Mastery', category: 'Digital Marketing', duration: '2 Months', level: 'Intermediate', fee: 20000, description: 'Rank websites on Google with on-page and off-page SEO.' },
  { title: 'Ethical Hacking', category: 'Cyber Security', duration: '4 Months', level: 'Intermediate', fee: 45000, description: 'Learn penetration testing and how to defend networks.' },
  { title: 'Shopify Ecommerce', category: 'Ecommerce', duration: '2 Months', level: 'Beginner', fee: 20000, description: 'Set up and run an online store on Shopify.' },
  { title: 'Data Analysis with Excel', category: 'IT and Software', duration: '2 Months', level: 'Beginner', fee: 18000, description: 'Clean, analyze and visualize data with Excel.' },
];

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  await Course.deleteMany();
  await Course.insertMany(courses);
  console.log('Courses added');
  process.exit();
}

seed();