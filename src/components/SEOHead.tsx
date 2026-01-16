import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
    title: string;
    description: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article';
    keywords?: string[];
    author?: string;
    publishedTime?: string;
}

const SEOHead = ({
    title,
    description,
    image = 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop', // Default fallback image
    url = 'https://pedrovysk.com',
    type = 'website',
    keywords = [],
    author = 'Pedro Campos',
    publishedTime
}: SEOHeadProps) => {
    const siteTitle = `${title} | Pedrovysk Soluções Digitais`;

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(', ')} />
            <meta name="author" content={author} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content="Pedrovysk Soluções Digitais" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@pedrovysk" />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Article Specific Schema */}
            {type === 'article' && publishedTime && (
                <meta property="article:published_time" content={publishedTime} />
            )}
            {type === 'article' && author && (
                <meta property="article:author" content={author} />
            )}

            {/* JSON-LD Schema Structure */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": type === 'article' ? "BlogPosting" : "WebSite",
                    "headline": title,
                    "description": description,
                    "image": image,
                    "author": {
                        "@type": "Person",
                        "name": author
                    },
                    "url": url,
                    "datePublished": publishedTime,
                    "mainEntityOfPage": url
                })}
            </script>
        </Helmet>
    );
};

export default SEOHead;
