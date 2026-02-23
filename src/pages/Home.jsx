import React, { useState } from "react";
import { motion } from "framer-motion";
import coreTeam from "../data/coreTeam";
import {
  Menu,
  X,
  Users,
  Award,
  GraduationCap,
  Building2,
  Phone,
  Mail,
  Globe,
  ArrowUp,
} from "lucide-react";
import { notices } from "../data/notices";
import { useNavigate, Link } from "react-router-dom";

const Section = ({ id, title, children }) => (
  <section id={id} className="py-20 px-6 md:px-16 bg-white scroll-mt-24">
    <div className="max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-red-700 mb-10 border-b-4 border-red-600 inline-block pb-2"
      >
        {title}
      </motion.h2>
      {children}
    </div>
  </section>
);

const logos = Object.values(
  import.meta.glob("/src/assets/companies/*.{png,jpg,jpeg,svg}", {
    eager: true,
    import: "default",
  }),
);

export default function Home() {
  const [openModal, setOpenModal] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [today] = useState(new Date());
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        // appears after 200px scroll
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isExpired = (date) => {
    return new Date(date) < today;
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const teamMembers = Array.from({ length: 20 }, (_, i) => ({
    name: `Member ${i + 1}`,
    role: "TPC Coordinator",
    img: `https://randomuser.me/api/portraits/${i % 2 === 0 ? "men" : "women"}/${i + 10}.jpg`,
  }));

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* NAVBAR */}

      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <img
              src="/images/bietlogo.png"
              alt="BIET Logo"
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-lg md:text-2xl font-bold text-red-700">
              TPC | BIET Jhansi
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-red-600 transition cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("director")}
              className="hover:text-red-600 transition cursor-pointer"
            >
              Director's Message
            </button>
            <button
              onClick={() => scrollToSection("records")}
              className="hover:text-red-600 transition cursor-pointer"
            >
              Records
            </button>
            <button
              onClick={() => scrollToSection("partners")}
              className="hover:text-red-600 transition cursor-pointer"
            >
              Partners
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="hover:text-red-600 transition cursor-pointer"
            >
              Our Team
            </button>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-4">
            <button
              className="px-4 py-2 border border-red-700 text-red-700 rounded-xl hover:bg-red-700 hover:text-white transition cursor-pointer"
              onClick={() => navigate("/student-login")}
            >
              Student Login
            </button>
            <button
              className="px-4 py-2 bg-red-700 text-white rounded-xl hover:bg-red-800 transition cursor-pointer"
              onClick={() => navigate("/recruiter-login")}
            >
              Recruiter Login
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white shadow-lg px-6 pb-6 space-y-4 font-medium">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left hover:text-red-600 cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("tpo")}
              className="block w-full text-left hover:text-red-600 cursor-pointer"
            >
              Director's Message
            </button>
            <button
              onClick={() => scrollToSection("records")}
              className="block w-full text-left hover:text-red-600 cursor-pointer"
            >
              Records
            </button>
            <button
              onClick={() => scrollToSection("partners")}
              className="block w-full text-left hover:text-red-600 cursor-pointer"
            >
              Partners
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="block w-full text-left hover:text-red-600 cursor-pointer"
            >
              Our Team
            </button>

            <div className="pt-4 flex flex-col gap-3">
              <button className="w-full px-4 py-2 border border-red-700 text-red-700 rounded-xl hover:bg-red-700 hover:text-white transition cursor-pointer">
                Student Login
              </button>
              <button className="w-full px-4 py-2 bg-red-700 text-white rounded-xl hover:bg-red-800 transition cursor-pointer">
                Recruiter Login
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO WITH BACKGROUND IMAGE */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/images/college2.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-red-900/75 backdrop-brightness-75"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center px-6 max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Training and Placement Cell
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-medium">
            Bundelkhand Institute of Engineering and Technology, Jhansi
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection("notice")}
              className="bg-white text-red-700 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition cursor-pointer"
            >
              Notices & Announcements
            </button>
            <button
              onClick={() => scrollToSection("brochure")}
              className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-red-700 transition cursor-pointer"
            >
              Download Brochure
            </button>
            <button
              className="bg-red-700 px-6 py-3 rounded-2xl font-semibold hover:bg-red-800 transition cursor-pointer"
              onClick={() =>
                window.open("https://forms.gle/FZJJ5yZC98YLDmnPA", "_blank")
              }
            >
              Student Register
            </button>
            <button
              className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-red-700 transition cursor-pointer"
              onClick={() =>
                window.open("https://forms.gle/bYWFjAkx7gTfFnGY7", "_blank")
              }
            >
              Recruiter Register
            </button>
          </div>
        </motion.div>
      </section>

      {/* ABOUT US */}
      <Section id="about" title="About Us">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* LEFT SIDE - ABOUT CONTENT */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2 text-lg leading-relaxed"
          >
            <p>
              Continuing its longstanding tradition of achieving new milestones
              each year, BIET Jhansi has commenced the placement season by
              finalizing schedules with esteemed organizations such as Google,
              Microsoft, Reliance, HLS Asia, Cadence, United Airlines,
              MeasurePM, Recruit CRM, Clarity, SRF, Instant Systems, Byju’s,
              Easygov, Hashedin, HCL, Hexaware, Infosys, Josh Technology, L&T,
              Optum, TCS, and Wipro, among others.
            </p>

            <br />

            <p>
              The highest salary package offered this season stands at an
              impressive ₹64 lakhs per annum, inclusive of benefits. The growing
              participation of leading industries in our placement drives
              reaffirms their confidence in the institution and the caliber of
              our students.
            </p>

            <br />

            <p>
              As a premier technical institution, BIET Jhansi consistently
              attracts organizations from diverse and emerging sectors,
              providing students with rewarding career opportunities. By placing
              one of the largest cohorts among government engineering colleges,
              the institute has further strengthened the trust and confidence of
              its recruiters and industry partners.
            </p>

            <br />

            <p>
              The sustained success of our placement program reflects the strong
              academic culture fostered by our faculty and the continued support
              of our alumni network. We extend our sincere appreciation to the
              administration, faculty members, support staff, and students whose
              collective efforts ensure the smooth and successful conduct of the
              placement process each year.
            </p>
          </motion.div>

          {/* RIGHT SIDE - NOTICES PANEL */}
          <div
            id="notice"
            className="bg-white shadow-xl rounded-2xl p-5 h-[420px] overflow-hidden border border-gray-200"
          >
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <h3 className="text-xl font-bold text-red-700">
                Notices & Announcements
              </h3>

              <button
                onClick={() => setShowAll(true)}
                className="text-sm text-red-600 font-medium hover:underline cursor-pointer"
              >
                View All
              </button>
            </div>

            <div className="relative h-[340px] overflow-hidden group">
              <div className="absolute animate-scroll group-hover:[animation-play-state:paused] space-y-4">
                {notices.concat(notices).map((notice, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-xl bg-gray-50 hover:bg-red-50 transition"
                  >
                    <h4 className="font-semibold text-gray-800">
                      {notice.title}
                    </h4>

                    <p className="text-sm text-gray-600">
                      Company: {notice.company}
                    </p>

                    <p
                      className={`text-sm font-medium ${isExpired(notice.date) ? "text-red-600" : "text-green-600"}`}
                    >
                      Date: {notice.date}
                      {isExpired(notice.date) && " (Expired)"}
                    </p>

                    {notice.link && (
                      <a
                        href={notice.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-sm underline"
                      >
                        View Details
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {showAll && (
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
              onClick={() => setShowAll(false)} // 👈 close when backdrop clicked
            >
              <div
                className="bg-white w-[90%] md:w-[700px] max-h-[80vh] rounded-2xl shadow-2xl relative flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header (Fixed) */}
                <div className="p-6 border-b relative">
                  <button
                    onClick={() => setShowAll(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-xl cursor-pointer"
                  >
                    ✕
                  </button>

                  <h2 className="text-2xl font-bold text-red-700">
                    All Notices
                  </h2>
                </div>

                {/* Scrollable Content */}
                <div className="p-6 overflow-y-auto flex-1 space-y-4">
                  {notices.map((notice, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-gray-50 border hover:bg-red-50 transition"
                    >
                      <h4 className="font-semibold text-gray-800">
                        {notice.title}
                      </h4>

                      <p className="text-sm text-gray-600">
                        Company: {notice.company}
                      </p>

                      <p
                        className={`text-sm font-medium ${
                          isExpired(notice.date)
                            ? "text-red-600"
                            : "text-green-600"
                        }`}
                      >
                        Date: {notice.date}
                        {isExpired(notice.date) && " (Expired)"}
                      </p>

                      {notice.link && (
                        <a
                          href={notice.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 text-sm underline"
                        >
                          View Details
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* Director's MESSAGE */}
      <Section id="director" title="Message from Director">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-red-50 p-8 rounded-2xl shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-500 to-red-700 blur-xl opacity-30"></div>
              <div className="relative p-2 rounded-full border-4 border-red-300">
                <img
                  src="/images/director.jpg"
                  alt="Director"
                  className="w-44 h-44 rounded-full object-cover border-4 border-red-700 shadow-2xl"
                />
              </div>
            </div>

            <div className="hidden md:block w-1 h-40 bg-gradient-to-b from-red-600 to-red-300 rounded-full"></div>

            <div className="flex-1 text-center md:text-left">
              <p className="italic text-lg leading-relaxed text-gray-700">
                “At BIET Jhansi, we strive to create an ecosystem where academic
                excellence meets professional preparedness.”
              </p>

              <button
                onClick={() => setOpenModal("director")}
                className="mt-4 text-red-700 font-semibold hover:underline cursor-pointer"
              >
                Read More
              </button>

              <p className="mt-6 font-semibold text-red-700 text-lg tracking-wide">
                — Prof. Jitendra Kumar Sharma
                <br />
                Director, BIET Jhansi
              </p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* TPO MESSAGE */}
      <Section id="tpo" title="Message from TPO">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-red-50 p-8 rounded-2xl shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-500 to-red-700 blur-xl opacity-30"></div>
              <div className="relative p-2 rounded-full border-4 border-red-300">
                <img
                  src="/images/tpo.jpeg"
                  alt="TPO"
                  className="w-44 h-44 rounded-full object-cover border-4 border-red-700 shadow-2xl"
                />
              </div>
            </div>

            <div className="hidden md:block w-1 h-40 bg-gradient-to-b from-red-600 to-red-300 rounded-full"></div>

            <div className="flex-1 text-center md:text-left">
              <p className="italic text-lg leading-relaxed text-gray-700">
                “The Training and Placement Cell at BIET Jhansi functions with a
                clear vision — to prepare students for meaningful careers.”
              </p>

              <button
                onClick={() => setOpenModal("tpo")}
                className="mt-4 text-red-700 font-semibold hover:underline cursor-pointer"
              >
                Read More
              </button>

              <p className="mt-6 font-semibold text-red-700 text-lg tracking-wide">
                — Prof. Ekta Pandey
                <br />
                MBA Department
                <br />
                Training and Placement Officer, BIET Jhansi
                <br />
                📞 +91-7607869687
              </p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Deputy TPO MESSAGE */}
      <Section id="deputy" title="Message from Deputy TPO">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-red-50 p-8 rounded-2xl shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-500 to-red-700 blur-xl opacity-30"></div>
              <div className="relative p-2 rounded-full border-4 border-red-300">
                <img
                  src="/images/deputy_tpo.jpeg"
                  alt="Deputy TPO"
                  className="w-44 h-44 rounded-full object-cover border-4 border-red-700 shadow-2xl"
                />
              </div>
            </div>

            <div className="hidden md:block w-1 h-40 bg-gradient-to-b from-red-600 to-red-300 rounded-full"></div>

            <div className="flex-1 text-center md:text-left">
              <p className="italic text-lg leading-relaxed text-gray-700">
                “Placement preparation at BIET Jhansi is a continuous journey
                focused on holistic student development.”
              </p>

              <button
                onClick={() => setOpenModal("deputy")}
                className="mt-4 text-red-700 font-semibold hover:underline cursor-pointer"
              >
                Read More
              </button>

              <p className="mt-6 font-semibold text-red-700 text-lg tracking-wide">
                — Prof. Atul Kumar Dwivedi
                <br />
                Electronics & Communication Engineering Department
                <br />
                Deputy Training & Placement Officer, BIET Jhansi
                <br />
                📞 +91-9713424754
              </p>
            </div>
          </div>
        </motion.div>
      </Section>

      <section className="relative bg-gradient-to-br from-red-800 to-red-900 text-white py-20 px-6 md:px-16 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-red-600 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-500 opacity-20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Why BIET Jhansi
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-lg text-red-100 leading-relaxed mb-16"
          >
            Established as a premier government engineering institute,
            Bundelkhand Institute of Engineering and Technology, Jhansi has
            consistently delivered excellence in technical education. With
            strong academic foundations, industry collaborations, and a vibrant
            campus culture, BIET nurtures competent professionals ready to excel
            in dynamic global environments.
          </motion.p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Alumni */}
            <FeatureCard
              icon={<Users size={36} />}
              title="Strong Alumni Network"
              description="Our alumni serve in top MNCs, government sectors, and research institutions worldwide, strengthening BIET's legacy."
            />

            {/* Rankings */}
            <FeatureCard
              icon={<Award size={36} />}
              title="Academic Excellence"
              description="Recognized for strong academic performance, experienced faculty, and consistent university results."
            />

            {/* Admission */}
            <FeatureCard
              icon={<GraduationCap size={36} />}
              title="Merit-Based Admission"
              description="Students are admitted through competitive entrance examinations ensuring quality and academic rigor."
            />

            {/* Development */}
            <FeatureCard
              icon={<Building2 size={36} />}
              title="Holistic Development"
              description="From technical fests to innovation labs and sports facilities, BIET promotes all-round student growth."
            />
          </div>
        </div>
      </section>

      {/* PLACEMENT RECORD */}
      <Section id="records" title="Placement Records">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { label: "Highest Package", value: "₹ 20 LPA" },
            { label: "Average Package", value: "₹ 6 LPA" },
            { label: "Placement Percentage", value: "98%" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl text-center hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-bold text-red-700">{item.value}</h3>
              <p className="mt-2 text-gray-600">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* RECRUITING PARTNERS */}
      <Section id="partners" title="Recruiting Partners">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center hover:scale-105 transition"
            >
              <img
                src={logo}
                alt="Company Logo"
                className="h-12 object-contain grayscale hover:grayscale-0 transition"
              />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* BROCHURE */}
      <Section id="brochure" title="Placement Brochure">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-700 to-red-900 text-white p-10 rounded-2xl text-center shadow-xl"
        >
          <p className="text-lg md:text-xl">
            Download our detailed placement brochure to explore statistics,
            academic programs, infrastructure, and recruitment process.
          </p>
          <button className="mt-6 bg-white text-red-700 px-8 py-3 rounded-2xl font-bold hover:scale-105 transition">
            Download PDF
          </button>
        </motion.div>
      </Section>

      {/* OUR TEAM */}
      <Section id="team" title="Our Team">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
          {coreTeam.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => window.open(member.linkedinurl, "_blank")}
              className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition duration-300"
            >
              <div className="relative w-28 h-28 mx-auto">
                <div className="absolute inset-0 rounded-full bg-red-500 blur-lg opacity-20"></div>
                <img
                  src={member.img}
                  alt={member.name}
                  className="relative w-28 h-28 rounded-full object-cover border-4 border-red-700"
                />
              </div>

              <h4 className="mt-4 font-bold text-red-700 text-lg">
                {member.name}
              </h4>

              <p className="text-gray-600 text-sm font-medium">{member.post}</p>

              <p className="text-gray-500 text-sm mt-1">📞 {member.phone}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* LEFT SECTION */}
          <div className="flex items-start gap-4">
            {/* College Logo */}
            <a
              href="https://www.bietjhs.ac.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/bietlogo.png"
                alt="BIET Logo"
                className="w-16 h-16 object-contain cursor-pointer"
              />
            </a>

            {/* Text Content */}
            <div>
              <h3 className="text-xl font-bold text-white">
                TPC - BIET Jhansi
              </h3>
              <p className="mt-2 text-sm">
                Empowering careers through industry collaboration and academic
                excellence.
              </p>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-red-500 cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("records")}
                  className="hover:text-red-500 cursor-pointer"
                >
                  Placement Records
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("partners")}
                  className="hover:text-red-500 cursor-pointer"
                >
                  Partners
                </button>
              </li>
            </ul>
          </div>

          {/* CONTACT + MAP */}
          <div>
            <h4 className="font-semibold text-white">Office Address:</h4>

            <div className="mt-4 grid md:grid-cols-2 gap-4 items-start">
              {/* CONTACT DETAILS */}
              <div className="text-sm space-y-2">
                <p>
                  Training & Placement Cell, <br />
                  1st Floor, Central Library, <br />
                  Bundelkhand Institute of Engineering and Technology <br />
                  Jhansi, Uttar Pradesh – 284128
                </p>

                <div className="mt-4">
                  <p className="font-semibold text-white mb-2">
                    Contact Information
                  </p>

                  {/* Phone Numbers */}
                  <div className="flex items-center gap-2 text-white">
                    <Phone size={18} />
                    <a href="tel:+917985600151" className="hover:underline">
                      +91-7985600151
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-white mt-1">
                    <Phone size={18} />
                    <a href="tel:+917380650624" className="hover:underline">
                      +91-7380650624
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-2 text-white mt-3">
                    <Mail size={18} />
                    <a
                      href="mailto:tnp@bietjhs.ac.in"
                      className="hover:underline"
                    >
                      tnp@bietjhs.ac.in
                    </a>
                  </div>

                  {/* Website */}
                  <div className="flex items-center gap-2 text-white mt-3">
                    <Globe size={18} />
                    <a
                      href="https://www.bietjhs.ac.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      www.bietjhs.ac.in
                    </a>
                  </div>
                </div>
              </div>

              {/* GOOGLE MAP */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2281.4130306772777!2d78.63688669690328!3d25.458575734940904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3977772eacf0faff%3A0x6624d2b80ce16028!2sBundelkhand%20Institute%20Of%20Engineering%20%26%20Technology%20chemical%20engineering%20department!5e0!3m2!1sen!2sin!4v1771828173653!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BIET Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 text-sm text-gray-500">
          © {new Date().getFullYear()} TPC BIET Jhansi. All rights reserved.
        </div>
      </footer>

      {/* MODAL */}
      {openModal && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
          onClick={() => setOpenModal(null)}
        >
          <div
            className="bg-white max-w-3xl w-full p-8 rounded-2xl shadow-2xl relative overflow-y-auto max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setOpenModal(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-xl font-bold"
            >
              ✕
            </button>

            {/* DIRECTOR FULL MESSAGE */}
            {openModal === "director" && (
              <>
                <h3 className="text-2xl font-bold text-red-700 mb-6">
                  Director’s Message
                </h3>

                <p className="text-gray-700 leading-relaxed text-justify">
                  At Bundelkhand Institute of Engineering and Technology,
                  Jhansi, we are committed to delivering quality technical
                  education that prepares students not only for employment but
                  for leadership in their chosen fields. Our institution
                  emphasizes discipline, innovation, ethical conduct, and
                  continuous learning.
                  <br />
                  <br />
                  The Training and Placement Cell serves as a vital bridge
                  between academia and industry. Through structured training
                  programs, internships, industrial visits, expert lectures, and
                  placement drives, we ensure that our students are equipped
                  with both technical proficiency and professional competence.
                  <br />
                  <br />
                  We are proud of the achievements of our students across
                  diverse sectors including core engineering, information
                  technology, consulting, and public enterprises.
                  <br />
                  <br />I extend my sincere appreciation to our recruiting
                  partners for their continued trust and collaboration.
                </p>

                {/* Signature */}
                <div className="mt-8 border-t pt-6 text-right">
                  <p className="font-semibold text-red-700 text-lg">
                    Prof. Jitendra Kumar Sharma
                  </p>
                  <p className="text-gray-600">Director, BIET Jhansi</p>
                  {/* <p className="text-gray-600">
              📞 +91-1234567890
            </p> */}
                </div>
              </>
            )}

            {/* TPO FULL MESSAGE */}
            {openModal === "tpo" && (
              <>
                <h3 className="text-2xl font-bold text-red-700 mb-6">
                  Training & Placement Officer’s Message
                </h3>

                <p className="text-gray-700 leading-relaxed text-justify">
                  The Training and Placement Cell at BIET Jhansi operates with
                  the objective of guiding students towards successful and
                  rewarding careers. Our approach is systematic and aligned with
                  current industry requirements.
                  <br />
                  <br />
                  From the early stages of academic life, students are
                  encouraged to develop strong technical foundations along with
                  communication and analytical skills.
                  <br />
                  <br />
                  We maintain strong industry relationships and continuously
                  expand our recruiter network.
                  <br />
                  <br />
                  We welcome organizations to engage with our institute.
                </p>

                {/* Signature */}
                <div className="mt-8 border-t pt-6 text-right">
                  <p className="font-semibold text-red-700 text-lg">
                    Prof. Ekta Pandey
                  </p>
                  <p className="text-gray-600">MBA Department</p>
                  <p className="text-gray-600">
                    Training and Placement Officer, BIET Jhansi
                  </p>
                  <p className="text-gray-600">📞 +91-7607869687</p>
                </div>
              </>
            )}

            {/* DEPUTY FULL MESSAGE */}
            {openModal === "deputy" && (
              <>
                <h3 className="text-2xl font-bold text-red-700 mb-6">
                  Deputy Training & Placement Officer’s Message
                </h3>

                <p className="text-gray-700 leading-relaxed text-justify">
                  At BIET Jhansi, placement preparation is treated as a
                  continuous developmental process rather than a final-year
                  activity.
                  <br />
                  <br />
                  Through close coordination with academic departments and
                  student placement coordinators, we ensure comprehensive
                  guidance throughout the placement cycle.
                  <br />
                  <br />
                  We remain committed to strengthening industry partnerships and
                  creating diverse opportunities.
                </p>

                {/* Signature */}
                <div className="mt-8 border-t pt-6 text-right">
                  <p className="font-semibold text-red-700 text-lg">
                    Dr. Atul Kumar Dwivedi
                  </p>
                  <p className="text-gray-600">
                    Electronics & Communication Engineering Department
                  </p>
                  <p className="text-gray-600">
                    Deputy Training & Placement Officer, BIET Jhansi
                  </p>
                  <p className="text-gray-600">📞 +91-9713424754</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-red-700 hover:bg-red-800 text-white p-3 rounded-full shadow-xl transition-all duration-300 z-50"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </div>
  );
}

/* Reusable Feature Card */
function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="flex justify-center mb-4 text-red-200">{icon}</div>

      <h3 className="bg-white text-red-800 px-5 py-2 rounded-lg font-medium hover:bg-red-100 transition">
        {title}
      </h3>

      <p className="text-red-100 text-sm leading-relaxed mb-6">{description}</p>

      {/* <button className="bg-white text-red-800 px-5 py-2 rounded-lg font-medium hover:bg-red-100 transition">
        Know More
      </button> */}
    </motion.div>
  );
}
