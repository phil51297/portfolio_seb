import { RevealOnScroll } from '../components/RevealOnScroll';

export const About = () => {
    return (
        <RevealOnScroll>
            <section
                id="about"
                className="min-h-screen relative pt-40 sm:pt-60"
            >
                <div className="max-w-7xl w-full mx-auto z-5 px-4 flex flex-col md:text-left text-center md:block items-center">
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
                        I’m committed to merging the worlds of marketing, AI,
                        and design to create innovative, tech-driven solutions
                        that guide companies through their digital
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
                    <img
                        src="/assets/qrcode.svg"
                        alt="QR Code"
                        className="mt-[-140px] ml-80 hidden md:block"
                    />
                </div>
            </section>
        </RevealOnScroll>
    );
};
