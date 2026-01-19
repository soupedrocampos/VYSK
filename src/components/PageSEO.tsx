import { Helmet } from 'react-helmet-async';
import { useAdmin } from '../context/AdminContext';

interface PageSEOProps {
    path: string;
}

const PageSEO = ({ path }: PageSEOProps) => {
    const { pages } = useAdmin();
    const pageData = pages.find(p => p.path === path);

    if (!pageData) {
        return null;
    }

    return (
        <Helmet>
            <title>{pageData.title}</title>
            <meta name="description" content={pageData.description} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={pageData.title} />
            <meta property="og:description" content={pageData.description} />
            <meta property="og:image" content={pageData.ogImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={pageData.title} />
            <meta property="twitter:description" content={pageData.description} />
            <meta property="twitter:image" content={pageData.ogImage} />
        </Helmet>
    );
};

export default PageSEO;
