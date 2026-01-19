import React, { createContext, useContext, useState, useEffect } from 'react';

interface Client {
    id: string;
    name: string;
    status: 'Prospect' | 'Client' | 'Aborted';
    contact: string;
    lastContact: string;
    notes: string;
}

interface Article {
    id: string;
    title: string;
    type: 'Article' | 'Case Study' | 'SaaS';
    status: 'Draft' | 'Published';
    date: string;
    content?: string; // HTML or Markdown content
}

export interface PageMetadata {
    id: string;
    path: string;
    name: string;
    title: string;
    description: string;
    ogImage: string;
}

interface AdminContextType {
    isAuthenticated: boolean;
    login: (password: string) => boolean;
    logout: () => void;
    clients: Client[];
    addClient: (client: Omit<Client, 'id'>) => void;
    updateClient: (id: string, client: Partial<Client>) => void;
    deleteClient: (id: string) => void;
    articles: Article[];
    addArticle: (article: Omit<Article, 'id'>) => void;
    updateArticle: (id: string, article: Partial<Article>) => void;
    deleteArticle: (id: string) => void;
    pages: PageMetadata[];
    updatePageMetadata: (id: string, metadata: Partial<PageMetadata>) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const DEFAULT_PAGES: PageMetadata[] = [
    { id: '1', path: '/', name: 'Home', title: 'VYSK | Scale Your Business', description: 'Potencialize seu negócio com IA.', ogImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop' },
    { id: '2', path: '/blog', name: 'Blog', title: 'VYSK | Blog', description: 'Artigos e insights sobre tecnologia e crescimento.', ogImage: 'https://images.unsplash.com/photo-1499750310159-5b9887039e5b?q=80&w=2668&auto=format&fit=crop' },
    { id: '3', path: '/services', name: 'Serviços', title: 'VYSK | Nossos Serviços', description: 'Conheça nossas soluções de alta performance.', ogImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop' },
    { id: '4', path: '/diagnostico', name: 'Diagnóstico', title: 'VYSK | Diagnóstico de Performance', description: 'Descubra oportunidades ocultas no seu negócio.', ogImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop' },
    { id: '5', path: '/privacy', name: 'Privacidade', title: 'VYSK | Política de Privacidade', description: 'Nossos termos e políticas de uso.', ogImage: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2676&auto=format&fit=crop' },
    { id: '6', path: '/seo', name: 'Landing SEO', title: 'VYSK | Dominando o Google', description: 'Estratégias avançadas de SEO.', ogImage: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2670&auto=format&fit=crop' },
    { id: '7', path: '/saas', name: 'Landing SaaS', title: 'VYSK | Soluções SaaS', description: 'Software como serviço para escalar.', ogImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop' },
    { id: '8', path: '/automacao', name: 'Landing Automação', title: 'VYSK | Automação Inteligente', description: 'Automatize processos e ganhe tempo.', ogImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop' },
    { id: '9', path: '/worldpackers', name: 'Case Worldpackers', title: 'VYSK | Case Worldpackers', description: 'Como ajudamos a Worldpackers a crescer.', ogImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop' },
    { id: '10', path: '/estrategia', name: 'Estratégia Vendas', title: 'VYSK | Estratégia de Vendas', description: 'Métodos comprovados para vender mais.', ogImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2632&auto=format&fit=crop' },
];

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => localStorage.getItem('admin_auth') === 'true');

    const [clients, setClients] = useState<Client[]>(() => {
        const stored = localStorage.getItem('admin_clients');
        return stored ? JSON.parse(stored) : [];
    });

    const [articles, setArticles] = useState<Article[]>(() => {
        const stored = localStorage.getItem('admin_articles');
        return stored ? JSON.parse(stored) : [];
    });

    const [pages, setPages] = useState<PageMetadata[]>(() => {
        const stored = localStorage.getItem('admin_pages_metadata');
        if (stored) {
            const parsedPages: PageMetadata[] = JSON.parse(stored);
            const mergedPages = [...parsedPages];

            DEFAULT_PAGES.forEach(defaultPage => {
                const exists = parsedPages.some(p => p.id === defaultPage.id);
                if (!exists) {
                    mergedPages.push(defaultPage);
                }
            });

            return mergedPages.sort((a, b) => parseInt(a.id) - parseInt(b.id));
        }

        return DEFAULT_PAGES;
    });

    // Load initial state - Effect removed as we use lazy initialization now
    // Only keeping empty dependency array effect if absolutely necessary for side effects, but here it was just syncing state
    // so we can remove it entirely or keep it for future if needed, but better to remove to fix lint.
    useEffect(() => {
        // No-op or future side effects
    }, []);

    // Save state changes
    useEffect(() => {
        if (isAuthenticated) localStorage.setItem('admin_auth', 'true');
        else localStorage.removeItem('admin_auth');
    }, [isAuthenticated]);

    useEffect(() => {
        localStorage.setItem('admin_clients', JSON.stringify(clients));
    }, [clients]);

    useEffect(() => {
        localStorage.setItem('admin_articles', JSON.stringify(articles));
    }, [articles]);

    useEffect(() => {
        localStorage.setItem('admin_pages_metadata', JSON.stringify(pages));
    }, [pages]);

    const login = (password: string) => {
        if (password === 'Senha@2020') {
            setIsAuthenticated(true);
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    // Client CRUD
    const addClient = (clientData: Omit<Client, 'id'>) => {
        const newClient = { ...clientData, id: crypto.randomUUID() };
        setClients(prev => [...prev, newClient]);
    };

    const updateClient = (id: string, updates: Partial<Client>) => {
        setClients(prev => prev.map(c => c.id === id ? { ...c, ...updates } : c));
    };

    const deleteClient = (id: string) => {
        setClients(prev => prev.filter(c => c.id !== id));
    };

    // Article CRUD
    const addArticle = (articleData: Omit<Article, 'id'>) => {
        const newArticle = { ...articleData, id: crypto.randomUUID() };
        setArticles(prev => [...prev, newArticle]);
    };

    const updateArticle = (id: string, updates: Partial<Article>) => {
        setArticles(prev => prev.map(a => a.id === id ? { ...a, ...updates } : a));
    };

    const deleteArticle = (id: string) => {
        setArticles(prev => prev.filter(a => a.id !== id));
    };

    // Page Metadata CRUD
    const updatePageMetadata = (id: string, updates: Partial<PageMetadata>) => {
        setPages(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
    };

    return (
        <AdminContext.Provider value={{
            isAuthenticated,
            login,
            logout,
            clients,
            addClient,
            updateClient,
            deleteClient,
            articles,
            addArticle,
            updateArticle,
            deleteArticle,
            pages,
            updatePageMetadata
        }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdmin = () => {
    const context = useContext(AdminContext);
    if (context === undefined) {
        throw new Error('useAdmin must be used within an AdminProvider');
    }
    return context;
};
