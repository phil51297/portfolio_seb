import { useState, useEffect } from 'react';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { QRCodeWithZoom } from '../components/QrCodeWithZoom';

// Main About component with QR code integration
export const About = () => {
    const [isQrZoomed, setIsQrZoomed] = useState(false);

    // Control body overflow based on modal state
    useEffect(() => {
        if (isQrZoomed) {
            // Prevent scrolling when modal is open
            document.body.style.overflow = 'hidden';
        } else {
            // Re-enable scrolling when modal is closed
            document.body.style.overflow = '';
        }

        // Cleanup when component unmounts
        return () => {
            document.body.style.overflow = '';
        };
    }, [isQrZoomed]);

    return (
        <>
            <RevealOnScroll>
                <section
                    id="about"
                    className={`min-h-screen relative pt-40 sm:pt-60 transition-all duration-300 ${isQrZoomed ? 'blur-md' : ''}`}
                >
                    <div
                        className={`max-w-7xl w-full mx-auto z-5 px-4 flex flex-col md:text-left text-center md:block items-center ${isQrZoomed ? 'pointer-events-none' : ''}`}
                    >
                        <h2 className="text-2xl sm:text-3xl font-medium">
                            Hello, Its Me
                        </h2>
                        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-[Poppins] mt-4">
                            Sebastien Bonnafous
                        </h1>
                        <h2 className="text-2xl sm:text-3xl font-medium mt-4">
                            I'm a{' '}
                            <span className="text-[#F43F5E]">
                                Marketer & Designer
                            </span>
                        </h2>
                        <p className="text-1xl mt-12 md:mt-8 max-w-2xl font-[Sora] md:text-left text-center">
                            I'm committed to merging the worlds of marketing,
                            AI, and design to create innovative, tech-driven
                            solutions that guide companies through their digital
                            transformation, enhance brand presence, and foster
                            lasting customer relationships.
                        </p>
                        <div className="flex justify-start space-x-8 mt-8 max-w-3xs">
                            <a
                                href="https://www.linkedin.com/in/sebastien-bonnafous"
                                className="transition relative overflow-hidden hover:-translate-y-0.5 cursor-pointer"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/assets/linkedin.svg" alt="Icon" />
                            </a>
                            <a
                                href="mailto:sebastien.bonnafous.pro@gmail.com"
                                className="transition relative overflow-hidden hover:-translate-y-0.5 cursor-pointer"
                            >
                                <img src="/assets/email.svg" alt="Icon" />
                            </a>
                        </div>
                        <div className="flex justify-start mt-12 max-w-3xs">
                            <a className="bg-[#F43F5E] py-2 px-5 text-white font-bold font-[Poppins] rounded-lg shadow-md hover:shadow-red-400 hover:shadow-[0_0_10px_3px] transition hover:-translate-y-0.5 cursor-pointer">
                                Download CV
                            </a>
                        </div>

                        {/* QR Code with hover only - the zoom part will be rendered outside */}
                        <div className="mt-[-140px] ml-80 hidden md:block">
                            <QRCodeWithZoom
                                qrCodeSrc="/assets/qrcode.svg"
                                isZoomed={isQrZoomed}
                                setIsZoomed={setIsQrZoomed}
                                renderZoomedOutsideSection={true}
                            />
                        </div>
                    </div>
                </section>
            </RevealOnScroll>

            {/* Render zoomed QR code outside the section entirely - now without bg container */}
            {isQrZoomed && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-auto"
                    onClick={() => setIsQrZoomed(false)}
                >
                    <div
                        className="relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsQrZoomed(false)}
                            className="absolute -top-8 -right-8 text-white hover:text-gray-200 z-50"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        <img
                            src="/assets/qrcode.svg"
                            alt="QR Code"
                            style={{
                                width: '40vmin',
                                height: '40vmin',
                                maxWidth: '400px',
                                maxHeight: '400px',
                                transform: 'scale(1.2)',
                                transformOrigin: 'center',
                            }}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default About;
