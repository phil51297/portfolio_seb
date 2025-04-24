import { RevealOnScroll } from '../components/RevealOnScroll';

export const Projects = () => {
    return (
        <RevealOnScroll>
            <section
                id="projects"
                className="min-h-screen flex justify-center py-25 bg-gradient-to-b from-[#1E1E1E7D] via-[#39222664] to-[#F43F5E56] shadow-md"
            >
                <div className="w-11/12 max-w-7xl mx-auto px-4 mt-4">
                    <h2 className="text-4xl text-center font-extrabold font-[Poppins]">
                        Our <span className="text-[#F43F5E]">Projects</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-40">
                        <div className="w-full max-w-[395px] mx-auto rounded-[15px] relative overflow-hidden group hover:-translate-y-1 transition-all">
                            <div className="p-20 pb-14 bg-[#12121299] shadow-md relative z-10 h-full flex flex-col items-center">
                                <h3 className="text-2xl text-center font-bold mb-8">
                                    Sales Navigator Automation
                                </h3>
                            </div>
                        </div>
                        <div className="w-full max-w-[395px] mx-auto rounded-[15px] relative overflow-hidden group hover:-translate-y-1 transition-all">
                            <div className="p-20 pb-14 bg-[#12121299] shadow-md  relative z-10 h-full flex flex-col items-center">
                                <h3 className="text-2xl text-center font-bold mb-8">
                                    Leads Process
                                </h3>
                            </div>
                        </div>
                        <div className="w-full max-w-[395px] mx-auto rounded-[15px] relative overflow-hidden group hover:-translate-y-1 transition-all">
                            <div className="p-20 pb-14 bg-[#12121299] shadow-md  relative z-10 h-full flex flex-col items-center">
                                <h3 className="text-2xl text-center font-bold mb-8">
                                    Personalized Training
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    );
};
