import {
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code2,
  Briefcase,
  Award,
  GraduationCap,
  Zap,
} from "lucide-react";

export default function Portfolio() {
  const generateResume = () => {
    const resumeContent = `YADAMA RACHIT REDDY
Full-Stack Developer | IoT Enthusiast | Tech Innovator

CONTACT INFORMATION
Email: yadamarachitreddy24@gmail.com
Phone: +91 90596xxxxx
Location: Hyderabad, India
LinkedIn: https://www.linkedin.com/in/yadama-rachit-reddy-1b0829261/
GitHub: https://github.com/RachitReddy24

EDUCATION
B.Tech in Computer Science and Engineering
HITAM Hyderabad | Graduation: 2026 | CPI: 7.7

Board of Intermediate / +2
Sri Chaitanya Jr. College | Graduation: 2022 | GPA: 80%

Matriculation (SSC)
DR's KKR Gowtham High School | Graduation: 2020 | GPA: 10/10

TECHNICAL SKILLS
Languages: C, Python, Java, Go, PHP
Web Technologies: HTML, Bootstrap, CSS
Frameworks: Django, Bot Framework, OM2M
Tools: Eclipse, LaTeX, PyCharm, Visual Studio, Postman, Google Sheets
Services: GitHub, GitLab, Travis-CI
Databases: SQL
Operating Systems: Windows 7/8/10, Linux (Ubuntu)

PROJECTS
Omni Mart - Web Application (May-June 2024)
E-commerce platform selling Adivasis products with specialized chatbots for awareness and support.
Technologies: Python, Django, Bot Framework

IOT Farm Security - IoT Project (Sept-Dec 2024)
Farm security system using ESP32 and sensors. Implemented OM2M for database storage, calibration of values, and data analytics.
Technologies: IoT, OM2M, Data Analytics

All-ed - Web Application (Dec 2023 - Feb 2024)
Web platform helping students from rural areas access scholarships and mentorship opportunities.
Technologies: Web Development, Django

ACHIEVEMENTS
- President at IUCEE-EWB HITAM (2025-2026)
- Ex-Project Manager at IUCEE-EWB HITAM (2023-2025)
- Cleared IIIT Intern Round-2 in IIoT and IoT-Data Analytics
- Technical Support for Hackathon Club & Core Committee Member (2023-2024)
- Event Manager for Google Developer Group on Campus
- Top 7 placement in IASF2024 (among 150 teams)
- Ideathon Runner at HITAM EWB 2024

CERTIFICATIONS
- National Hackathon Certificate (Hack Your Path) - HITAM Hyderabad (Jan 2023, 2025)
- Certificate on Emerging Technologies Overview (2023)
- Merit Certificate for C Language (National Small Industries Corporation)
- Organized multiple hackathons and technical events

INTERNSHIPS
- Industrial IoT Intern at IIITH (2025)
- AI Developer Intern at VISWAM.AI (2025)`;
const element = document.createElement("a");

// 🔥 INSERTED: Use real PDF instead of plain text
element.href = "/Rachit_Reddy_Resume.pdf";
element.download = "Rachit_Reddy_Resume.pdf";

// 🔥 INSERTED: Stop the rest of the code from replacing href
document.body.appendChild(element);
element.click();
document.body.removeChild(element);
return; // Stop execution so original text-download code is skipped

// ------ YOUR ORIGINAL CODE (unchanged) ------
element.setAttribute(
  "href",
  "data:text/plain;charset=utf-8," + encodeURIComponent(resumeContent),
);
element.setAttribute("download", "Rachit_Reddy_Resume.pdf");
element.style.display = "none";
document.body.appendChild(element);
element.click();
document.body.removeChild(element);
};


  const skills = [
    {
      category: "Languages",
      items: ["Java", "Go", "Python", "C", "PHP"],
      color: "from-blue-600 to-blue-400",
    },
    {
      category: "Web Tech",
      items: ["HTML", "CSS", "Bootstrap"],
      color: "from-orange-600 to-orange-400",
    },
    {
      category: "Frameworks",
      items: ["Django", "Bot Framework", "OM2M"],
      color: "from-purple-600 to-purple-400",
    },
    {
      category: "Tools",
      items: ["Eclipse", "Pycharm", "VS Code", "Postman"],
      color: "from-green-600 to-green-400",
    },
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "HITAM Hyderabad",
      year: "2026",
      gpa: "7.7",
    },
    {
      degree: "Board of Intermediate (+2)",
      institution: "Sri Chaitanya Jr. College",
      year: "2022",
      gpa: "80%",
    },
    {
      degree: "Matriculation (SSC)",
      institution: "DR's KKR Gowtham High School",
      year: "2020",
      gpa: "10/10",
    },
  ];

  const projects = [
    {
      title: "Omni Mart",
      type: "Web Application",
      date: "May-June 2024",
      description:
        "E-commerce platform for Adivasis products with specialized chatbots for awareness and support.",
      tech: ["Python", "Django", "Bot Framework"],
    },
    {
      title: "IOT Farm Security",
      type: "IoT Project",
      date: "Sept-Dec 2024",
      description:
        "Farm security system using ESP32 and sensors with OM2M for database storage, calibration, and data analytics.",
      tech: ["IoT", "OM2M", "Data Analytics"],
    },
    {
      title: "All-ed",
      type: "Web Application",
      date: "Dec 2023 - Feb 2024",
      description:
        "Web platform helping students from rural areas access scholarships and mentorship opportunities.",
      tech: ["Web Development", "Django"],
    },
  ];

  const achievements = [
    "President at IUCEE-EWB HITAM (2025-2026)",
    "Ex-Project Manager at IUCEE-EWB HITAM (2023-2025)",
    "Cleared IIIT Intern Round-2 in IIoT and IoT-Data Analytics",
    "Technical Support for Hackathon Club & Core Committee Member (2023-2024)",
    "Event Manager for Google Developer Group on Campus",
    "Top 7 placement in IASF2024 (among 150 teams)",
    "Ideathon Runner at HITAM EWB 2024",
  ];

  const internships = [
    {
      position: "Industrial IoT Intern",
      company: "IIITH",
      year: "2025",
    },
    {
      position: "AI Developer Intern",
      company: "VISWAM.AI",
      year: "2025",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Rachit Reddy
          </div>
          <div className="flex gap-4 items-center">
            <a
              href="https://github.com/RachitReddy24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/yadama-rachit-reddy-1b0829261/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
               href="https://mail.google.com/mail/?view=cm&fs=1&to=yadamarachitreddy24@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
                Yadama{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Rachit
                </span>{" "}
                Reddy
              </h1>
              <p className="text-xl text-slate-300">
                Full-Stack Developer | IoT Enthusiast | Tech Innovator
              </p>
            </div>

            <p className="text-lg text-slate-400 leading-relaxed">
              Computer Science student at HITAM Hyderabad with expertise in
              Java, Python, and Go. Passionate about building scalable web
              applications, IoT solutions, and leveraging AI for real-world
              impact.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-300">
                <Mail size={20} className="text-blue-400" />
                <a
                  href="mailto:yadamarachitreddy24@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  yadamarachitreddy24@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone size={20} className="text-blue-400" />
                <a
                  href="tel:+919059631379"
                  className="hover:text-blue-400 transition-colors"
                >
                  +91 90596xxxxx
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin size={20} className="text-blue-400" />
                <span>Hyderabad, India</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                onClick={generateResume}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
              >
                <Download size={20} />
                Download Resume
              </button>
              <a
                href="https://github.com/RachitReddy24"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-200 text-slate-900 rounded-lg font-semibold hover:bg-slate-300 transition-all"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-30"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <div className="w-full aspect-square bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl p-2 overflow-hidden">
  <div className="w-full h-full rounded-xl overflow-hidden">
    <img
      src="/profile.jpg"
      alt="Rachit Reddy"
      className="w-full h-full object-cover"
    />
  </div>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-slate-900 py-16 sm:py-24 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-slate-400">
              Expertise across programming languages and modern development
              tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all hover:shadow-lg"
              >
                <div
                  className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${skill.color} text-white font-semibold mb-4`}
                >
                  {skill.category}
                </div>
                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 bg-slate-700 text-slate-100 rounded-lg font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="bg-slate-800 rounded-lg p-6 text-center border border-slate-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
              <p className="text-slate-400">Languages</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 text-center border border-slate-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
              <p className="text-slate-400">Web Frameworks</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 text-center border border-slate-700">
              <div className="text-3xl font-bold text-green-400 mb-2">8+</div>
              <p className="text-slate-400">Development Tools</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 text-center border border-slate-700">
              <div className="text-3xl font-bold text-orange-400 mb-2">10+</div>
              <p className="text-slate-400">Technologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Zap size={36} className="text-cyan-400" />
            AI & Modern Tools
          </h2>
          <p className="text-xl text-slate-400">
            Experience with cutting-edge AI and development technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-cyan-500/30 p-6 hover:border-cyan-500/60 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              AI & Machine Learning
            </h3>
            <p className="text-slate-400 mb-4">
              Proficiency in AI development, data analytics, and intelligent
              automation
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full">
                TensorFlow
              </span>
              <span className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full">
                Data Analytics
              </span>
              <span className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full">
                AI Developer
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-purple-500/30 p-6 hover:border-purple-500/60 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white font-bold text-lg">IoT</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              IoT & Embedded Systems
            </h3>
            <p className="text-slate-400 mb-4">
              Building smart connected devices and real-time data processing
              systems
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                ESP32
              </span>
              <span className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                OM2M
              </span>
              <span className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                Sensors
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-emerald-500/30 p-6 hover:border-emerald-500/60 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white font-bold text-lg">Web</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Full Stack Websites
            </h3>
            <p className="text-slate-400 mb-4">
              Building responsive, modern web applications with frontend and
              backend expertise
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full">
                React
              </span>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full">
                Django
              </span>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full">
                Full Stack
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Briefcase size={36} className="text-blue-400" />
            Projects
          </h2>
          <p className="text-xl text-slate-400">
            Hands-on experience building real-world applications
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl border border-slate-700 p-6 sm:p-8 hover:border-slate-600 transition-all hover:shadow-lg"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="text-sm bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full font-medium">
                      {project.type}
                    </span>
                    <span className="text-sm text-slate-400">
                      {project.date}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-slate-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-slate-700 text-slate-200 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-slate-900 py-16 sm:py-24 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <GraduationCap size={36} className="text-blue-400" />
              Education
            </h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl border border-slate-700 p-6 sm:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-400 font-semibold mt-1">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-0 sm:text-right">
                    <p className="text-slate-300 font-semibold">{edu.year}</p>
                    <p className="text-slate-400">GPA: {edu.gpa}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Award size={36} className="text-yellow-400" />
            Achievements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-xl border border-yellow-700/50 p-6 flex items-start gap-4"
            >
              <Zap className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
              <p className="text-slate-200 font-semibold">{achievement}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Internships Section - Featured */}
      <section className="bg-gradient-to-r from-blue-900/40 via-cyan-900/40 to-blue-900/40 py-20 sm:py-32 border-y border-blue-700/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <Briefcase size={44} className="text-cyan-400" />
              Internships
            </h2>
            <p className="text-xl text-cyan-300 font-semibold">
              Hands-on professional experience with industry leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {internships.map((internship, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-cyan-900/60 to-blue-900/60 rounded-2xl p-8 border border-cyan-500/50 hover:border-cyan-400 transition-all hover:shadow-2xl">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {internship.position}
                      </h3>
                      <p className="text-cyan-300 font-bold text-lg">
                        {internship.company}
                      </p>
                    </div>
                    <div className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-bold text-sm">
                      {internship.year}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-cyan-500/30">
                    <p className="text-cyan-200 text-sm font-medium">
                      Professional Experience
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-slate-900 py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <Award size={36} className="text-blue-400" />
              Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-all hover:shadow-md">
              <h3 className="text-lg font-bold text-white">
                National Hackathon Certificate
              </h3>
              <p className="text-slate-400">Hack Your Path - HITAM Hyderabad</p>
              <p className="text-slate-400 text-sm mt-2">Jan 2023, 2025</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-all hover:shadow-md">
              <h3 className="text-lg font-bold text-white">
                Emerging Technologies
              </h3>
              <p className="text-slate-400">Certificate of Completion</p>
              <p className="text-slate-400 text-sm mt-2">2023</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-all hover:shadow-md">
              <h3 className="text-lg font-bold text-white">
                C Language Merit Certificate
              </h3>
              <p className="text-slate-400">NSIC Technical Services</p>
              <p className="text-slate-400 text-sm mt-2">Grade A+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 sm:p-12 text-white">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and
              opportunities. Feel free to reach out!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
               href="https://mail.google.com/mail/?view=cm&fs=1&to=yadamarachitreddy24@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
              >
                <Mail size={20} />
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/yadama-rachit-reddy-1b0829261/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href="https://github.com/RachitReddy24"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-slate-400 py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-2">
            © 2025 Yadama Rachit Reddy. All rights reserved.
          </p>
          <p className="text-sm opacity-75">
            Full-Stack Developer |  Tech Innovator
          </p>
        </div>
      </footer>
    </div>
  );
}
