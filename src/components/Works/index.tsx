
const Works = () => {
    return (
        <section id="works"  className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center text-black">Works</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div
                            key={index}
                            className="h-48 bg-gray-300 flex items-center justify-center text-gray-600"
                        >
                            COMING SOON
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Works;