import React from 'react';


interface CustomVideoPlayerProps {
    url: string;
}

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({ url }) => {
    // Helper to extract YouTube ID
    const getYouTubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const isGoogleDrive = url.includes('drive.google.com');
    const youTubeId = getYouTubeId(url);

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

    if (youTubeId) {
        return (
            <div className="relative w-full aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${youTubeId}?si=gbY__f22cKExIvE4&controls=0`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        );
    }

    // Fallback/Error state
    return (
        <div className="relative w-full aspect-video bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col items-center justify-center p-8 text-center text-white">
            <p className="text-red-400 font-bold mb-2">Erro ao carregar vídeo</p>
            <p className="text-sm text-gray-400 mb-4">Link inválido ou não suportado.</p>
            <a href={url} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors text-sm">
                Abrir Link Original ↗
            </a>
        </div>
    );
};

export default CustomVideoPlayer;
