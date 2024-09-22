// import "../styles/Home.css";
import { Link } from "react-router-dom";

import Hero from "../assets/hero.jpg";

const Home = () => {
  return (
    <>
      <section className="w-full">
        {/* Navbar */}
        <nav className="bg-slate-800  p-4 text-white">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex space-x-4">
              <span className="text-lg font-bold">My-School.</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-200">
              <a
                href="/"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                About
              </a>
              <div className="flex items-center p-1 rounded-md border ml-3 border-slate-400">
                <Link
                  to="/register"
                  className="hover:text-blue-400 transition-colors duration-300 p-2"
                >
                  Register
                </Link>

                <Link
                  to="/login"
                  className="hover:bg-emerald-700 transition-colors duration-300 p-2 px-4 rounded-md bg-emerald-600"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </section>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto min-h-[calc(100vh-175px)] gap-6 text-slate-800 px-8 mt-8 md:mt-16 mb-24">
        <div className=" flex gap-4 flex-col-reverse md:flex-row items-center">
          <div className="flex flex-col items-center text-center mt-2 md:items-start md:text-left  gap-4 w-full">
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Welcome to School <br />
              Management System
            </h1>
            <p className="text-xl leading-8 text-slate-700">
              Efficiently manage students, teachers, attendance, and more with
              ease.
            </p>
            <div className="">
              <a
                href="#"
                className="rounded-md bg-emerald-600 px-8 md:px-12 py-2 text-lg font-semibold text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
            </div>
          </div>
          <div className="w-full h-full rounded-2xl overflow-hidden">
            <img src={Hero} alt="Hero Image" />
          </div>
        </div>
      </section>
      {/* Featured Section with Responsive Grid */}
      <section className="bg-gray-100 p-10 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Features
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Card 1
              </h3>
              <p className="text-gray-600">
                Description for the first featured program. Highlight the
                benefits and key points here.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Card 2
              </h3>
              <p className="text-gray-600">
                Description for the second featured program. Focus on details
                and key highlights.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Card 3
              </h3>
              <p className="text-gray-600">
                Description for the third featured program. Add a few lines for
                impact.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Card 4
              </h3>
              <p className="text-gray-600">
                Description for the fourth featured program. Make it appealing
                to users.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Card 5
              </h3>
              <p className="text-gray-600">
                Description for the fifth featured program. Highlight the
                uniqueness of this program.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Card 6
              </h3>
              <p className="text-gray-600">
                Description for the sixth featured program. Engage the audience
                here.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="bg-slate-800 p-10 text-white">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center max-w-6xl mx-auto">
          {/* Email Subscription Box */}
          <div className="flex flex-col md:flex-row ">
            <input
              type="email"
              className="rounded-md rounded-b-none md:rounded-b-md md:rounded-br-none  md:rounded-r-none p-3 w-full md:w-auto text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
            <button className="rounded-md rounded-t-none md:rounded-tr-md  md:rounded-l-none bg-indigo-600 px-4 py-2 text-sm font-semibold hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Subscribe
            </button>
          </div>
          {/* Social Media Handles */}
          <div className="mt-6 md:mt-0 flex justify-center gap-4 text-sm text-slate-200 ">
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook-f" /> Facebook
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter" /> Twitter
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram" /> Instagram
            </a>
          </div>
        </div>
        {/* Copyright */}
        <div className="md:text-left mb-6 md:mb-0 mt-8">
          <p className="text-sm text-center">
            © 2024 My School. All rights reserved.
          </p>
        </div>
      </footer>
    </>

    // <div className="home-container">

    //   {/* Navigation Bar */}
    //   <nav className="navbar">
    //     <div className="logo">School Management</div>
    //     <ul className="nav-links">
    //       <li>
    //         <a href="#home">Home</a>
    //       </li>
    //       <li>
    //         <a href="#features">Features</a>
    //       </li>
    //       <li>
    //         <a href="#about">About</a>
    //       </li>
    //       <li>
    //         <Link to="/register">Register</Link>
    //       </li>
    //       <li>
    //         <Link to="/login">Login</Link>
    //       </li>
    //     </ul>
    //   </nav>

    //   {/* Hero Section */}
    //   <h1 className="text-xl font-bold underline text-blue-500">
    //     Hello world!
    //   </h1>
    //   <section className="hero">
    //     <div className="hero-text">
    //       <h1>Welcome to School Management System</h1>
    //       <p>
    //         Efficiently manage students, teachers, attendance, and more with
    //         ease.
    //       </p>
    //       <Link to="/register" className="cta-button">
    //         Get Started
    //       </Link>
    //     </div>
    //   </section>

    //   {/* Features Section */}
    //   <section className="features" id="features">
    //     <h2>Our Key Features</h2>
    //     <div className="features-grid">
    //       <div className="feature-box">
    //         <img src="student-icon.png" alt="Student Management" />
    //         <h3>Student Management</h3>
    //         <p>Manage student profiles, grades, and attendance seamlessly.</p>
    //       </div>
    //       <div className="feature-box">
    //         <img src="teacher-icon.png" alt="Teacher Management" />
    //         <h3>Teacher Management</h3>
    //         <p>Track teacher information, performance, and schedules.</p>
    //       </div>
    //       <div className="feature-box">
    //         <img src="attendance-icon.png" alt="Attendance Tracking" />
    //         <h3>Attendance Tracking</h3>
    //         <p>Keep accurate records of student and teacher attendance.</p>
    //       </div>
    //       <div className="feature-box">
    //         <img src="report-icon.png" alt="Reports & Analytics" />
    //         <h3>Reports & Analytics</h3>
    //         <p>
    //           Generate insightful reports to help improve school performance.
    //         </p>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Footer */}
    //   <footer className="footer" id="contact">
    //     <div className="footer-content">
    //       <h3>Contact Us</h3>
    //       <p>Email: info@schoolmanagement.com</p>
    //       <p>Phone: +123 456 7890</p>
    //       <p>Address: 123 School St, Education City</p>
    //       <div className="social-links">
    //         <a href="#">
    //           <img src="facebook-icon.png" alt="Facebook" />
    //         </a>
    //         <a href="#">
    //           <img src="twitter-icon.png" alt="Twitter" />
    //         </a>
    //         <a href="#">
    //           <img src="instagram-icon.png" alt="Instagram" />
    //         </a>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
  );
};

export default Home;
