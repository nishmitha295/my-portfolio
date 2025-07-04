import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ExternalLink, Github, Linkedin, Mail, MapPin, Calendar, Code, Database, Server, Smartphone, Monitor, GitBranch, Eye } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const roles = ['Software Developer', 'Java Full Stack Developer', 'Frontend Developer', 'Backend Developer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'Java', icon: Code, level: 90 },
    { name: 'JavaScript', icon: Code, level: 85 },
    { name: 'TypeScript', icon: Code, level: 80 },
    { name: 'React.js', icon: Monitor, level: 88 },
    { name: 'Node.js', icon: Server, level: 85 },
    { name: 'Spring Boot', icon: Server, level: 82 },
    { name: 'MySQL', icon: Database, level: 85 },
    { name: 'Git', icon: GitBranch, level: 85 },
    { name: 'HTML5', icon: Code, level: 90 },
    { name: 'CSS3', icon: Code, level: 85 }
  ];

  const projects = [
    {
      title: 'Smart Support',
      description: 'AI-powered customer service platform with chatbot, ticket management, and order handling system.',
      tech: ['React', 'Node.js', 'Express', 'MySQL', 'JWT'],
      features: ['AI Chatbot', 'Ticket System', 'Admin Dashboard', 'Order Management'],
    },
    {
      title: 'ShopEase',
      description: 'Responsive e-commerce frontend with modern UI components and seamless user experience.',
      tech: ['React', 'JavaScript', 'Bootstrap', 'CSS3'],
      features: ['Product Listings', 'Shopping Cart', 'Responsive Design', 'User Authentication'],
    },
    {
      title: 'IDMS Project',
      description: 'Internal Data Management System for HR, Store, Finance, and Employee management.',
      tech: ['Java', 'Spring Boot', 'MySQL', 'React', 'Tailwind CSS'],
      features: ['HR Management', 'Store Management', 'Finance Management', 'Employee Management'],
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Nishmitha M V
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['home', 'about', 'skills', 'projects', 'education', 'experience', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === section
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {['home', 'about', 'skills', 'projects', 'education', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                    activeSection === section
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Nishmitha M V
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                A passionate <span className="font-semibold text-blue-600 transition-all duration-500">{roles[currentRoleIndex]}</span> skilled in building responsive web applications with modern technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Recent Graduate (B.E in Information Science) | 2025 Passout
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Actively seeking Full-time opportunities
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  Get In Touch
                </button>
                <a
                  href="https://drive.google.com/file/d/13-IMZmALDHyvZeyrJDEeS_7NmA1GY5hi/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Eye size={20} />
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                I'm a self-driven full stack developer with internship experience in building AI-powered chatbot applications and e-commerce frontends. 
                I love turning ideas into interactive and efficient applications using modern web technologies.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Smart Support</h3>
                  <p className="text-gray-600 text-sm">AI-powered customer service platform with chatbot, ticket, and order handling.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Smartphone className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">E-commerce Frontend</h3>
                  <p className="text-gray-600 text-sm">Responsive e-commerce frontend using React, Bootstrap, and JavaScript.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Server className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Internship Experience</h3>
                  <p className="text-gray-600 text-sm">Clistas Technologies - chatbot with LangChain, Mistral AI, Redis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <skill.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{skill.name}</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Languages & Frameworks</h3>
              <div className="space-y-2">
                {['Java', 'JavaScript', 'TypeScript', 'React.js', 'Node.js', 'Spring Boot'].map((tech) => (
                  <span key={tech} className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Web Technologies</h3>
              <div className="space-y-2">
                {['HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'Material UI'].map((tech) => (
                  <span key={tech} className="inline-block bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Databases & Tools</h3>
              <div className="space-y-2">
                {['MySQL', 'Git', 'Postman', 'Swagger'].map((tech) => (
                  <span key={tech} className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Other Technologies</h3>
              <div className="space-y-2">
                {['JWT', 'REST APIs', 'GitHub Actions', 'Vercel', 'VS Code', 'IntelliJ'].map((tech) => (
                  <span key={tech} className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="text-gray-600 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Bachelor of Engineering</h3>
                  <p className="text-lg text-blue-600 mb-2">Information Science and Engineering</p>
                  <p className="text-gray-600 mb-4">Visvesvaraya Technological University</p>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      Karnataka, India
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      2025 Graduate
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full font-medium">
                        GPA: 8.3
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Java Full Stack Developer Intern</h3>
                  <p className="text-lg text-blue-600 mb-2">Tiranga Aerospace Pvt Ltd</p>
                  <p className="text-gray-600 mb-6">Worked on full stack development for enterprise management systems.</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Developed modules for HR, Store, Finance, and Employee management using Java, Spring Boot, and React.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Integrated MySQL database and implemented RESTful APIs.</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Java', 'Spring Boot', 'React', 'MySQL'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Full Stack Developer Intern</h3>
                  <p className="text-lg text-blue-600 mb-2">Clistas Technologies Pvt. Ltd</p>
                  <p className="text-gray-600 mb-6">AI Project - Chatbot Development</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Worked on chatbot using <strong>Mistral AI + LangChain</strong> for intelligent conversation handling</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Handled API integration, <strong>MySQL</strong> database operations, and <strong>Redis</strong> caching</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Built responsive frontend features with <strong>React</strong> and <strong>Tailwind CSS</strong></p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'MySQL', 'Redis', 'LangChain', 'Mistral AI', 'Tailwind CSS'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-[80vh] flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Get In Touch</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              I'm actively looking for full-time opportunities as a Software Developer. Let's connect and discuss how I can contribute to your team!
            </p>
          </div>

          <div className="flex justify-center items-center w-full">
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-blue-100 max-w-md w-full flex flex-col items-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Contact Information</h3>
              <div className="space-y-6 w-full">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Bangalore, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mvnishmithagowda@gmail.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline break-all">
                      mvnishmithagowda@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/nishmitha-m-v-399100335/" className="text-blue-600 hover:text-blue-700 underline break-all" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/nishmitha-mv
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Github className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">GitHub</h4>
                    <a href="https://github.com/nishmitha295" className="text-blue-600 hover:text-blue-700 underline break-all" target="_blank" rel="noopener noreferrer">
                      github.com/nishmitha295
                    </a>
                  </div>
                </div>
              </div>
              <a href="https://drive.google.com/file/d/13-IMZmALDHyvZeyrJDEeS_7NmA1GY5hi/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-md hover:from-blue-700 hover:to-purple-700 transition-colors text-lg">
                <Eye size={22} />
                View Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Nishmitha M V</h3>
            <p className="text-gray-400 mb-6">Java Full Stack Developer</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/nishmitha295" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="mailto:mvnishmithagowda@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
                © 2025 Nishmitha M V. All rights reserved. | Built with React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;