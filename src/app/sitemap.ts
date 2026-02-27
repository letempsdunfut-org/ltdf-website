import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ltdf.ca';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        '',
        '/rental/daily',
        '/rental/monthly',
        '/professional',
        '/product',
        '/booking',
    ];

    const sitemapEntries: MetadataRoute.Sitemap = [];

    // Add entry for each route and locale
    routes.forEach((route) => {
        routing.locales.forEach((locale: string) => {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}${route}`,
                lastModified: new Date(),
                changeFrequency: route === '' ? 'weekly' : 'monthly',
                priority: route === '' ? 1 : 0.8,
            });
        });
    });

    return sitemapEntries;
}
