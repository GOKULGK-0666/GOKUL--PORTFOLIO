import { useState } from 'react'
import {
  ArrowUpRight, Check, Download, FileText, Github, Instagram, Linkedin,
  Mail, Menu, MoveUpRight, Send, X,
} from 'lucide-react'
import Projects from './components/Projects'

const skills = [
  { name: 'JavaScript', detail: 'Modern ES6+ web development', worked: 'I use modern JavaScript to build interactive, maintainable web experiences.', icon: '01' },
  { name: 'React.js', detail: 'Responsive component interfaces', worked: 'I create responsive, component-based interfaces with clear state management.', icon: '02' },
  { name: 'Node.js', detail: 'Full-stack JavaScript runtime', worked: 'I connect services, databases, and APIs into scalable backend applications.', icon: '03' },
  { name: 'Express.js', detail: 'REST API development', worked: 'I build REST APIs and server-side features with clean, practical architecture.', icon: '04' },
  { name: 'MongoDB', detail: 'Flexible data management', worked: 'I work with MongoDB to model application data for reliable full-stack products.', icon: '05' },
  { name: 'HTML5 & CSS3', detail: 'Accessible responsive layouts', worked: 'I build polished responsive layouts with semantic HTML and thoughtful CSS.', icon: '06' },
  { name: 'Git & GitHub', detail: 'Team-based delivery', worked: 'I use Git-based collaboration, debugging, and version control throughout development.', icon: '07' },
  { name: 'Java', detail: 'Object-oriented programming', worked: 'I use core Java and object-oriented programming concepts to build structured application logic.', icon: '08' },
  { name: 'Python', detail: 'Scripting and application logic', worked: 'I use Python for scripting, problem solving, automation, and practical application development.', icon: '09' },
  { name: 'Bootstrap', detail: 'Responsive UI components', worked: 'I use Bootstrap utilities and components to create responsive interfaces efficiently.', icon: '10' },
]
const certificates = [
  ['Google AI Essentials', 'Google · Coursera', '2026', 'https://www.coursera.org/account/accomplishments/specialization/GB0D4QY8IOVF'],
  ['Discover the Art of Prompting', 'Google · Coursera', '2026', 'https://www.coursera.org/account/accomplishments/verify/I1D9IS9QU74W'],
  ['IBM RAG and Agentic AI', 'IBM · Coursera', '2026', 'https://coursera.org/share/a29ff2db5c33ee1f152f8385324adf7f'], 
  ['Build Multimodal Generative AI Applications', 'IBM · Coursera', '2026', 'https://coursera.org/share/59399806bb457da079a607d22d8d102b'], 
  ['Meta Web Development Fundamentals', 'Meta · Coursera', '2026', 'https://www.coursera.org/account/accomplishments/verify/F4LBEF4ENQXG'],
  ['Responsive Web Design', 'freeCodeCamp', '2025', 'https://freecodecamp.org/certification/gokul-0666/responsive-web-design'],
  ['JavaScript Algorithms and Data Structures', 'freeCodeCamp', '2026', 'https://freecodecamp.org/certification/gokul-0666/javascript-algorithms-and-data-structures-v8'],
  ['AI & Cyber Security Mastery 2026', 'Udemy', '2026', 'https://www.udemy.com/certificate/UC-c2742fc9-b4ff-4c5b-ac52-b51d349c0ff1/'],
  ['SQL,MYSQL,POSTGRESQL&MONGODB : All in one database ', 'Udemy', '2026', 'https://www.udemy.com/certificate/UC-01aa4646-464c-4575-93ac-417842ad212d/'],
  ['The Complete Python Masterclass: Learn Python', 'Udemy', '2026', 'https://www.udemy.com/certificate/UC-d7419cb9-2938-4417-9b09-79e1a028e080/'],
  ['Master Website Creation ', 'Udemy', '2026', 'https://www.udemy.com/certificate/UC-00c55626-a5db-4aa0-8926-f9c128c23947/'],
  ['Learn Graphic Design Using AI Canva Gemini and Grok Imagine', 'Udemy', '2026', 'https://www.udemy.com/certificate/UC-31751740-cd45-4c7c-8816-2a39307d9a58/'],
  // ['Certificate title pending', 'Google Drive certificate', '2026', 'https://drive.google.com/file/d/1k43OHG0HvudsWegbxrjSPzXNX9hENTzA/view?usp=drivesdk'],
  // ['Certificate title pending', 'Google Drive certificate', '2026', 'https://drive.google.com/file/d/1dKBDzuGM6V1n2Aelb5HYnl4KpPsGZBKk/view?usp=drivesdk'],
  // ['Certificate title pending', 'Google Drive certificate', '2026', 'https://drive.google.com/file/d/1AQ0iRGyi5zYRveMmvOd366IERVL3tAkC/view?usp=drivesdk'],
  // ['Course title pending', 'Coursera certificate', '2026', 'https://coursera.org/share/a29ff2db5c33ee1f152f8385324adf7f'],
  // ['Course title pending', 'Coursera certificate', '2026', 'https://coursera.org/share/59399806bb457da079a607d22d8d102b'],
]
const experience = [
  ['Java Full Stack Developer Intern', 'AMDOX Technologies · Remote / Online', 'Nov 2025 – Jan 2026', 'Completed an online internship focused on Java full-stack development, application delivery, team workflows, and industry best practices.'],
  ['Full Stack Development Intern', 'Cognifyz Technologies · Nagpur, India · Remote / Online', 'Jun 2026 – Aug 2026', 'Worked across front-end and back-end development, contributing to debugging, feature implementation, testing, and real-world MERN workflows.'],
  ['Bachelor of Engineering — Computer Science and Engineering', 'Mahendra College of Engineering · Salem, Tamil Nadu · CGPA: 7.77', 'Nov 2022 – Apr 2026', 'Built a strong foundation in computer science while developing full-stack applications and completing the CyberIntel capstone project.'],
]

