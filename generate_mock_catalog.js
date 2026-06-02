// generate_mock_catalog.js
// Run with Node to produce seed_catalog.json with 900+ mock romance book entries.
const fs = require('fs');
const path = require('path');

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRating() {
  return parseFloat((4.0 + Math.random() * 1.0).toFixed(1)); // 4.0 - 5.0
}

function randomPopularity() {
  return randomInt(20000, 500000);
}

function randomYear() {
  return randomInt(1800, 2025);
}

function randomPages() {
  return randomInt(150, 800);
}

function randomChoice(arr) {
  return arr[randomInt(0, arr.length - 1)];
}

const subgenres = [
  'Historical',
  'Gothic',
  'Fantasy/Paranormal',
  'Contemporary',
  'Sci-Fi',
  'Modern'
];

const tropesPool = [
  'Enemies to Lovers',
  'Fake Dating',
  'Forbidden Love',
  'Slow Burn',
  'Friends to Lovers',
  'Second Chance',
  'Royalty',
  'Small Town',
  'Secret Romance',
  'Billionaire',
  'Love Triangle'
];

function generateTropes(subgenre) {
  const base = ['Classics'];
  const extra = [];
  if (subgenre === 'Gothic') extra.push('Gothic Secrets', 'Dark Atmosphere');
  if (subgenre === 'Fantasy/Paranormal') extra.push('Magic', 'Fated Mates');
  const randomTropes = [];
  while (randomTropes.length < 3) {
    const t = randomChoice(tropesPool);
    if (!randomTropes.includes(t)) randomTropes.push(t);
  }
  return base.concat(extra, randomTropes).slice(0, 5);
}

function generateChapters(title, author) {
  const chapters = [];
  for (let i = 1; i <= 4; i++) {
    chapters.push({
      title: `Chapter ${i}`,
      content: [
        `Preview of "${title}" by ${author} – Chapter ${i}.",
        "This is a placeholder excerpt to give readers a taste of the story."
      ]
    });
  }
  return chapters;
}

const catalog = [];
for (let i = 1; i <= 900; i++) {
  const subgenre = randomChoice(subgenres);
  const title = `Romance Novel ${i}`;
  const author = `Author ${i}`;
  catalog.push({
    id: `mock-${i}`,
    title,
    author,
    year: randomYear(),
    language: 'en',
    genres: ['Romance', subgenre],
    subgenre,
    rating: randomRating(),
    popularity: randomPopularity(),
    pages: randomPages(),
    quickHook: `A compelling ${subgenre.toLowerCase()} romance that explores love and destiny.`,
    synopsis: `Synopsis for ${title}. A heartfelt story about love, challenges, and growth.`,
    tropes: generateTropes(subgenre),
    downloadUrlEpub: '#',
    downloadUrlPdf: '#',
    isFullyLoaded: false,
    chapters: generateChapters(title, author)
  });
}

const outputPath = path.join(__dirname, 'seed_catalog.json');
fs.writeFileSync(outputPath, JSON.stringify(catalog, null, 2), 'utf8');
console.log(`Generated mock catalog with ${catalog.length} entries at ${outputPath}`);
