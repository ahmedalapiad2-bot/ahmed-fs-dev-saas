export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://ahmed-fs-dev-saas.vercel.app/sitemap.xml',
  };
}