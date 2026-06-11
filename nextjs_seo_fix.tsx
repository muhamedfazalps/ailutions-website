# Next.js SEO Metadata Fix
# Give this to whoever built ailutions.ai
# Replace the metadata in app/layout.tsx or pages/_app.tsx

## Replace this:

```js
// OLD (broken)
export const metadata = {
  title: 'Ailutions AI Ecosystem',
  description: 'AI-first. System builders. Ecosystem thinkers.',
}
```

## With this:

```js
// NEW (SEO optimized)
export const metadata = {
  title: {
    default: 'AI Consulting & Business Automation UAE | Ailutions',
    template: '%s | Ailutions',
  },
  description: 'AI consulting, digital transformation, and ERPNext implementation for UAE businesses. We fix systems, add automation, and reduce manual work. Free AI Readiness Assessment.',
  keywords: ['AI consulting UAE', 'ERPNext implementation Dubai', 'business automation UAE', 'digital transformation Dubai', 'AI implementation company UAE'],
  openGraph: {
    title: 'AI Consulting & Business Automation UAE | Ailutions',
    description: 'We fix systems, add AI, and reduce manual work for UAE businesses. Free assessment available.',
    url: 'https://www.ailutions.ai',
    siteName: 'Ailutions',
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Consulting & Business Automation UAE | Ailutions',
    description: 'We fix systems, add AI, and reduce manual work for UAE businesses.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://www.ailutions.ai',
  },
}
```

## Also add structured data to app/layout.tsx:

```tsx
// Add inside <head> tag
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Ailutions",
      "description": "AI consulting, digital transformation, and ERPNext implementation for UAE businesses",
      "url": "https://www.ailutions.ai",
      "areaServed": "AE",
      "serviceType": ["AI Consulting", "Digital Transformation", "ERPNext Implementation", "Business Automation"],
      "priceRange": "$$"
    })
  }}
/>
```

## Deploy Steps:

1. Copy robots.txt to public/robots.txt
2. Copy sitemap.xml to public/sitemap.xml
3. Update metadata in app/layout.tsx
4. Add structured data to app/layout.tsx
5. Push to GitHub
6. Vercel auto-deploys in ~2 minutes

Total time: 30 minutes. Then Google starts indexing your site.
