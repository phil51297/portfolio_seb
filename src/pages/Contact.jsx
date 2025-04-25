import { useState } from "react";
import emailjs from "emailjs-com";
export const Contact = () => {
    const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ firstname: "", lastname: "", mobile: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };
    return (
        <section
            id="contact"
            className="min-h-screen flex justify-center py-25"
        >
            <div className="px-4 w-full max-w-3xl mt-4">
                <h2 className="text-4xl text-center font-extrabold font-[Poppins]">
                    Contact <span className="text-[#F43F5E]">Me</span>
                </h2>
                <form className="w-full mt-20" onSubmit={handleSubmit}>
                    <div className="flex gap-4">
                        <div className="relative flex-1">
                            <input
                                type="text"
                                id="firstname"
                                name="firstname"
                                required
                                value={formData.firstname}
                                className="w-full bg-white/5 border border-white/10 rounded-[10px] text-white transition px-4 py-3 focus:outline-none focus:border-red-400 no-particles-section-contact"
                                placeholder="First Name"
                                onChange={(e) => setFormData({ ...formData, firstname: e.target.value})}
                            />
                        </div>
                        <div className="relative flex-1">
                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                required
                                value={formData.lastname}
                                className="w-full bg-white/5 border border-white/10 rounded-[10px] text-white transition px-4 py-3 focus:outline-none focus:border-red-400 no-particles-section-contact"
                                placeholder="Last Name"
                                onChange={(e) => setFormData({ ...formData, lastname: e.target.value})}
                            />
                        </div>
                    </div>

                    <div className="flex gap-4 mt-6">
                        <div className="relative flex-1">
                            <input
                                type="tel"
                                id="mobile"
                                name="mobile"
                                required
                                value={formData.mobile}
                                className="w-full bg-white/5 border border-white/10 rounded-[10px] text-white transition px-4 py-3 focus:outline-none focus:border-red-400 no-particles-section-contact"
                                placeholder="Mobile Number"
                                onChange={(e) => setFormData({ ...formData, mobile: e.target.value})}
                            />
                        </div>
                        <div className="relative flex-1">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="w-full bg-white/5 border border-white/10 rounded-[10px] text-white transition px-4 py-3 focus:outline-none focus:border-red-400 no-particles-section-contact"
                                placeholder="Email Address"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value})}
                            />
                        </div>
                    </div>

                    <div className="relative mt-6">
                        <textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            rows="6"
                            className="w-full bg-white/5 border border-white/10 rounded-[10px] text-white transition px-4 py-3 focus:outline-none focus:border-red-400 no-particles-section-contact"
                            placeholder="Your Message"
                            onChange={(e) => setFormData({ ...formData, message: e.target.value})}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full mt-12 bg-[#F43F5E] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_10px_3px_rgba(244,63,94,0.4)] cursor-pointer"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};
