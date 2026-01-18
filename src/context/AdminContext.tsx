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
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [clients, setClients] = useState<Client[]>([]);
    const [articles, setArticles] = useState<Article[]>([]);

    // Load initial state
    useEffect(() => {
        const auth = localStorage.getItem('admin_auth');
        if (auth === 'true') setIsAuthenticated(true);

        const storedClients = localStorage.getItem('admin_clients');
        if (storedClients) setClients(JSON.parse(storedClients));

        const storedArticles = localStorage.getItem('admin_articles');
        if (storedArticles) setArticles(JSON.parse(storedArticles));
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
            deleteArticle
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
