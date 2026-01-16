import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, ZoomOut, X } from 'lucide-react';

interface SalesStrategyProps {
    title?: string;
    subtitle?: string;
    features?: string[];
    buttonText?: string;
    imageUrl?: string;
    imageAlt?: string;
    year?: string;
    badge?: string;
}

const SalesStrategy = ({
    title = "Estratégia de Vendas",
    subtitle = "Não é só código, é negócio",
    features = [
        "Copywriting persuasiva (Vendas)",
        "Funis de conversão validados",
        "Otimização para ROI máximo",
        "Integração com CRM e Gateways",
        "Rastreamento de leads avançado",
        "Testes A/B contínuos",
        "Foco total em resultados financeiros"
    ],
    buttonText = "VER DETALHES",
    imageUrl = "https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=800&h=1000&fit=crop",
    imageAlt = "AI Upscale Pro",
    year = "2025",
    badge = "Included"
}: SalesStrategyProps) => {
    const [isZoomed, setIsZoomed] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(1);

    const handleZoomIn = () => {
        setZoomLevel(prev => Math.min(prev + 0.25, 3));
    };

    const handleZoomOut = () => {
        setZoomLevel(prev => Math.max(prev - 0.25, 1));
    };

    const toggleFullscreen = () => {
        setIsZoomed(!isZoomed);
        if (!isZoomed) {
            setZoomLevel(1);
        }
    };

    return (
        <>
            <section className="sales-strategy-section">
                <div className="sales-strategy-container">
                    <motion.div
                        className="sales-strategy-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="strategy-title">{title}</h2>
                        <p className="strategy-subtitle">{subtitle}</p>

                        <ul className="strategy-features">
                            {features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>

                        <motion.button
                            className="strategy-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {buttonText}
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="sales-strategy-image-container"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="image-card">
                            <div className="image-wrapper" onClick={toggleFullscreen}>
                                <div
                                    className="image-zoom-container"
                                    style={{
                                        transform: `scale(${zoomLevel})`,
                                        transition: 'transform 0.3s ease'
                                    }}
                                >
                                    <img
                                        src={imageUrl}
                                        alt={imageAlt}
                                        className="strategy-image"
                                    />
                                </div>
                                <div className="image-overlay">
                                    <span className="image-text">{imageAlt}</span>
                                </div>
                            </div>

                            <div className="image-controls">
                                <button
                                    className="zoom-button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleZoomOut();
                                    }}
                                    disabled={zoomLevel <= 1}
                                    title="Zoom Out"
                                >
                                    <ZoomOut size={18} />
                                </button>
                                <span className="zoom-level">{Math.round(zoomLevel * 100)}%</span>
                                <button
                                    className="zoom-button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleZoomIn();
                                    }}
                                    disabled={zoomLevel >= 3}
                                    title="Zoom In"
                                >
                                    <ZoomIn size={18} />
                                </button>
                            </div>

                            <div className="image-footer">
                                <span className="image-year">{year}</span>
                                <span className="image-badge">{badge}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Fullscreen Zoom Modal */}
            <AnimatePresence>
                {isZoomed && (
                    <motion.div
                        className="zoom-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleFullscreen}
                    >
                        <motion.button
                            className="close-zoom-button"
                            onClick={toggleFullscreen}
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <X size={24} />
                        </motion.button>

                        <div className="zoom-modal-controls">
                            <button
                                className="zoom-modal-button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleZoomOut();
                                }}
                                disabled={zoomLevel <= 1}
                            >
                                <ZoomOut size={20} />
                            </button>
                            <span className="zoom-modal-level">{Math.round(zoomLevel * 100)}%</span>
                            <button
                                className="zoom-modal-button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleZoomIn();
                                }}
                                disabled={zoomLevel >= 3}
                            >
                                <ZoomIn size={20} />
                            </button>
                        </div>

                        <motion.div
                            className="zoom-modal-content"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div
                                className="zoom-image-container"
                                style={{
                                    transform: `scale(${zoomLevel})`,
                                    transition: 'transform 0.3s ease'
                                }}
                            >
                                <img
                                    src={imageUrl}
                                    alt={imageAlt}
                                    className="zoom-modal-image"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default SalesStrategy;
