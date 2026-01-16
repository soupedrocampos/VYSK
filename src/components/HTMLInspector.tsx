import { useState, useEffect } from 'react';
import { Code, Eye, EyeOff, AlertTriangle } from 'lucide-react';

interface ElementInfo {
    tagName: string;
    isSemantic: boolean;
    className?: string;
    id?: string;
    position: { x: number; y: number };
}

const SEMANTIC_TAGS = [
    'H1', 'H2', 'H3', 'H4', 'H5', 'H6',
    'P', 'A', 'BUTTON', 'SPAN',
    'ARTICLE', 'SECTION', 'NAV', 'HEADER',
    'FOOTER', 'MAIN', 'ASIDE', 'FIGURE',
    'TIME', 'MARK', 'STRONG', 'EM'
];

const HTMLInspector = () => {
    const [isActive, setIsActive] = useState(false);
    const [hoveredElement, setHoveredElement] = useState<ElementInfo | null>(null);

    useEffect(() => {
        if (!isActive) return;

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Ignore inspector's own elements
            if (target.closest('.html-inspector-ui')) {
                return;
            }

            const tagName = target.tagName;
            const isSemantic = SEMANTIC_TAGS.includes(tagName.toUpperCase());
            const className = target.className;
            const id = target.id;

            setHoveredElement({
                tagName,
                isSemantic,
                className: className || undefined,
                id: id || undefined,
                position: { x: e.clientX, y: e.clientY }
            });
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('.html-inspector-ui')) {
                return;
            }
            setHoveredElement(null);
        };

        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, [isActive]);

    const getTagColor = (tagName: string, isSemantic: boolean) => {
        if (!isSemantic) return 'bg-orange-500';

        // Color coding by tag type
        if (tagName.match(/^H[1-6]$/)) return 'bg-blue-500';
        if (tagName === 'P') return 'bg-green-500';
        if (['SECTION', 'ARTICLE', 'NAV', 'HEADER', 'FOOTER', 'MAIN', 'ASIDE'].includes(tagName)) {
            return 'bg-purple-500';
        }
        return 'bg-emerald-500';
    };

    const getTagIcon = (isSemantic: boolean) => {
        if (!isSemantic) {
            return <AlertTriangle className="w-3 h-3 inline-block mr-1" />;
        }
        return null;
    };

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={() => {
                    const nextState = !isActive;
                    setIsActive(nextState);
                    if (!nextState) setHoveredElement(null);
                }}
                className={`html-inspector-ui fixed bottom-6 right-6 z-[99998] p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${isActive
                    ? 'bg-blue-600 text-white shadow-blue-500/50'
                    : 'bg-gray-800 text-gray-300 shadow-gray-900/50'
                    }`}
                title={isActive ? 'Desativar Inspetor HTML' : 'Ativar Inspetor HTML'}
            >
                {isActive ? <Eye className="w-6 h-6" /> : <EyeOff className="w-6 h-6" />}
            </button>

            {/* Active Indicator */}
            {isActive && (
                <div className="html-inspector-ui fixed top-4 right-4 z-[99998] bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-pulse">
                    <Code className="w-4 h-4" />
                    <span className="text-sm font-bold">Inspetor Ativo</span>
                </div>
            )}

            {/* Tooltip */}
            {isActive && hoveredElement && (
                <div
                    className="html-inspector-ui fixed z-[99999] pointer-events-none"
                    style={{
                        left: hoveredElement.position.x + 15,
                        top: hoveredElement.position.y + 15
                    }}
                >
                    <div
                        className={`${getTagColor(
                            hoveredElement.tagName,
                            hoveredElement.isSemantic
                        )} text-white px-3 py-2 rounded-lg shadow-xl text-xs font-mono font-bold flex flex-col gap-1 max-w-xs`}
                    >
                        <div className="flex items-center gap-1">
                            {getTagIcon(hoveredElement.isSemantic)}
                            <span className="text-sm">
                                &lt;{hoveredElement.tagName.toLowerCase()}&gt;
                            </span>
                        </div>

                        {hoveredElement.className && (
                            <div className="text-[10px] opacity-90 truncate">
                                class: "{hoveredElement.className}"
                            </div>
                        )}

                        {hoveredElement.id && (
                            <div className="text-[10px] opacity-90">
                                id: "{hoveredElement.id}"
                            </div>
                        )}

                        {!hoveredElement.isSemantic && (
                            <div className="text-[10px] bg-black/20 px-2 py-1 rounded mt-1">
                                ⚠️ Elemento não semântico
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Legend (when active) */}
            {isActive && (
                <div className="html-inspector-ui fixed bottom-6 left-6 z-[99998] bg-gray-900/95 text-white p-4 rounded-lg shadow-xl text-xs">
                    <div className="font-bold mb-2 flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        Legenda de Elementos
                    </div>
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-blue-500 rounded"></div>
                            <span>Headings (H1-H6)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded"></div>
                            <span>Parágrafos (P)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-purple-500 rounded"></div>
                            <span>Estruturais (section, article, nav)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-emerald-500 rounded"></div>
                            <span>Outros semânticos</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-orange-500 rounded"></div>
                            <span>⚠️ Não semânticos (div, span genéricos)</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default HTMLInspector;
