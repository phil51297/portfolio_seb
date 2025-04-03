import { RevealOnScroll } from '../components/RevealOnScroll';

export const Contact = () => {
    return (
        <RevealOnScroll>
            <section
                id="contacts"
                className="min-h-screen flex justify-center py-20"
            >
                <div className="px-4 w-full max-w-3xl">
                    <h2 className="text-4xl text-center font-extrabold font-[Poppins]">
                        Contact <span className="text-[#F43F5E]">Me</span>
                    </h2>
                    <form className="w-full mt-20">
                        <div className="flex gap-4 mb-6">
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    required
                                    className="w-full bg-white/5 border border-white/10 bg-[#1E1E1E] rounded-[10px] text-white transition px-4 py-3 focus:outline-none focus:border-red-400"
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    required
                                    className="w-full bg-white/5 border border-white/10 bg-[#1E1E1E] rounded-[10px] text-white transition px-4 py-3 focus:outline-none focus:border-red-400"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>

                        <div className="flex gap-4 mb-6">
                            <div className="relative flex-1">
                                <input
                                    type="tel"
                                    id="mobile"
                                    name="mobile"
                                    required
                                    className="w-full bg-white/5 border border-white/10 bg-[#1E1E1E] rounded-[10px] text-white transition px-4 py-3 focus:outline-none focus:border-red-400"
                                    placeholder="Mobile Number"
                                />
                            </div>
                            <div className="relative flex-1">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 bg-[#1E1E1E] rounded-[10px] text-white transition px-4 py-3 focus:outline-none focus:border-red-400"
                                    placeholder="Email Address"
                                />
                            </div>
                        </div>

                        <div className="relative mb-6">
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows="6"
                                className="w-full bg-white/5 border border-white/10 bg-[#1E1E1E] rounded-[10px] text-white transition px-4 py-3 focus:outline-none focus:border-red-400"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#F43F5E] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_10px_3px_rgba(244,63,94,0.4)] cursor-pointer"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </RevealOnScroll>
    );
};