function AnimatedLetters({ text }) {
  return (
    <span className="animated-letters" aria-hidden="true">
      {Array.from(text).map((letter, index) => (
        <span className="animated-letter" style={{ '--letter-index': index }} key={`${letter}-${index}`}>
          {letter === ' ' ? '\u00a0' : letter}
        </span>
      ))}
    </span>
  )
}

const emailAddress = 'gokulgk0666@gmail.com'
const gmailComposeUrl = (subject = '', body = '') => `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [showAllCertificates, setShowAllCertificates] = useState(false)
  const [selectedSkill, setSelectedSkill] = useState(skills[0])

  const submitContact = async (event) => {
    event.preventDefault()
    setStatus('sending')
    try {
      const subject = `Portfolio enquiry from ${form.name}`
      const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      setStatus('sent')
      window.location.assign(gmailComposeUrl(subject, body))
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a href="#home" className="logo" aria-label="Gokul S home">G<span>.</span>S</a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {['about', 'work', 'experience', 'certificates', 'resume', 'skills', 'contact'].map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
        </nav>
        <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> Available for projects works ·</div>
            <p className="hero-name hero-reveal"><AnimatedLetters text="HELLO, I'M" /></p>
            <h1 className="hero-reveal">
              <span className="hero-title-letters hero-name-main"><AnimatedLetters text="GOKUL S" /></span>
              <br /><em className="hero-role"><AnimatedLetters text="MERN stack developer." /></em>
            </h1>
            <p className="hero-intro hero-reveal"><AnimatedLetters text="MERN Stack Developer with a Computer Science degree and hands-on experience building responsive, scalable web applications." /></p>
            <div className="hero-actions hero-reveal">
              <a href="#work" className="button button-dark">Explore my work <MoveUpRight size={17} /></a>
              <a href="#contact" className="text-link">Get in touch <span>↗</span></a>
            </div>
            <div className="hero-socials" aria-label="Social links">
              <a href="https://github.com/GOKULGK-0666" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <a href="https://www.linkedin.com/in/gokul006" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
              <a href="https://www.instagram.com/just_misuhh/" target="_blank" rel="noreferrer"><Instagram size={17} /> Instagram</a>
              <a href="#resume" className="resume-link"><FileText size={16} /> View resume</a>
            </div>
          </div>
          <div className="hero-art" aria-label="Profile photo section">
            <div className="portrait-frame">
              <img className="portrait-photo" src={`${import.meta.env.BASE_URL}assets/GK.jpeg`} alt="Gokul S profile" />
              <div className="portrait-caption">Gokul S<br /><small>Developer / maker</small></div>
            </div>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="art-note"><strong>2+</strong><br /><span>years experience</span></div>
          </div>
          <div className="scroll-cue">Scroll to explore <span>↓</span></div>
        </section>

        <section className="about section" id="about">
          <div className="section-label">01 — About</div>
          <div className="about-content">
            <h2>Building with<br /><em>logic</em><br />and purpose.</h2>
            <div className="about-text"><p>I&apos;m a MERN Stack Developer with hands-on experience building responsive, scalable web applications using React, Node.js, Express.js, and MongoDB.</p><p>I&apos;ve completed two web development internships and delivered individual and team-based full-stack projects, including an AI-powered cybersecurity threat intelligence platform. I bring a strong problem-solving mindset, Git-based collaboration, and a continuous-learning approach.</p><a href="#contact" className="text-link">Let&apos;s build together <span>↗</span></a></div>
          </div>
        </section>

        <Projects />

        <section className="certificates section" id="experience">
          <div className="section-label">03 — Experience & education</div>
          <div className="experience-layout">
            <h2>Growing<br /><em>through practice.</em></h2>
            <div className="experience-timeline">{experience.map(([title, company, period, description], index) => <div className={`experience-item ${index % 2 ? 'left' : 'right'}`} key={title}>
              <article className="experience-card"><span className="experience-number">{String(index + 1).padStart(2, '0')}</span><div><span className="experience-period">{period}</span><h3>{title}</h3><p className="experience-company">{company}</p><p>{description}</p></div></article>
              <span className="experience-dot" aria-hidden="true" />
              {index < experience.length - 1 && <span className="experience-connector" aria-hidden="true" />}
            </div>)}</div>
          </div>
        </section>

        <section className="certificates section" id="certificates">
          <div className="section-label">04 — Certificates</div>
          <div className="certificates-layout">
            <h2>Always<br /><em>learning.</em></h2>
            <div className="certificate-list">{certificates.slice(0, showAllCertificates ? certificates.length : 4).map(([title, issuer, year, url], index) => <a className="certificate-item" href={url} target="_blank" rel="noreferrer" key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{issuer}</p></div><span className="certificate-year">{year} ↗</span></a>)}<button className="certificate-toggle" onClick={() => setShowAllCertificates(!showAllCertificates)}>{showAllCertificates ? 'Show fewer' : `View all ${certificates.length} certificates`} <ArrowUpRight size={14} /></button></div>
          </div>
        </section>

        <section className="resume section" id="resume">
          <div className="section-label">05 — Resume</div>
          <div className="resume-layout">
            <div>
              <h2>A clear<br /><em>next step.</em></h2>
              <p className="resume-copy">A concise overview of my experience, skills, education, and full-stack projects.</p>
            </div>
            <div className="resume-card">
              <FileText size={30} />
              <div><h3>Gokul S — MERN Stack Developer</h3><p>Updated September 2026 · PDF format</p></div>
              <a className="button button-dark" href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noreferrer">Open resume <ArrowUpRight size={16} /></a>
              <a className="resume-download" href={`${import.meta.env.BASE_URL}resume.pdf`} download><Download size={15} /> Download PDF</a>
            </div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <div className="section-label">06 — Toolbox</div><div className="skills-layout"><h2>Curious by<br />nature.</h2>          <div className="skill-copy"><p>Languages, frameworks, databases, and tools I use to build full-stack products.</p><div className="skill-cards">{skills.map((skill, index) => <button className={`skill-card ${selectedSkill.name === skill.name ? 'active' : ''}`} style={{ '--skill-index': index }} onClick={() => setSelectedSkill(skill)} aria-label={`${skill.name}: ${skill.detail}`} key={skill.name}><span>{skill.icon}</span><div><strong aria-hidden="true"><AnimatedLetters text={skill.name} /></strong><small aria-hidden="true"><AnimatedLetters text={skill.detail} /></small></div></button>)}</div><div className="skill-detail"><span>How I use it</span><strong>{selectedSkill.name}</strong><p>{selectedSkill.worked}</p></div></div></div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-intro"><div className="section-label">07 — Contact</div><h2>Let&apos;s build<br /><em>something useful.</em></h2><p>Have a project, role, or idea in mind? I&apos;d love to hear about it.</p><a href={gmailComposeUrl()} target="_blank" rel="noreferrer" className="email-link">Email me via Gmail <ArrowUpRight size={18} /></a><a href="tel:+919500483963" className="email-link">+91 9500483963 <ArrowUpRight size={18} /></a></div>
          <form className="contact-form" onSubmit={submitContact}><label>Your name<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="GOKUL.S" /></label><label>Email address<input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Mailto@gmail.com" /></label><label>Tell me about it<textarea required rows="3" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="A few words about your project..." /></label><button className="button button-dark" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : status === 'sent' ? <><Check size={17} /> Message sent</> : <><Send size={16} /> Send message</>}</button>{status === 'error' && <p className="form-error">Something went wrong. Please email me directly.</p>}</form>
        </section>
      </main>
      <footer><div className="footer-logo">G<span>.</span>S</div><p>Designed & built with intention.</p><div className="socials"><a href="https://github.com/GOKULGK-0666" aria-label="Github"><Github size={18} /></a><a href="https://www.linkedin.com/in/gokul006" aria-label="LinkedIn"><Linkedin size={18} /></a><a href={gmailComposeUrl()} target="_blank" rel="noreferrer" aria-label="Email"><Mail size={18} /></a></div><span className="copyright">© 2026 Gokul S</span></footer>
    </div>
  )
}

export default App
