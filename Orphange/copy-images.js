const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', 'OrphansOg - Copy');
const targetDir = path.join(__dirname, 'public');

console.log('Source directory:', sourceDir);
console.log('Target directory:', targetDir);

// Create public directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  console.log('Creating public directory...');
  fs.mkdirSync(targetDir, { recursive: true });
}

// List of images to copy
const images = [
  'anjali.jpeg',
  'rahul.jpeg',
  'happy-children.png',
  'art-class.jpg',
  'basketball.jpg',
  'music-dance.jpg',
  'field-trip.jpg',
  'life-skills.jpg',
  'community-service.jpg',
  'music.jpg',
  'sports.jpg',
  'art.jpg',
  'OR.jpeg'
];

// Copy each image
images.forEach(image => {
  const sourcePath = path.join(sourceDir, image);
  const targetPath = path.join(targetDir, image);
  
  console.log(`Attempting to copy ${image}...`);
  console.log('Source path:', sourcePath);
  console.log('Target path:', targetPath);
  
  try {
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`✓ Successfully copied ${image}`);
    } else {
      console.log(`✗ Source file not found: ${image}`);
    }
  } catch (err) {
    console.error(`✗ Error copying ${image}:`, err.message);
  }
}); 