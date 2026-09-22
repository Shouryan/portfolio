import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Github, Linkedin, Mail, Moon, Sun, Code2, Cloud, Server, Sparkles, Phone } from 'lucide-react';
import './styles.css';
import profileImg from './profile.png';

const skills = ['Java 21', 'Spring Boot', 'Microservices', 'REST APIs', 'AWS', 'Docker', 'Kubernetes', 'OpenShift', 'Maven', 'Jenkins', 'JUnit 5', 'DB2'];

function App() {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#111210' : '#f4f1ea');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <div className="site-shell">
      <header className="nav">
        <a className="wordmark" href="#top"><span className="wordmark-badge">SS</span></a>
        <nav>
          <a href="#work">Work</a>
          <a href="#stack">Stack</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle theme">
          {dark ? <Sun size={17}/> : <Moon size={17}/>}
        </button>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-top">
            <img src={profileImg} alt="Shouryan Sood" className="avatar" />
            <div className="eyebrow"><span className="pulse"></span> SOFTWARE DEVELOPMENT ENGINEER · INDIA</div>
          </div>
          <h1>Building backend systems<br/><em>made to last.</em></h1>
          <p className="hero-copy">
            Java backend engineer focused on enterprise application modernization,
            Spring Boot, microservices and cloud-native delivery.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore my work <ArrowUpRight size={17}/></a>
            <a className="button secondary" href="#contact">Get in touch</a>
          </div>
          <div className="hero-meta">
            <span><span className="accent-text">3+</span> years engineering experience</span>
            <span>Java · Spring · Cloud</span>
          </div>
        </section>

        <section className="statement section">
          <div className="section-label">01 / PROFILE</div>
          <div>
            <p className="statement-text">
              I work at the intersection of <strong>legacy systems and modern engineering</strong> —
              upgrading enterprise Java applications, improving delivery pipelines and moving workloads
              toward contemporary runtime and container platforms.
            </p>
          </div>
        </section>

        <section id="work" className="section">
          <div className="section-heading">
            <div className="section-label">02 / SELECTED WORK</div>
            <span className="muted">Experience & impact</span>
          </div>

          <article className="project featured">
            <div className="project-index">01</div>
            <div className="project-content">
              <div className="project-kicker">ENTERPRISE MODERNIZATION</div>
              <h2>Java 8 → <span className="accent-text">Java 21</span></h2>
              <p>
                Modernization work across a multimodule enterprise application:
                dependency remediation, Java runtime upgrades, testing, CI/CD and
                preparation for containerized/OpenShift deployment.
              </p>
              <div className="tags"><span>Java 21</span><span>Spring</span><span>Maven</span><span>Docker</span><span>OpenShift</span></div>
            </div>
            <div className="project-icon"><Code2 size={30}/></div>
          </article>

          <div className="project-grid">
            <article className="project">
              <div className="project-index">02</div>
              <div className="project-icon"><Server size={25}/></div>
              <div className="project-kicker">BACKEND ENGINEERING</div>
              <h3>Enterprise services</h3>
              <p>Java, Spring, REST services, DB2, MQ and multi-module Maven architecture in a production enterprise environment.</p>
              <div className="tags"><span>Java</span><span>Spring</span><span>DB2</span><span>MQ</span></div>
            </article>
            <article className="project">
              <div className="project-index">03</div>
              <div className="project-icon"><Cloud size={25}/></div>
              <div className="project-kicker">CLOUD & DELIVERY</div>
              <h3>Container-ready delivery</h3>
              <p>Hands-on exposure across Docker, Kubernetes, AWS and the transition from traditional server deployment toward OpenShift.</p>
              <div className="tags"><span>AWS</span><span>Docker</span><span>Kubernetes</span><span>OpenShift</span></div>
            </article>
          </div>
        </section>

        <section id="stack" className="section stack-section">
          <div className="section-heading">
            <div className="section-label">03 / TOOLKIT</div>
            <span className="muted">Technologies I work with</span>
          </div>
          <div className="skill-cloud">
            {skills.map((s, i) => <span key={s} className={i === 0 ? 'accent-skill' : ''}>{s}</span>)}
          </div>
        </section>

        <section id="about" className="section about-grid">
          <div>
            <div className="section-label">04 / ABOUT</div>
            <h2>Engineer. Modernizer.<br/><em>Continuous learner.</em></h2>
          </div>
          <div className="about-copy">
            <p>
              My core strength is backend engineering with Java and Spring. I have worked on
              production enterprise systems, multimodule applications, automated testing and
              application modernization.
            </p>
            <p>
              I also use AI-assisted development tools to accelerate refactoring, testing and
              learning — while keeping engineering decisions grounded in maintainability and production constraints.
            </p>
            <a className="text-link" href="#contact">Let's connect <ArrowUpRight size={16}/></a>
          </div>
        </section>

        <section className="impact section">
          <div className="impact-card accent">
            <Sparkles size={20}/>
            <div><strong className="accent-text">Production impact</strong><span>Contributed to a successful production deployment tied to significant business value.</span></div>
          </div>
          <div className="impact-card">
            <Code2 size={20}/>
            <div><strong>Testing mindset</strong><span>Experience with JUnit and high-coverage enterprise test suites.</span></div>
          </div>
          <div className="impact-card">
            <Cloud size={20}/>
            <div><strong>Modern delivery</strong><span>Moving from traditional application-server deployment toward containers and OpenShift.</span></div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="section-label">05 / CONTACT</div>
          <h2>Have a system to<br/><em>build or modernize?</em></h2>
          <p>I'm open to backend engineering opportunities, interesting technical problems and conversations about modernizing enterprise systems.</p>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/shouryan-sood-b82208190/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={15}/></a>
            <a href="https://github.com/Shouryan" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={15}/></a>
            <a href="mailto:shouryansood07@gmail.com"><Mail size={17}/> Email <ArrowUpRight size={15}/></a>
            <a href="tel:+917976146429"><Phone size={17}/> Call <ArrowUpRight size={15}/></a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Shouryan Sood</span>
        <span>Designed & engineered with intent.</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
