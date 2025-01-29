import { Button } from "./components/button";

export default function App() {
    return (
        <main>
            <section className="relative flex items-center justify-center h-screen overflow-hidden">
                <div className="relative z-30 text-center space-y-32">
                    <h2 className="tracking-widest font-beaufort uppercase text-primary text-4xl font-bold">
                        Une nouvelle saga commence
                    </h2>
                    <div>
                        <img src="/images/title.webp" alt="Logo" className="pointer-events-none" />
                        <div>
                            <a href="https://youtube.com/watch?v=9L2y-8Jzn8I" target="_blank">
                                <Button>Regarder la bande annonce</Button>
                            </a>
                            <Button>En savoir plus</Button>
                        </div>
                    </div>
                </div>
                <video
                    autoPlay
                    loop
                    muted
                    className="bg-black absolute z-10 w-auto min-w-full min-h-full max-w-none brightness-75"
                >
                    <source src="/videos/background.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section>
        </main>
    );
}
