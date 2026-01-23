import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CustomVideoPlayerProps {
    url: string;
}

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({ url }) => {
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0.8);
    const [muted, setMuted] = useState(false);
    const [played, setPlayed] = useState(0);
    const [seeking, setSeeking] = useState(false);
    const [duration, setDuration] = useState(0);
    const [showControls, setShowControls] = useState(false);

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

    const handlePlayPause = () => {
        setPlaying(!playing);
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(parseFloat(e.target.value));
        setMuted(parseFloat(e.target.value) === 0);
    };

    const handleToggleMute = () => {
        setMuted(!muted);
    };

    const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlayed(parseFloat(e.target.value));
    };

    const handleSeekMouseDown = () => {
        setSeeking(true);
    };

    const handleSeekMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
        setSeeking(false);
        playerRef.current?.seekTo(parseFloat((e.target as HTMLInputElement).value));
    };

    // Use any for state to avoid type mismatch with ReactPlayer's callback signature
    const handleProgress = (state: any) => {
        if (!seeking) {
            setPlayed(state.played);
        }
    };

    const handleDuration = (duration: number) => {
        setDuration(duration);
    };

    const formatTime = (seconds: number) => {
        const date = new Date(seconds * 1000);
        const hh = date.getUTCHours();
        const mm = date.getUTCMinutes();
        const ss = date.getUTCSeconds().toString().padStart(2, '0');
        if (hh) {
            return `${hh}:${mm.toString().padStart(2, '0')}:${ss}`;
        }
        return `${mm}:${ss}`;
    };

    const ReactPlayerAny = ReactPlayer as any;

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-video bg-black rounded-3xl overflow-hidden group shadow-2xl border border-white/10"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => playing && setShowControls(false)}
        >
            {/* The Player - Pointer events none to block YouTube interactions */}
            <div className="absolute inset-0 pointer-events-none">
                <ReactPlayerAny
                    ref={playerRef}
                    url={url}
                    width="100%"
                    height="100%"
                    playing={playing}
                    volume={volume}
                    muted={muted}
                    onProgress={handleProgress}
                    onDuration={handleDuration}
                    onEnded={() => setPlaying(false)}
                    config={{
                        youtube: {
                            playerVars: {
                                showinfo: 0,
                                controls: 0,
                                modestbranding: 1,
                                rel: 0,
                                disablekb: 1,
                                iv_load_policy: 3
                            }
                        }
                    } as any}
                />
            </div>

            {/* Overlay for Click to Play/Pause */}
            <div
                className="absolute inset-0 z-10 cursor-pointer"
                onClick={handlePlayPause}
            />

            {/* Center Play Button (only when paused) */}
            <AnimatePresence>
                {!playing && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                    >
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.4)] backdrop-blur-sm border border-white/20">
                            <Play className="text-white ml-2" size={32} fill="white" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Custom Controls Bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showControls || !playing ? 1 : 0, y: showControls || !playing ? 0 : 20 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-30"
            >
                <div className="flex flex-col gap-2">
                    {/* Progress Bar */}
                    <div className="flex items-center gap-2 group/progress">
                        <input
                            type="range"
                            min={0}
                            max={0.999999}
                            step="any"
                            value={played}
                            onMouseDown={handleSeekMouseDown}
                            onChange={handleSeekChange}
                            onMouseUp={handleSeekMouseUp}
                            className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500 [&::-webkit-slider-thumb]:transition-all hover:[&::-webkit-slider-thumb]:scale-125 hover:h-1.5 transition-all"
                            style={{
                                backgroundImage: `linear-gradient(to right, #a855f7 ${played * 100}%, rgba(255,255,255,0.2) ${played * 100}%)`
                            }}
                        />
                    </div>

                    <div className="flex items-center justify-between mt-1">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={handlePlayPause}
                                className="text-white hover:text-purple-400 transition-colors"
                            >
                                {playing ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
                            </button>

                            <div className="flex items-center gap-2 group/volume">
                                <button onClick={handleToggleMute} className="text-white hover:text-purple-400 transition-colors">
                                    {muted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
                                </button>
                                <input
                                    type="range"
                                    min={0}
                                    max={1}
                                    step="any"
                                    value={muted ? 0 : volume}
                                    onChange={handleVolumeChange}
                                    className="w-0 overflow-hidden group-hover/volume:w-20 transition-all duration-300 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                                    style={{
                                        backgroundImage: `linear-gradient(to right, white ${(muted ? 0 : volume) * 100}%, rgba(255,255,255,0.2) ${(muted ? 0 : volume) * 100}%)`
                                    }}
                                />
                            </div>

                            <span className="text-xs font-medium text-gray-300 font-mono">
                                {formatTime(duration * played)} / {formatTime(duration)}
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default CustomVideoPlayer;
