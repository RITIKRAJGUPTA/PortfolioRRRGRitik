import React, { useState } from "react";
import NavigationBar from "./components/Navbar";
import { Container, Button, Card, Form, Row, Col, Badge } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import profileImage from "./assets/profile.jpeg";
import resumePDF from "./assets/rrgRitikResume.pdf";

// Import React Icons
import { 
  FiDownload, 
  FiLinkedin, 
  FiGithub, 
  FiCheckCircle,
  FiCode,
  FiGlobe,
  FiBriefcase,
  FiUsers,
  FiHeart,
  FiAward,
  FiTool,
  FiUser,
  FiMail,
  FiMessageSquare,
  FiSend,
  FiEye,
  FiGitBranch,
  FiServer,
  FiDatabase,
  FiTrendingUp,
  FiCalendar,
  FiMapPin,
  FiBriefcase as FiCase
} from "react-icons/fi";

import { 
  FaReact, 
  FaNodeJs, 
  FaJsSquare, 
  FaBootstrap,
  FaInstagram,
  FaNetworkWired
} from "react-icons/fa";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://portfoliorrrgritik.onrender.com/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully!", { autoClose: 5000 });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(result.error || "Failed to send message", {
          autoClose: 5000,
        });
      }
    } catch (error) {
      toast.error("Something went wrong!", { autoClose: 5000 });
    } finally {
      setLoading(false);
    }
  };

  // Work Experience data
  const experiences = [
    {
      company: "TrackoWorld",
      location: "Bangalore, India",
      position: "Networking Engineer",
      period: "Currently Working",
      icon: <FaNetworkWired size={24} />,
      color: "info",
      responsibilities: [
        "Designing and implementing network solutions",
        "Troubleshooting network issues and ensuring optimal performance",
        "Collaborating with cross-functional teams on infrastructure projects",
        "Maintaining network security and compliance standards"
      ],
      current: true
    },
    {
      company: "Binics World Corporation",
      location: "Mohali, PB",
      position: "MERN Stack Developer",
      period: "Aug 2024 - June 2025",
      icon: <FaReact size={24} />,
      color: "primary",
      responsibilities: [
        "Documentation and Team Collaboration: Closely collaborated with cross-functional teams to collect requirements, record workflows, and provide regular project progress reports",
        "Enhancements to UI/UX: Worked in tandem with the design team to improve user interfaces, guaranteeing responsiveness and a better experience on all devices",
        "Frontend Development with React.js: Created and incorporated new modules into existing projects, improving the usability and functionality of the application",
        "API Integration: Successfully linked frontend modules and backend APIs to retrieve, process, and display dynamic data, ensuring smooth data transfer between client and server",
        "Code optimization and debugging: Identified and fixed problems in the existing codebase to guarantee effective operation and compliance with React.js coding best practices"
      ],
      current: false
    }
  ];

  // Skills data
  const skills = [
    { name: "React.js", level: 90, icon: <FaReact size={20} /> },
    { name: "Node.js", level: 85, icon: <FaNodeJs size={20} /> },
    { name: "MongoDB", level: 80, icon: <FiDatabase size={20} /> },
    { name: "SQL", level: 75, icon: <FiServer size={20} /> },
    { name: "JavaScript", level: 90, icon: <FaJsSquare size={20} /> },
    { name: "Bootstrap", level: 85, icon: <FaBootstrap size={20} /> },
    { name: "Networking", level: 70, icon: <FaNetworkWired size={20} /> },
  ];

  // Projects data
    const projects = [
  {
    title: "HRMS",
    desc: "Built a complete HR platform to manage employee data, attendance, leave requests, and payroll with secure role-based access control.",
    repolink: "https://github.com/RITIKRAJGUPTA/HRMS-",
    link: "https://rrghrmsbyritik.onrender.com",
    liveLinks: [
      { name: "Live 1", url: "https://rrghrmsbyritik.onrender.com" },
      { name: "Live 2", url: "https://hrmsbyrrgritik-x1ub.onrender.com" }
    ],
    tags: ["Full Stack", "React", "Node.js"],
    icon: <FiUsers size={24} />,
  },
  {
    title: "NameVerse",
    desc: "An all-in-one interactive web platform blending creativity, entertainment, and utility in a single seamless experience.",
    repolink: "https://github.com/RITIKRAJGUPTA/Ritik-s-Insight-Hub---NameVerse",
    link: "https://nameversebyrrgritik.onrender.com/",
    liveLinks: [
      { name: "Live 1", url: "https://nameversebyrrgritik.onrender.com/" },
      { name: "Live 2", url: "https://rrgnameversebyrrgritik.onrender.com/" }
    ],
    tags: ["MERN", "API"],
    icon: <FiGlobe size={24} />,
  },
  {
    title: "Gym Website",
    desc: "Modern fitness website with membership plans, trainer profiles, and contact functionality.",
    repolink: "https://github.com/RITIKRAJGUPTA/GYM_WEBSTITE_WITH_EMAIL_FUNCTIONALITY",
    link: "https://gymsitebyritik.netlify.app/",
    liveLinks: [
      { name: "Live 1", url: "https://gymsitebyritik.netlify.app/" },
      { name: "Live 2", url: "https://firstgymproject.onrender.com" }
    ],
    tags: ["Frontend", "Responsive"],
    icon: <FiHeart size={24} />,
  },
  {
    title: "JS Projects Hub",
    desc: "Collection of interactive JavaScript projects including Color Changer, BMI Generator, and Digital Clock.",
    repolink: "https://github.com/RITIKRAJGUPTA/JS-Projects",
    link: "https://jsbyritikk.netlify.app/",
    tags: ["JavaScript", "UI Components"],
    icon: <FiCode size={24} />,
  },
];

  // Certifications data
  const certifications = [
    {
      name: "React.js Certification",
      issuer: "Springboard by Infosys",
      year: "2024",
      icon: <FaReact size={24} />,
      color: "primary",
    },
    {
      name: "Node.js Certification",
      issuer: "Springboard by Infosys",
      year: "2024",
      icon: <FaNodeJs size={24} />,
      color: "success",
    },
    {
      name: "Business Analytics",
      issuer: "Advanced Business Analytics Specialization",
      year: "2023",
      icon: <FiTrendingUp size={24} />,
      color: "warning",
    },
  ];

  return (
    <div
      className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}
      style={{
        minHeight: "100vh",
        transition: "all 0.3s ease",
      }}
    >
      <NavigationBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <ToastContainer 
        position="top-center" 
        theme={darkMode ? "dark" : "light"}
        className="mt-5"
      />

      {/* Hero Section */}
      <section
        id="home"
        className="d-flex align-items-center justify-content-center text-center"
        style={{
          minHeight: "100vh",
          background: darkMode 
            ? "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)"
            : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          paddingTop: "80px",
          color: "#fff",
        }}
      >
        <Container>
          <div className="hero-content">
            <div className="profile-image-wrapper mb-4">
              <img
                src={profileImage}
                alt="Ritik Raj Gupta"
                className="rounded-circle shadow-lg"
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                  border: "5px solid rgba(255,255,255,0.2)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                }}
              />
            </div>
            <h1 className="display-4 fw-bold mb-3">Ritik Raj Gupta</h1>
            <p className="lead mb-4" style={{ fontSize: "1.25rem", opacity: 0.9 }}>
              Full Stack Developer & Networking Engineer
            </p>
            <p className="mb-5" style={{ maxWidth: "600px", margin: "0 auto", opacity: 0.8 }}>
              Passionate about creating elegant solutions to complex problems through clean code and modern technologies.
            </p>
            
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Button
                href={resumePDF}
                download="RitikRajGupta_Resume.pdf"
                variant="light"
                size="lg"
                className="px-4 py-2 fw-semibold"
              >
                <FiDownload className="me-2" />
                Download Resume
              </Button>
              
              <Button
                variant="outline-light"
                size="lg"
                href="https://www.linkedin.com/in/rrgritik2001/"
                target="_blank"
                className="px-4 py-2"
              >
                <FiLinkedin className="me-2" />
                LinkedIn
              </Button>
              
              <Button
                variant="outline-light"
                size="lg"
                href="https://github.com/RITIKRAJGUPTA"
                target="_blank"
                className="px-4 py-2"
              >
                <FiGithub className="me-2" />
                GitHub
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
              <FiUser className="me-2" />
              About Me
            </h2>
            <div className="underline mx-auto" style={{
              width: "60px",
              height: "4px",
              background: darkMode ? "#0d6efd" : "#667eea",
              borderRadius: "2px"
            }}></div>
          </div>
          
          <Row className="align-items-center">
            <Col lg={8} className="mx-auto">
              <div className={`p-4 rounded-4 ${darkMode ? 'bg-dark' : 'bg-white'} shadow-lg`}>
                <p className="lead mb-4">
                  I'm Ritik, a passionate Software Engineer and Networking professional with expertise in building full-stack applications using React, Node.js, and modern web technologies.
                </p>
                <p className="mb-4">
                  With hands-on experience in developing scalable web applications like HR management systems, job portals, and interactive platforms, 
                  I focus on creating efficient, user-friendly solutions that solve real-world problems. Currently expanding my expertise in networking infrastructure.
                </p>
                <div className="row mt-4">
                  <div className="col-md-4 mb-3">
                    <div className="d-flex align-items-center">
                      <div className={`rounded-circle p-2 me-3 ${darkMode ? 'bg-primary' : 'bg-light-blue'}`}>
                        <FiCheckCircle className="text-primary" size={20} />
                      </div>
                      <div>
                        <h5 className="mb-1">Full Stack Dev</h5>
                        <p className="text-muted mb-0">MERN Stack</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="d-flex align-items-center">
                      <div className={`rounded-circle p-2 me-3 ${darkMode ? 'bg-info' : 'bg-info-subtle'}`}>
                        <FiCheckCircle className="text-info" size={20} />
                      </div>
                      <div>
                        <h5 className="mb-1">Networking</h5>
                        <p className="text-muted mb-0">Infrastructure</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="d-flex align-items-center">
                      <div className={`rounded-circle p-2 me-3 ${darkMode ? 'bg-success' : 'bg-success-subtle'}`}>
                        <FiCheckCircle className="text-success" size={20} />
                      </div>
                      <div>
                        <h5 className="mb-1">Problem Solving</h5>
                        <p className="text-muted mb-0">Clean solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className={`py-5 ${darkMode ? 'bg-dark-subtle' : 'bg-light-subtle'}`}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
              <FiCase className="me-2" />
              Work Experience
            </h2>
            <div className="underline mx-auto" style={{
              width: "60px",
              height: "4px",
              background: darkMode ? "#0d6efd" : "#667eea",
              borderRadius: "2px"
            }}></div>
            <p className="text-muted mt-3">My professional journey</p>
          </div>

          <div className="timeline">
            {experiences.map((exp, idx) => (
              <div key={idx} className="mb-5">
                <div className={`p-4 rounded-4 ${darkMode ? 'bg-dark' : 'bg-white'} shadow-lg position-relative`}
                  style={{
                    borderLeft: `4px solid var(--bs-${exp.color})`,
                    marginLeft: "30px"
                  }}>
                  
                  {/* Timeline dot */}
                  <div className="position-absolute" 
                    style={{
                      left: "-41px",
                      top: "20px",
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      background: darkMode ? `var(--bs-${exp.color})` : `var(--bs-${exp.color})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: `3px solid ${darkMode ? '#343a40' : '#f8f9fa'}`
                    }}>
                    <span className="text-white">
                      {exp.icon}
                    </span>
                  </div>
                  
                  <div className="d-flex flex-wrap justify-content-between align-items-start mb-3">
                    <div>
                      <h3 className="fw-bold mb-1">{exp.position}</h3>
                      <div className="d-flex align-items-center flex-wrap gap-2 mb-2">
                        <span className={`badge bg-${exp.color} px-3 py-2`}>{exp.company}</span>
                        {exp.current && (
                          <Badge bg="success" className="px-3 py-2">
                            Currently Working
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="d-flex align-items-center">
                      <FiMapPin className={`me-2 ${darkMode ? 'text-light' : 'text-muted'}`} />
                      <span className={darkMode ? 'text-light' : 'text-muted'}>{exp.location}</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <FiCalendar className={`me-2 ${darkMode ? 'text-light' : 'text-muted'}`} />
                      <span className={darkMode ? 'text-light' : 'text-muted'}>{exp.period}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h5 className="mb-3 fw-semibold">Key Responsibilities:</h5>
                    <ul className="list-unstyled">
                      {exp.responsibilities.map((resp, respIdx) => (
                        <li key={respIdx} className="mb-2">
                          <div className="d-flex">
                            <div className={`me-3 ${darkMode ? 'text-primary' : 'text-primary'}`}>•</div>
                            <span className={darkMode ? 'text-light' : 'text-dark'}>{resp}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Projects Section */}
<section id="projects" className="py-5">
  <Container>
    <div className="text-center mb-5">
      <h2 className="display-5 fw-bold mb-3">
        <FiCode className="me-2" />
        Featured Projects
      </h2>
      <div className="underline mx-auto" style={{
        width: "60px",
        height: "4px",
        background: darkMode ? "#0d6efd" : "#667eea",
        borderRadius: "2px"
      }}></div>
      <p className="text-muted mt-3">Some of my recent work</p>
    </div>

    <Row className="g-4">
      {projects.map((proj, idx) => (
        <Col lg={4} md={6} key={idx}>
          <Card 
            className={`h-100 border-0 ${darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`}
            style={{ 
              transition: "all 0.3s ease",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: darkMode 
                ? "0 10px 30px rgba(0, 0, 0, 0.3)" 
                : "0 10px 30px rgba(0, 0, 0, 0.1)",
              border: darkMode ? "1px solid #333" : "1px solid #eee"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = darkMode 
                ? "0 15px 40px rgba(0, 0, 0, 0.4)" 
                : "0 15px 40px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = darkMode 
                ? "0 10px 30px rgba(0, 0, 0, 0.3)" 
                : "0 10px 30px rgba(0, 0, 0, 0.1)";
            }}
          >
            <Card.Body className="p-4 d-flex flex-column">
              {/* Project Header */}
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div className="d-flex align-items-center">
                  <div 
                    className={`rounded-circle p-2 me-3 ${darkMode ? 'bg-primary/20' : 'bg-primary-subtle'}`}
                    style={{
                      background: darkMode 
                        ? "rgba(var(--bs-primary-rgb), 0.1)" 
                        : "var(--bs-primary-bg-subtle)"
                    }}
                  >
                    <span className={darkMode ? 'text-primary' : 'text-primary'}>
                      {proj.icon}
                    </span>
                  </div>
                  <div>
                    <Card.Title className="fw-bold mb-0">{proj.title}</Card.Title>
                    <small className={darkMode ? "text-light" : "text-muted"}>
                      Project #{String(idx + 1).padStart(2, '0')}
                    </small>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <Card.Text className={`flex-grow-1 mb-4 ${darkMode ? 'text-light' : 'text-muted'}`}>
                {proj.desc}
              </Card.Text>

              {/* Project Tags */}
              <div className="mb-4">
                {proj.tags.map((tag, tagIdx) => (
                  <span 
                    key={tagIdx} 
                    className={`badge ${darkMode ? 'bg-secondary/50' : 'bg-light-subtle'} me-2 mb-2 px-3 py-2`}
                    style={{
                      background: darkMode 
                        ? "rgba(108, 117, 125, 0.3)" 
                        : "var(--bs-light-bg-subtle)",
                      color: darkMode ? "#fff" : "#000"
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="d-flex gap-2 mt-auto">
                <Button
                  variant={darkMode ? "outline-light" : "outline-primary"}
                  href={proj.repolink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-grow-1 py-2"
                  style={{
                    borderWidth: "2px",
                    borderRadius: "8px",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    if (darkMode) {
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (darkMode) {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  <FiGitBranch className="me-2" />
                  Code
                </Button>
                {proj.liveLinks ? (
  proj.liveLinks.map((l, i) => (
    <Button
      key={i}
      variant="primary"
      href={l.url}
      target="_blank"
      className="flex-grow-1 py-2"
    >
      <FiEye className="me-2" />
      {l.name}
    </Button>
  ))
) : (
  <Button
    variant="primary"
    href={proj.link}
    target="_blank"
    className="flex-grow-1 py-2"
  >
    <FiEye className="me-2" />
    Live Demo
  </Button>
)}

              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    {/* Project Counter */}
    <div className="mt-5 text-center">
      <div className={`d-inline-block p-3 rounded-4 ${darkMode ? 'bg-dark-subtle' : 'bg-light-subtle'}`}>
        <div className="row align-items-center">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="display-6 fw-bold">{projects.length}</div>
            <small className={darkMode ? "text-light" : "text-muted"}>Total Projects</small>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="display-6 fw-bold">4</div>
            <small className={darkMode ? "text-light" : "text-muted"}>Live Demos</small>
          </div>
          <div className="col-md-4">
            <div className="display-6 fw-bold">0</div>
            <small className={darkMode ? "text-light" : "text-muted"}>Coming Soon</small>
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>

      {/* Skills Section */}
      <section id="skills" className={`py-5 ${darkMode ? 'bg-dark-subtle' : 'bg-light-subtle'}`}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
              <FiTool className="me-2" />
              Technical Skills
            </h2>
            <div className="underline mx-auto" style={{
              width: "60px",
              height: "4px",
              background: darkMode ? "#0d6efd" : "#667eea",
              borderRadius: "2px"
            }}></div>
          </div>

          <Row className="g-4">
            {skills.map((skill, idx) => (
              <Col md={6} lg={4} key={idx}>
                <div className={`p-4 rounded-4 ${darkMode ? 'bg-dark' : 'bg-white'} shadow-sm h-100`}>
                  <div className="d-flex align-items-center mb-3">
                    <div className={`rounded-circle p-2 me-3 ${darkMode ? 'bg-primary-subtle' : 'bg-light-blue'}`}>
                      <span className={darkMode ? 'text-primary' : 'text-primary'}>
                        {skill.icon}
                      </span>
                    </div>
                    <div>
                      <h5 className="mb-0 fw-semibold">{skill.name}</h5>
                    </div>
                    <div className="ms-auto">
                      <span className="fw-bold">{skill.level}%</span>
                    </div>
                  </div>
                  <div className="progress" style={{ height: "8px" }}>
                    <div 
                      className={`progress-bar ${darkMode ? 'bg-primary' : 'bg-gradient'}`}
                      role="progressbar"
                      style={{ width: `${skill.level}%` }}
                      aria-valuenow={skill.level}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
              <FiAward className="me-2" />
              Certifications
            </h2>
            <div className="underline mx-auto" style={{
              width: "60px",
              height: "4px",
              background: darkMode ? "#0d6efd" : "#667eea",
              borderRadius: "2px"
            }}></div>
          </div>

          <Row className="g-4">
            {certifications.map((cert, idx) => (
              <Col md={4} key={idx}>
                <div className={`p-4 rounded-4 h-100 ${darkMode ? 'bg-dark' : 'bg-white'} shadow-sm`}
                  style={{
                    borderLeft: `4px solid var(--bs-${cert.color})`
                  }}>
                  <div className="d-flex align-items-start mb-3">
                    <div className={`rounded-circle p-2 me-3 bg-${cert.color}-subtle`}>
                      <span className={`text-${cert.color}`}>
                        {cert.icon}
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="fw-bold mb-1">{cert.name}</h5>
                      <p className="text-muted mb-2">{cert.issuer}</p>
                      <span className="badge bg-secondary">{cert.year}</span>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-5 ${darkMode ? 'bg-dark-subtle' : 'bg-light-subtle'}`}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
              <FiMail className="me-2" />
              Get In Touch
            </h2>
            <div className="underline mx-auto" style={{
              width: "60px",
              height: "4px",
              background: darkMode ? "#0d6efd" : "#667eea",
              borderRadius: "2px"
            }}></div>
            <p className="text-muted mt-3">Feel free to reach out for collaborations or just a friendly hello!</p>
          </div>

          <Row className="justify-content-center">
            <Col lg={8}>
              <div className={`p-4 rounded-4 ${darkMode ? 'bg-dark' : 'bg-white'} shadow-lg`}>
                <Form onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-semibold">
                          <FiUser className="me-2" />
                          Your Name
                        </Form.Label>
                        <Form.Control
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          size="lg"
                          placeholder="Enter your name"
                          className="py-3"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-semibold">
                          <FiMail className="me-2" />
                          Email Address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          size="lg"
                          placeholder="Enter your email"
                          className="py-3"
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label className="fw-semibold">
                          <FiMessageSquare className="me-2" />
                          Your Message
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          placeholder="Type your message here..."
                          className="py-3"
                          style={{ resize: "none" }}
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} className="text-center">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={loading}
                        className="px-5 py-3 fw-semibold"
                        style={{
                          background: darkMode 
                            ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                            : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                          border: "none",
                          minWidth: "200px"
                        }}
                      >
                        {loading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <FiSend className="me-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className={`py-4 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
        <Container>
          <div className="text-center">
            <div className="d-flex justify-content-center gap-4 mb-3">
              <a 
                href="https://www.linkedin.com/in/rrgritik2001/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${darkMode ? 'text-light' : 'text-dark'} fs-4`}
                style={{ textDecoration: "none" }}
              >
                <FiLinkedin />
              </a>
              <a 
                href="https://github.com/RITIKRAJGUPTA" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${darkMode ? 'text-light' : 'text-dark'} fs-4`}
                style={{ textDecoration: "none" }}
              >
                <FiGithub />
              </a>
              <a 
                href="https://www.instagram.com/rrgritik_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${darkMode ? 'text-light' : 'text-dark'} fs-4`}
                style={{ textDecoration: "none" }}
              >
                <FaInstagram />
              </a>
            </div>
            <p className="mb-0">
              © {new Date().getFullYear()} Ritik Raj Gupta. All rights reserved.
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default App;
