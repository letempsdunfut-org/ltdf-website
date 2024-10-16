const Sitemap = () => {
};
const createSitemap = (host: string) =>
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    <url>
        <loc>https://${host}/fr/product</loc>
        <lastmod>2023-08-11T10:00:00.165Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://${host}/en/product</loc>
        <lastmod>2023-08-11T10:00:00.165Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://${host}/fr/booking</loc>
        <lastmod>2023-08-11T10:00:00.165Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://${host}/en/booking</loc>
        <lastmod>2023-08-11T10:00:00.165Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://${host}/fr/rental/daily</loc>
        <lastmod>2023-08-11T10:00:00.165Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://${host}/en/rental/daily</loc>
        <lastmod>2023-08-11T10:00:00.165Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
        <url>
        <loc>https://${host}/fr/rental/monthly</loc>
        <lastmod>2023-08-11T10:00:00.165Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://${host}/en/rental/monthly</loc>
        <lastmod>2023-08-11T10:00:00.165Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://${host}/fr/professional</loc>
        <lastmod>2023-08-11T10:00:00.165Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://${host}/en/professional</loc>
        <lastmod>2023-08-11T10:00:00.165Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://${host}/fr</loc>
        <lastmod>2023-08-11T10:00:00.165Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://${host}/en</loc>
        <lastmod>2023-08-11T10:00:00.165Z</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
</urlset>`;

export async function getServerSideProps({res, req}: { res: any, req: any }) {
    res.setHeader("Content-Type", "text/xml");
    res.write(createSitemap(req.headers.host));
    res.end();
    return {props: {results: {}}}
}

export default Sitemap;
