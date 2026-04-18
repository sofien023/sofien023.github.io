const fs = require('fs');
const path = require('path');

const envPath = '.env';
const outputPath = path.join('js', 'keys-built.js');

if (!fs.existsSync(envPath)) {
  console.error('.env not found. Copy .env.example to .env and fill keys.');
  process.exit(1);
}

const env = Object.fromEntries(
  fs.readFileSync(envPath, 'utf8')
    .trim()
    .split('\n')
    .filter(line => !line.startsWith('#'))
    .map(line => line.split('='))
    .map(([k, v]) => [k, v || ''])
);

const content = `// Auto-generated from .env - do not edit
export const API_KEYS = {
  emailjsPublic: '${env.EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY_PLACEHOLDER'}',
  serviceID: '${env.EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID_PLACEHOLDER'}',
  templateID: '${env.EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID_PLACEHOLDER'}',
  gtmID: '${env.GOOGLE_ANALYTICS_ID || 'G-XXXXXXXXXX_PLACEHOLDER'}'
};
`;

fs.writeFileSync(outputPath, content);
console.log(`✅ Built ${outputPath} with keys from .env`);

