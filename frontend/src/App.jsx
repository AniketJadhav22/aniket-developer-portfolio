import React from 'react';
import { useEffect, useState } from 'react';
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Database, Server, Globe, GraduationCap, ExternalLink, Download,
  Send, CheckCircle2, BriefcaseBusiness, Sparkles, Terminal, Layers3
} from 'lucide-react';

const email = import.meta.env.VITE_EMAIL || 'ajadhav222003@gmail.com';
const github = import.meta.env.VITE_GITHUB_URL || 'https://github.com/aniketJadhav22';
const linkedin = import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/aniket-jadhav-2202a61a1';
const apiBase = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

const skills = [
  { title: 'Languages', icon: Code2, items: ['Java', 'JavaScript', 'SQL', 'Python (Basics)'] },
  { title: 'Backend', icon: Server, items: ['Spring Boot', 'Spring MVC', 'Spring Data JPA', 'REST APIs', 'Hibernate'] },
  { title: 'Frontend', icon: Globe, items: ['React.js', 'HTML5', 'CSS3', 'Bootstrap'] },
  { title: 'Database & Tools', icon: Database, items: ['MySQL', 'Oracle SQL', 'Git & GitHub', 'Postman', 'Maven', 'Eclipse / STS'] },
];

const projects = [
  {
    number: '01', name: 'JobOrbit', category: 'FULL-STACK WEB APP',
    description: 'A smart recruitment platform connecting job seekers and recruiters, with role-based access, job listings, applications, and candidate tracking.',
    stack: ['React.js', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL'],
    icon: BriefcaseBusiness, github: 'https://github.com/your-username/JobOrbit',
    featured: true
  },
  {
    number: '02', name: 'Employee Management System', category: 'FULL-STACK CRUD APP',
    description: 'A full-stack application to manage employee records with a React interface and Spring Boot REST APIs backed by a relational database.',
    stack: ['React.js', 'Spring Boot', 'JPA', 'MySQL'],
    icon: Layers3, github: 'https://github.com/your-username/employee-management-system'
  },
  // {
  //   number: '03', name: 'Stock Visualization App', category: 'DATA VISUALIZATION',
  //   description: 'A learning project exploring stock-market data retrieval, processing, and interactive visualizations.',
  //   stack: ['Python', 'Pandas', 'yfinance', 'Plotly'],
  //   icon: Terminal, github: 'https://github.com/your-username/stock-visualization'
  // }
];

const certifications = [
  { name: 'Cloud Computing', issuer: 'NPTEL', note: '82% · Silver Medal' },
  { name: 'Java Programming', issuer: 'NPTEL', note: '77%' },
  { name: 'Database Management', issuer: 'NPTEL', note: '54%' },
  { name: 'Java Programming', issuer: 'LinkedIn Learning', note: 'Certificate' },
];

function SectionHeading({ eyebrow, title, accent }) {
  return <div className="section-heading reveal">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title} <span className="gradient-text">{accent}</span></h2>
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState({ type: '', text: '' });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const onChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  async function submitContact(e) {
    e.preventDefault();
    setSending(true);
    setFormStatus({ type: '', text: '' });
    try {
      const response = await fetch(`${apiBase}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!response.ok) throw new Error('Contact API is not available');
      setFormStatus({ type: 'success', text: 'Message sent successfully. Thanks for reaching out!' });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      const subject = encodeURIComponent(form.subject || `Portfolio enquiry from ${form.name}`);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      setFormStatus({ type: 'info', text: 'Opening your email app so you can send the message.' });
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="site-header">
        <a href="#home" className="brand" onClick={closeMenu}><span className="brand-mark">AJ</span><span>Aniket<span className="brand-dot">.</span></span></a>
        <button className="mobile-menu" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {[['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Education', '#education'], ['Contact', '#contact']].map(([label, href]) =>
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          )}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-wrap">
          <div className="hero-copy">
            <div className="availability-pill"><span className="status-dot" /> OPEN TO OPPORTUNITIES</div>
            <p className="hero-intro">Hi, I'm <span className="gradient-text">Aniket Jadhav</span></p>
            <h1>I build things<br />for the <span className="hero-outline">web.</span></h1>
            <p className="hero-description">Java Full Stack Developer focused on building reliable backend systems and clean, responsive user experiences.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a>
              <a className="button button-ghost" href="/Aniket-Jadhav-Resume.pdf" download><Download size={17} /> Download resume</a>
            </div>
            <div className="hero-socials">
              <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
              <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href={`mailto:${email}`} aria-label="Email"><Mail size={18} /></a>
              <span className="social-divider" /><span className="social-caption">Based in India · Available for roles</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Developer-themed illustration">
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="hero-glow" />
            <div className="code-window">
              <div className="window-bar"><div className="window-dots"><i /><i /><i /></div><span>developer.java</span><span className="window-menu">•••</span></div>
              <div className="code-content">
                <div><span className="line-number">01</span><span className="code-purple">public class</span> <span className="code-blue">Developer</span> {'{'}</div>
                <div><span className="line-number">02</span> &nbsp; <span className="code-purple">String</span> name = <span className="code-green">"Aniket"</span>;</div>
                <div><span className="line-number">03</span> &nbsp; <span className="code-purple">String</span> role = <span className="code-green">"Java Dev"</span>;</div>
                <div><span className="line-number">04</span> &nbsp; <span className="code-purple">boolean</span> curious = <span className="code-orange">true</span>;</div>
                <div className="code-gap"><span className="line-number">05</span></div>
                <div><span className="line-number">06</span> &nbsp; <span className="code-purple">void</span> <span className="code-blue">build</span>() {'{'}</div>
                <div><span className="line-number">07</span> &nbsp; &nbsp; <span className="code-comment">// ideas into reality</span></div>
                <div><span className="line-number">08</span> &nbsp; {'}'}</div>
                <div><span className="line-number">09</span>{'}'}<span className="cursor-blink">_</span></div>
              </div>
              <div className="code-footer"><span><span className="tiny-green" /> Java</span><span>UTF-8</span><span>Ln 09, Col 2</span></div>
            </div>
            <div className="float-card float-card-top"><span className="float-icon purple"><Code2 size={17} /></span><div><strong>Clean code</strong><small>Built with purpose</small></div></div>
            <div className="float-card float-card-bottom"><span className="float-icon blue"><Database size={17} /></span><div><strong>Full stack</strong><small>Frontend to database</small></div></div>
            <div className="hero-art-caption"><Sparkles size={14} /> Curious mind. Practical builder.</div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section id="about" className="section-wrap section-block">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Code with purpose." accent="Grow with curiosity." />
          <div className="about-grid">
            <div className="about-copy reveal">
              <p className="large-copy">I'm a Computer Science graduate who enjoys turning complex problems into <span className="text-bright">simple, useful software.</span></p>
              <p>My focus is Java-based application development, building REST APIs with Spring Boot, working with relational databases, and creating responsive interfaces with React. I enjoy learning by building projects and improving them one iteration at a time.</p>
              <p>I'm looking for an opportunity to contribute to a collaborative engineering team, learn from experienced developers, and build software that solves real problems.</p>
              <a href="#contact" className="text-link">Let's build something useful <ArrowRight size={16} /></a>
            </div>
            <div className="about-stats reveal">
              <div className="stat-card"><span className="stat-icon"><GraduationCap size={19} /></span><strong>B.Tech</strong><span>Computer Science & Engineering</span></div>
              <div className="stat-card"><span className="stat-icon"><Code2 size={19} /></span><strong>Java-first</strong><span>Backend & full-stack development</span></div>
              <div className="stat-card"><span className="stat-icon"><Sparkles size={19} /></span><strong>Always learning</strong><span>Curiosity-driven problem solving</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-wrap section-block">
          <SectionHeading eyebrow="MY TOOLKIT" title="Skills that turn" accent="ideas into software." />
          <p className="section-lead reveal">The tools I use to design, build, connect, and improve applications.</p>
          <div className="skills-grid">
            {skills.map(({ title, icon: Icon, items }, index) => <article className="skill-card reveal" style={{ '--delay': `${index * 90}ms` }} key={title}>
              <div className="skill-card-head"><span className="skill-icon"><Icon size={20} /></span><span className="skill-index">0{index + 1}</span></div>
              <h3>{title}</h3><div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div>
            </article>)}
          </div>
        </section>

        <section id="projects" className="section-wrap section-block">
          <SectionHeading eyebrow="SELECTED WORK" title="Projects built to" accent="solve real problems." />
          <div className="projects-list">
            {projects.map(project => {
              const Icon = project.icon;
              return <article className={`project-card reveal ${project.featured ? 'project-featured' : ''}`} key={project.number}>
                <div className="project-visual">
                  <div className="project-visual-grid" />
                  <div className="project-emblem"><Icon size={42} strokeWidth={1.25} /></div>
                  <span className="project-visual-label">{project.category}</span>
                  <span className="project-number">{project.number}</span>
                </div>
                <div className="project-info">
                  <span className="eyebrow">{project.category}</span><h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
                  <a className="project-link" href={project.github} target="_blank" rel="noreferrer">View on GitHub <ExternalLink size={15} /></a>
                </div>
              </article>;
            })}
          </div>
          <p className="project-note"><span className="note-dot" /> Project links are placeholders—replace them with your actual repositories before publishing.</p>
        </section>

        <section id="education" className="section-wrap section-block">
          <SectionHeading eyebrow="THE FOUNDATION" title="Learning is a" accent="continuous process." />
          <div className="timeline-grid">
            <div className="timeline-column reveal">
              <h3 className="column-title"><GraduationCap size={18} /> Education</h3>
              <div className="timeline-item"><span className="timeline-dot" /><span className="timeline-date">2021 — 2025</span><h4>B.Tech — Computer Science & Engineering</h4><p>CSMSS Chh. Shahu College of Engineering</p><span className="timeline-meta">Chhatrapati Sambhajinagar, Maharashtra</span></div>
              <div className="timeline-item"><span className="timeline-dot" /><span className="timeline-date">Professional Training</span><h4>Java Full Stack Development</h4><p>CDAC — IACSD, Pune</p><span className="timeline-meta">Java · Spring Boot · React · SQL</span></div>
            </div>
            <div className="timeline-column reveal">
              <h3 className="column-title"><Sparkles size={18} /> Certifications</h3>
              {certifications.map((cert, i) => <div className="cert-row" key={cert.name + cert.issuer}><span className="cert-number">0{i + 1}</span><div><h4>{cert.name}</h4><p>{cert.issuer}</p></div><span className="cert-note">{cert.note}</span></div>)}
            </div>
          </div>
        </section>

        <section id="contact" className="section-wrap section-block contact-section">
          <SectionHeading eyebrow="GET IN TOUCH" title="Have an opportunity?" accent="Let's talk." />
          <div className="contact-grid">
            <div className="contact-copy reveal">
              <p className="large-copy">I'm open to junior developer roles, collaborative projects, and conversations about building great software.</p>
              <p>Have a role in mind or want to connect? Send a message. I'll be glad to hear from you.</p>
              <a className="contact-email" href={`mailto:${email}`}><span className="contact-email-icon"><Mail size={18} /></span><span><small>EMAIL ME AT</small><strong>{email}</strong></span><ArrowUpRight size={18} /></a>
              <div className="contact-socials"><a href={github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><a href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a></div>
            </div>
            <form className="contact-form reveal" onSubmit={submitContact}>
              <div className="form-row"><label>Your name<input name="name" value={form.name} onChange={onChange} placeholder="Jane Smith" required minLength="2" /></label><label>Email address<input type="email" name="email" value={form.email} onChange={onChange} placeholder="jane@company.com" required /></label></div>
              <label>Subject<input name="subject" value={form.subject} onChange={onChange} placeholder="Let's work together" required /></label>
              <label>Message<textarea name="message" value={form.message} onChange={onChange} placeholder="Tell me a little about your opportunity..." rows="5" required minLength="10" /></label>
              <button className="button button-primary submit-button" type="submit" disabled={sending}>{sending ? 'Sending...' : 'Send message'} <Send size={16} /></button>
              {formStatus.text && <p className={`form-status ${formStatus.type}`}>{formStatus.type === 'success' && <CheckCircle2 size={16} />}{formStatus.text}</p>}
              <p className="form-privacy">Your details are used only to respond to your message.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a href="#home" className="brand"><span className="brand-mark">AJ</span><span>Aniket<span className="brand-dot">.</span></span></a>
        <span>Designed & built with curiosity.</span>
        <a href="#home" className="back-top">Back to top ↑</a>
        <span className="copyright">© {new Date().getFullYear()} Aniket Jadhav</span>
      </footer>
    </>
  );
}

export default App;
