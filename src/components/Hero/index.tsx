import Image from "next/image";

const Hero = () => {
    return (
        <section id="hero" className="relative w-full h-screen">
            {/* 背景画像 */}
            <Image
                src="/hero-bg.png"
                alt="higway background" 
                layout="fill"
                objectFit="cover"
                priority
            />

            {/* テキスト */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                    Expand your options
                </h1>
                <h2 className="text-2xl md:text-4xl font-bold mt-2 drop-shadow-lg">
                    from here.
                </h2>
            </div>
        </section>
    )
}

export default Hero;