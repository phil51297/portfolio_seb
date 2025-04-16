import { RevealOnScroll } from '../components/RevealOnScroll';

export const Skills = () => {
    return (
        <RevealOnScroll>
            <section
                id="skills"
                className="min-h-screen flex justify-center py-20 "
            >
                <div className="w-11/12 max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl text-center font-extrabold font-[Poppins]">
                        My <span className="text-[#F43F5E]">Skills</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                        <div className="w-full max-w-[395px] mx-auto rounded-[25px] relative overflow-hidden group hover:-translate-y-1 transition-all no-particles-section">
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,30,30,0.665)_39.67%,rgba(51,33,36,0.63)_49.67%,rgba(110,42,54,0.56)_66.17%,rgba(191,55,78,0.49)_79.67%,rgba(218,59,86,0.56)_96.17%,rgba(244,63,94,0.63)_100%)] rounded-[25px]"></div>
                            <div className="p-10 pb-14 rounded-[25px] border border-[#91111180] relative z-10 h-full flex flex-col">
                                <img
                                    src="/assets/design.svg"
                                    className="mx-auto mb-6"
                                ></img>
                                <h3 className="text-3xl text-center font-extrabold mb-8">
                                    Design
                                </h3>
                                <div className="flex justify-center">
                                    <ul className="space-y-1 text-left text-gray-300 font-[Roboto]">
                                        <li>Photoshop</li>
                                        <li>Procreate</li>
                                        <li>Fresco</li>
                                        <li>Canva</li>
                                        <li>Figma</li>
                                        <li>Acrobat Pro</li>
                                        <li>Illustrator</li>
                                        <li>Premier Pro</li>
                                        <li>InDesign</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="w-full max-w-[395px] mx-auto rounded-[25px] relative overflow-hidden group hover:-translate-y-1 transition-all no-particles-section">
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,30,30,0.665)_39.67%,rgba(51,33,36,0.63)_49.67%,rgba(110,42,54,0.56)_66.17%,rgba(191,55,78,0.49)_79.67%,rgba(218,59,86,0.56)_96.17%,rgba(244,63,94,0.63)_100%)] rounded-[25px]"></div>
                            <div className="p-10 pb-14 rounded-[25px] border border-[#91111180] relative z-10 h-full flex flex-col">
                                <img
                                    src="/assets/hardskills.svg"
                                    className="mx-auto mb-6"
                                ></img>
                                <h3 className="text-3xl text-center font-extrabold mb-8">
                                    Hard Skills
                                </h3>
                                <div className="flex justify-center">
                                    <ul className="space-y-1 text-left text-gray-300 font-[Roboto]">
                                        <li>Adobe Creative Cloud</li>
                                        <li>SharePoint</li>
                                        <li>Microsoft 365</li>
                                        <li>SalesForce</li>
                                        <li>SAP</li>
                                        <li>Hubspot</li>
                                        <li>Sales Navigator</li>
                                        <li>MARCOM tools</li>
                                        <li>Lead management</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="w-full max-w-[395px] mx-auto rounded-[25px] relative overflow-hidden group hover:-translate-y-1 transition-all no-particles-section">
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,30,30,0.665)_39.67%,rgba(51,33,36,0.63)_49.67%,rgba(110,42,54,0.56)_66.17%,rgba(191,55,78,0.49)_79.67%,rgba(218,59,86,0.56)_96.17%,rgba(244,63,94,0.63)_100%)] rounded-[25px]"></div>
                            <div className="p-10 pb-14 rounded-[25px] border border-[#91111180] relative z-10 h-full flex flex-col">
                                <img
                                    src="/assets/softskills.svg"
                                    className="mx-auto mb-6"
                                ></img>
                                <h3 className="text-3xl text-center font-extrabold mb-8">
                                    Soft Skills
                                </h3>
                                <div className="flex justify-center">
                                    <ul className="space-y-1 text-left text-gray-300 font-[Roboto]">
                                        <li>Management</li>
                                        <li>Autonomy</li>
                                        <li>Training</li>
                                        <li>Cooperativity</li>
                                        <li>Team spirit</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    );
};
