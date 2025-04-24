import { useState, useRef, useEffect } from 'react';

export const QRCodeWithZoom = ({ qrCodeSrc, isZoomed, setIsZoomed }) => {
    const [isHovered, setIsHovered] = useState(false);
    const qrRef = useRef(null);

    const handleZoomClick = () => {
        setIsZoomed(true);
        document.body.style.overflow = 'hidden';
    };

    // Clean up on unmount
    useEffect(() => {
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    // Reset hover state when zoom changes
    useEffect(() => {
        if (!isZoomed) {
            setIsHovered(false);
        }
    }, [isZoomed]);

    return (
        <div className="relative">
            {/* QR Code with hover overlay */}
            <div
                className="relative inline-block"
                onMouseEnter={() => !isZoomed && setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                ref={qrRef}
            >
                <img
                    src={qrCodeSrc || '/assets/qrcode.svg'}
                    alt="QR Code"
                    className={`transition-all duration-300 ${isHovered && !isZoomed ? 'blur-sm' : ''}`}
                />

                {/* Hover overlay with button */}
                {isHovered && !isZoomed && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button
                            onClick={handleZoomClick}
                            className="bg-[#F43F5E] bg-opacity-70 backdrop-blur-sm py-2 px-4 text-white font-medium font-[Poppins] rounded-lg shadow-md hover:bg-opacity-90 transition hover:-translate-y-0.5"
                        >
                            View QR
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QRCodeWithZoom;
