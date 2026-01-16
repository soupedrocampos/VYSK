import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Helper to handle ESM __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import blog data directly (requires ts-node or similar, but for simplicity in this env we'll read the file or mock it)
// actually, since we are in a node env, let's keep it simple and regex the slugs from the TS file to avoid complex compilation steps just for this script
// or better: let's just use the known slugs since we just created them.
// ideally we would import { blogPosts } from './src/data/blogData.ts' but that requires transpilation.

const baseUrl = 'https://pedrovysk.com';

const staticPages = [
    '/',
    '/blog',
    '/seo',
    '/saas',
    '/automacao',
    '/worldpackers'
];

// Manual list of slugs based on what we just inserted into blogData.ts
// In a real CI/CD pipeline, this would fetch from CMS or DB.
const blogSlugs = [
    'como-otimizar-seo-2025',
    'automacao-n8n-para-agencias',
    'saas-micro-services',
    'react-19-novidades',
    'nomade-digital-worldpackers',
    'ia-generativa-alem-do-chatgpt'
];

const generateSitemap = () => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages.map(page => `
    <url>
        <loc>${baseUrl}${page}</loc>
        <changefreq>weekly</changefreq>
        <priority>${page === '/' ? '1.0' : '0.8'}</priority>
    </url>
    `).join('')}
    ${blogSlugs.map(slug => `
    <url>
        <loc>${baseUrl}/blog/${slug}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    `).join('')}
</urlset>`;

    const outputPath = path.join(__dirname, 'public', 'sitemap.xml');
    fs.writeFileSync(outputPath, sitemap);
    console.log(`Sitemap generated at ${outputPath}`);
};

generateSitemap();
