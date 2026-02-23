import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

export default function TNPLogin({ role = "Student" }) {
  const [captchaValue, setCaptchaValue] = useState("");
  const [userInput, setUserInput] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 20);
    const b = Math.floor(Math.random() * 20);
    return { question: `${a} + ${b}`, answer: a + b };
  };

  const [captcha, setCaptcha] = useState(generateCaptcha());

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden md:flex w-1/2 relative"
      >
        <img
          src="/images/college1.jpeg"
          alt="Campus"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-red-700/70"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-10">
          <h1 className="text-4xl font-bold mb-4">Training & Placement Cell</h1>
          <p className="text-lg">
            Bundelkhand Institute of Engineering & Technology, Jhansi
          </p>
        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full md:w-1/2 flex items-center justify-center relative bg-white"
      >
        {/* Center Logo */}
        <div className="hidden md:block absolute -left-12 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-full shadow-2xl">
          <img
            src="/images/bietlogo.png"
            alt="BIET Logo"
            className="w-20 h-20 object-contain"
          />
        </div>

        {/* Form Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-md px-8"
        >
          <div className="flex justify-center mb-6"></div>

          <h2 className="text-center text-2xl font-bold text-red-700">
            TNP | BIET Jhansi
          </h2>

          <p className="text-center text-xl text-gray-600 mb-8 mt-2 font-bold">
            {role} Login
          </p>

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full mb-4 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          {/* Password */}
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 pr-12"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-600 transition cursor-pointer"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* CAPTCHA */}
          <div className="mb-4">
            <div className="bg-gray-200 p-3 rounded-lg text-center font-semibold tracking-widest">
              {captcha.question}
            </div>

            <input
              type="text"
              placeholder="Enter CAPTCHA result"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="w-full mt-3 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          {/* Login Button */}
          <button className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-xl font-semibold transition cursor-pointer">
            Login
          </button>

          {/* Switch Role */}
          <p className="text-center mt-6 text-sm text-gray-600">
            {role === "Student" ? "Are you a recruiter?" : "Are you a student?"}

            <span
              onClick={() =>
                navigate(
                  role === "Student" ? "/recruiter-login" : "/student-login",
                )
              }
              className="text-red-700 font-semibold cursor-pointer ml-1"
            >
              Switch Login
            </span>
          </p>

          {/* New User Section */}
          <p className="text-center mt-3 text-sm text-gray-600">
            New User?
            <span
              onClick={() =>
                window.open(
                  role === "Student"
                    ? "https://forms.gle/bYWFjAkx7gTfFnGY7"
                    : "https://forms.gle/FZJJ5yZC98YLDmnPA",
                )
              }
              className="text-red-700 font-semibold cursor-pointer ml-1"
            >
              Register Here
            </span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
