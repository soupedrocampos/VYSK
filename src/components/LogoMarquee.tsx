const logos = [
    'dpz.png', 'artplan.png', 'hogarth.png', 'africa.png', 'dam.png',
    'google.png', 'trident.png', 'willbank.png', 'claro.png', 'almap.png',
    'nio.png', 'betmgm.png', 'dreamers.png', 'mymama.png', 'hotmart.png',
    'samsung.png', 'essential.png', 'cogna.png', '3coracoes.png'
];

export default function LogoMarquee() {
    return (
        <div className="w-full bg-human-bg py-10 overflow-hidden relative border-y border-white/5">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-human-bg to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-human-bg to-transparent z-10 pointer-events-none" />

            <div className="flex w-max">
                <div className="flex animate-marquee gap-16 px-8 items-center min-w-full">
                    {logos.map((logo, index) => (
                        <img
                            key={`l1-${index}`}
                            src={`/assets/logos/${logo}`}
                            alt={logo.replace('.png', '')}
                            className="h-10 w-auto object-contain opacity-40 hover:opacity-100 transition-opacity grayscale duration-500"
                        />
                    ))}
                    {/* Duplicate for seamless loop */}
                    {logos.map((logo, index) => (
                        <img
                            key={`l2-${index}`}
                            src={`/assets/logos/${logo}`}
                            alt={logo.replace('.png', '')}
                            className="h-10 w-auto object-contain opacity-40 hover:opacity-100 transition-opacity grayscale duration-500"
                        />
                    ))}
                </div>
                <div className="flex animate-marquee gap-16 px-8 items-center min-w-full" aria-hidden="true">
                    {logos.map((logo, index) => (
                        <img
                            key={`l1-dup-${index}`}
                            src={`/assets/logos/${logo}`}
                            alt={logo.replace('.png', '')}
                            className="h-10 w-auto object-contain opacity-40 hover:opacity-100 transition-opacity grayscale duration-500"
                        />
                    ))}
                    {logos.map((logo, index) => (
                        <img
                            key={`l2-dup-${index}`}
                            src={`/assets/logos/${logo}`}
                            alt={logo.replace('.png', '')}
                            className="h-10 w-auto object-contain opacity-40 hover:opacity-100 transition-opacity grayscale duration-500"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

