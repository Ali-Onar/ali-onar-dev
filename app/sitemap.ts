import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://alionar.com',
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: 'https://alionar.com',
                    tr: 'https://alionar.com/tr',
                }
            },
            changeFrequency: 'yearly',
            priority: 1,
        },
    ];
}
