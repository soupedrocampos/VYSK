import React, { useState, useEffect } from 'react';
import { Check, X, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

interface SEOAnalyzerProps {
    content: string;
    title: string;
    description?: string;
    slug?: string;
    focusKeyword: string;
}

interface AnalysisResult {
    score: number;
    basic: {
        keywordInTitle: boolean;
        keywordInDesc: boolean;
        keywordInUrl: boolean;
        keywordAtStart: boolean;
        keywordInContent: boolean;
        contentLength: number; // 600-2500 ideal
    };
    additional: {
        keywordInSubheadings: boolean;
        imageWithKeywordAlt: boolean;
        keywordDensity: number; // ~1% ideal
        urlIsShort: boolean;
        hasExternalLinks: boolean;
        hasDoFollowLinks: boolean;
        hasInternalLinks: boolean;
        keywordDefined: boolean;
        hasContentAI: boolean;
    };
    titleReadability: {
        keywordAtBeginning: boolean;
        hasNumber: boolean;
    };
    contentReadability: {
        hasTableOfContents: boolean;
        shortParagraphs: boolean;
        hasMedia: boolean;
    };
}

const SEOAnalyzer: React.FC<SEOAnalyzerProps> = ({ content, title, description = '', slug = '', focusKeyword }) => {
    const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
    const [openSections, setOpenSections] = useState({
        basic: true,
        additional: true,
        titleReadability: true,
        contentReadability: true
    });

    const toggleSection = (section: keyof typeof openSections) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    useEffect(() => {
        if (!focusKeyword) return;

        const lowerKeyword = focusKeyword.toLowerCase();
        const lowerContent = content.toLowerCase();
        const lowerTitle = title.toLowerCase();
        const lowerDesc = description.toLowerCase();
        const lowerSlug = slug.toLowerCase();

        // Helper to strip HTML tags for text analysis
        const cleanContent = content.replace(/<[^>]*>/g, ' ');
        const wordCount = cleanContent.split(/\s+/).filter(w => w.length > 0).length;

        // --- BASIC SEO CHECKS ---
        const basic = {
            keywordInTitle: lowerTitle.includes(lowerKeyword),
            keywordInDesc: lowerDesc.includes(lowerKeyword),
            keywordInUrl: lowerSlug.includes(lowerKeyword),
            keywordAtStart: cleanContent.slice(0, Math.min(cleanContent.length, 200)).toLowerCase().includes(lowerKeyword),
            keywordInContent: lowerContent.includes(lowerKeyword),
            contentLength: wordCount
        };

        // --- ADDITIONAL SEO CHECKS ---
        // Check headings H2-H6 for keyword
        const headingsMatch = (content.match(/<h[2-6][^>]*>(.*?)<\/h[2-6]>/gi) || [])
            .some(h => h.toLowerCase().includes(lowerKeyword));

        // Check images for alt text with keyword
        const imgAltMatch = (content.match(/<img[^>]+alt=["']([^"']*)["'][^>]*>/gi) || [])
            .some(img => img.toLowerCase().includes(lowerKeyword));

        // Keyword Density
        const keywordCount = (cleanContent.match(new RegExp(lowerKeyword, 'gi')) || []).length;
        const density = wordCount > 0 ? (keywordCount / wordCount) * 100 : 0;

        // Links checks
        const hasExternal = /<a[^>]+href=["'](http|https):\/\/[^"']+["'][^>]*>/i.test(content);
        // Naive check for dofollow (assuming if rel="nofollow" is missing or doesn't contain nofollow)
        const hasExternalDoFollow = hasExternal && !/<a[^>]+rel=["'].*nofollow.*["'][^>]*>/i.test(content);
        const hasInternal = /<a[^>]+href=["'](\/|#)[^"']*["'][^>]*>/i.test(content);

        const additional = {
            keywordInSubheadings: headingsMatch,
            imageWithKeywordAlt: imgAltMatch,
            keywordDensity: density,
            urlIsShort: slug.length < 75, // Arbitrary "short" length
            hasExternalLinks: hasExternal,
            hasDoFollowLinks: hasExternalDoFollow,
            hasInternalLinks: hasInternal,
            keywordDefined: focusKeyword.length > 0,
            hasContentAI: true // Simulating valid content AI usage
        };

        // --- TITLE READABILITY ---
        const titleReadability = {
            keywordAtBeginning: lowerTitle.startsWith(lowerKeyword),
            hasNumber: /\d/.test(title)
        };

        // --- CONTENT READABILITY ---
        // TOC Check (looking for a typical wrapper or id)
        const hasTOC = lowerContent.includes('id="toc"') || lowerContent.includes('class="toc"') || lowerContent.includes('table of contents');

        // Paragraph length check (naive: check if many paragraphs are super long)
        // Let's assume passed if < 20% of paragraphs are > 150 words
        const paragraphs = content.split('</p>');
        let longParagraphs = 0;
        paragraphs.forEach(p => {
            const pText = p.replace(/<[^>]*>/g, '');
            if (pText.split(/\s+/).length > 150) longParagraphs++;
        });
        const shortParagraphs = paragraphs.length > 0 ? (longParagraphs / paragraphs.length) < 0.2 : true;

        const hasMedia = /<img|<video|<iframe/i.test(content);

        const contentReadability = {
            hasTableOfContents: hasTOC,
            shortParagraphs: shortParagraphs,
            hasMedia: hasMedia
        };

        // --- SCORING CALCULATION ---
        let score = 0;

        // Basic (approx 40 points)
        if (basic.keywordInTitle) score += 6;
        if (basic.keywordInDesc) score += 6;
        if (basic.keywordInUrl) score += 6;
        if (basic.keywordAtStart) score += 6;
        if (basic.keywordInContent) score += 6;
        if (basic.contentLength >= 600) score += 10;
        else if (basic.contentLength >= 300) score += 5;

        // Additional (approx 30 points)
        if (additional.keywordInSubheadings) score += 3;
        if (additional.imageWithKeywordAlt) score += 3;
        if (additional.keywordDensity >= 0.5 && additional.keywordDensity <= 2.5) score += 3;
        if (additional.urlIsShort) score += 3;
        if (additional.hasExternalLinks) score += 3;
        if (additional.hasDoFollowLinks) score += 3;
        if (additional.hasInternalLinks) score += 3;
        if (additional.keywordDefined) score += 3;
        if (additional.hasContentAI) score += 3;

        // Title Readability (approx 10 points)
        if (titleReadability.keywordAtBeginning) score += 5;
        if (titleReadability.hasNumber) score += 5;

        // Content Readability (approx 20 points)
        if (contentReadability.hasTableOfContents) score += 5;
        if (contentReadability.shortParagraphs) score += 10;
        if (contentReadability.hasMedia) score += 5;

        // Cap score at 100
        score = Math.min(100, Math.round(score));

        setAnalysis({ score, basic, additional, titleReadability, contentReadability });

    }, [content, title, description, slug, focusKeyword]);

    if (!focusKeyword) return (
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
            <div className="flex items-center gap-3 text-yellow-500 mb-2">
                <AlertCircle size={24} />
                <h3 className="font-bold">Defina uma Palavra-Chave</h3>
            </div>
            <p className="text-gray-400 text-sm">Insira uma palavra-chave de foco para iniciar a análise de SEO.</p>
        </div>
    );

    if (!analysis) return null;

    const getScoreColor = (score: number) => {
        if (score >= 80) return 'text-green-500 border-green-500 bg-green-500/10';
        if (score >= 50) return 'text-yellow-500 border-yellow-500 bg-yellow-500/10';
        return 'text-red-500 border-red-500 bg-red-500/10';
    };

    const StatusIcon = ({ status }: { status: boolean }) => (
        status ?
            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                <Check className="text-green-500" size={12} strokeWidth={3} />
            </div> :
            <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                <X className="text-red-500" size={12} strokeWidth={3} />
            </div>
    );

    const ItemRow = ({ status, text, info }: { status: boolean, text: string, info?: string | React.ReactNode }) => (
        <div className="flex items-start gap-3 py-2 text-sm text-gray-300">
            <div className="mt-0.5"><StatusIcon status={status} /></div>
            <div className="flex-1">
                <span>{text}</span>
                {info && <span className="text-xs text-gray-500 block mt-0.5">{info}</span>}
            </div>
        </div>
    );

    return (
        <div className="bg-[#1a1a1a] rounded-xl border border-white/5 overflow-hidden font-sans shadow-xl">
            {/* Header Score */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                <div>
                    <h3 className="font-cabinet font-bold text-white text-xl">Análise SEO</h3>
                    <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-bold">Standard Rank Math</p>
                </div>
                <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center font-bold font-cabinet text-3xl ${getScoreColor(analysis.score)} transition-all duration-500`}>
                    {analysis.score}
                </div>
            </div>

            {/* Sections */}
            <div className="divide-y divide-white/5">

                {/* Basic SEO */}
                <div className="bg-white/[0.01]">
                    <button
                        onClick={() => toggleSection('basic')}
                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors group"
                    >
                        <span className="font-bold text-sm text-gray-300 flex items-center gap-2 group-hover:text-white transition-colors">
                            SEO Básico
                            {!openSections.basic && (
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${Object.values(analysis.basic).every(Boolean) ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                                    }`}>
                                    {Object.values(analysis.basic).filter(Boolean).length}/6
                                </span>
                            )}
                        </span>
                        {openSections.basic ? <ChevronUp size={16} className="text-gray-500" /> : <ChevronDown size={16} className="text-gray-500" />}
                    </button>
                    {openSections.basic && (
                        <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-200 space-y-1">
                            <ItemRow status={analysis.basic.keywordInTitle} text="Adicione a palavra-chave de foco ao título de SEO." />
                            <ItemRow status={analysis.basic.keywordInDesc} text="Adicione a palavra-chave de foco à sua meta descrição de SEO." />
                            <ItemRow status={analysis.basic.keywordInUrl} text="Use a palavra-chave de foco no URL." />
                            <ItemRow status={analysis.basic.keywordAtStart} text="Use a palavra-chave de foco no início do seu conteúdo." />
                            <ItemRow status={analysis.basic.keywordInContent} text="Use a palavra-chave de foco no conteúdo." />
                            <ItemRow
                                status={analysis.basic.contentLength >= 600}
                                text={`O conteúdo deve ter 600-2500 words de comprimento.`}
                                info={<span className={analysis.basic.contentLength < 600 ? "text-red-400" : "text-green-400"}>{analysis.basic.contentLength} palavras.</span>}
                            />
                        </div>
                    )}
                </div>

                {/* Additional */}
                <div className="bg-white/[0.01]">
                    <button
                        onClick={() => toggleSection('additional')}
                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors group"
                    >
                        <span className="font-bold text-sm text-gray-300 flex items-center gap-2 group-hover:text-white transition-colors">
                            Adicional
                            {!openSections.additional && (
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${Object.values(analysis.additional).every(Boolean) ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                                    }`}>
                                    {Object.values(analysis.additional).filter(Boolean).length}/9
                                </span>
                            )}
                        </span>
                        {openSections.additional ? <ChevronUp size={16} className="text-gray-500" /> : <ChevronDown size={16} className="text-gray-500" />}
                    </button>
                    {openSections.additional && (
                        <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-200 space-y-1">
                            <ItemRow status={analysis.additional.keywordInSubheadings} text="Use a palavra-chave de foco em subtítulos como H2, H3, H4, etc." />
                            <ItemRow status={analysis.additional.imageWithKeywordAlt} text="Adicione uma imagem com a sua palavra-chave de foco como texto alternativo (alt text)." />
                            <ItemRow
                                status={analysis.additional.keywordDensity >= 0.5 && analysis.additional.keywordDensity <= 2.5}
                                text="A densidade da palavra-chave é 0. Tente alcançar cerca de 1% de densidade da palavra-chave."
                                info={`Densidade atual: ${analysis.additional.keywordDensity.toFixed(2)}%`}
                            />
                            <ItemRow status={analysis.additional.urlIsShort} text="URL indisponível. Adicione um URL curto." />
                            <ItemRow status={analysis.additional.hasExternalLinks} text="Vincule-se a recursos externos." />
                            <ItemRow status={analysis.additional.hasDoFollowLinks} text="Adicione links DoFollow (seguir) apontando para recursos externos." />
                            <ItemRow status={analysis.additional.hasInternalLinks} text="Adicione links internos ao seu conteúdo." />
                            <ItemRow status={analysis.additional.keywordDefined} text="Defina uma palavra-chave de foco para este conteúdo." />
                            <ItemRow status={true} text="Você está usando Content AI para otimizar este Post." />
                        </div>
                    )}
                </div>

                {/* Title Readability */}
                <div className="bg-white/[0.01]">
                    <button
                        onClick={() => toggleSection('titleReadability')}
                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors group"
                    >
                        <span className="font-bold text-sm text-gray-300 flex items-center gap-2 group-hover:text-white transition-colors">
                            Legibilidade do título
                            {!openSections.titleReadability && (
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${Object.values(analysis.titleReadability).every(Boolean) ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                                    }`}>
                                    {Object.values(analysis.titleReadability).filter(Boolean).length}/2
                                </span>
                            )}
                        </span>
                        {openSections.titleReadability ? <ChevronUp size={16} className="text-gray-500" /> : <ChevronDown size={16} className="text-gray-500" />}
                    </button>
                    {openSections.titleReadability && (
                        <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-200 space-y-1">
                            <ItemRow status={analysis.titleReadability.keywordAtBeginning} text="Use a palavra-chave de foco, perto do início do título de SEO." />
                            <ItemRow status={analysis.titleReadability.hasNumber} text="Seu título de SEO não contém um número." />
                        </div>
                    )}
                </div>

                {/* Content Readability */}
                <div className="bg-white/[0.01]">
                    <button
                        onClick={() => toggleSection('contentReadability')}
                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors group"
                    >
                        <span className="font-bold text-sm text-gray-300 flex items-center gap-2 group-hover:text-white transition-colors">
                            Legibilidade do conteúdo
                            {!openSections.contentReadability && (
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${Object.values(analysis.contentReadability).every(Boolean) ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                                    }`}>
                                    {Object.values(analysis.contentReadability).filter(Boolean).length}/3
                                </span>
                            )}
                        </span>
                        {openSections.contentReadability ? <ChevronUp size={16} className="text-gray-500" /> : <ChevronDown size={16} className="text-gray-500" />}
                    </button>
                    {openSections.contentReadability && (
                        <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-200 space-y-1">
                            <ItemRow status={analysis.contentReadability.hasTableOfContents} text="Use uma tabela de conteúdos (TOC) para dividir o seu texto." />
                            <ItemRow status={analysis.contentReadability.shortParagraphs} text="Adicione parágrafos curtos e concisos para melhorar a legibilidade e experiência do usuário (UX)." />
                            <ItemRow status={analysis.contentReadability.hasMedia} text="Adicione algumas imagens e/ou vídeos para tornar seu conteúdo atraente." />
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default SEOAnalyzer;
