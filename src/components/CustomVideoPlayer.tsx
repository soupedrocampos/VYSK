import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';


interface CustomVideoPlayerProps {
    url: string;
}

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({ url }) => {
    const [hasError, setHasError] = useState(false);

    // Change refined to any to avoid "value used as type" error with some configurations
    const playerRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const isGoogleDrive = url.includes('drive.google.com');

    if (isGoogleDrive) {
        return (
            <div className="relative w-full aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <iframe
                    src={url}
                    className="w-full h-full"
                    allow="autoplay"
                    title="Video Player"
                />
            </div>
        );
    }

    if (hasError) {
        return (
            <div className="relative w-full aspect-video bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col items-center justify-center p-8 text-center text-white">
                <p className="text-red-400 font-bold mb-2">Erro ao carregar vídeo</p>
                <p className="text-sm text-gray-400 mb-4">O vídeo pode estar indisponível ou bloqueado para exibição.</p>
                <a href={url} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors text-sm">
                    Assistir no YouTube ↗
                </a>
            </div>
        );
    }

    const ReactPlayerAny = ReactPlayer as any;

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-video bg-black rounded-3xl overflow-hidden group shadow-2xl border border-white/10"
        >
            <ReactPlayerAny
                ref={playerRef}
                url={url}
                width="100%"
                height="100%"
                controls={true}
                onError={() => setHasError(true)}
                config={{
                    youtube: {
                        playerVars: {
                            showinfo: 1,
                            controls: 1,
                            modestbranding: 1,
                            rel: 0,
                            iv_load_policy: 3,
                            origin: typeof window !== 'undefined' ? window.location.origin : undefined
                        }
                    }
                } as any}
            />
        </div>
    );
};

export default CustomVideoPlayer;
