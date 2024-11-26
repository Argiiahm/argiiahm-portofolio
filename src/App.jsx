import { useState, useEffect } from 'react';
import './App.css';
import myImage from './assets/image/profile.jpeg';
import myImage2 from './assets/image/bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import jsIcon from './assets/image/js.png';
import cssIcon from './assets/image/css.jpg';
import htmlIcon from './assets/image/html.jpg';
import phpicon from './assets/image/phpp.png';
import fluttericon from './assets/image/flutter.jpg';
import ppMe from './assets/image/me.jpeg';
import laravelIcon from './assets/image/laravel.png';
import skilIcon from './assets/image/skils.png';
import reactjs from './assets/image/reactjs.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import p1 from '../src/assets/image/p1.png';
import p2 from '../src/assets/image/p2.png';
import p3 from '../src/assets/image/p3.png';
import p4 from '../src/assets/image/p4.jpg';
import wa from '../src/assets/image/wa.png';
import laz from '../src/assets/image/laz.png';
import ols from '../src/assets/image/ols.png';
import skp from '../src/assets/image/skilup.png';
import marvel from '../src/assets/image/marvel.png';

function App() {

  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (projectId) => {
    setHoveredProject(projectId);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };


  const title = ["Everyone!", "Semua!"];
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33"];
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const typingSpeed = 150;
  const deletingSpeed = 90;
  const delayBetweenWords = 1500;

  useEffect(() => {
    let typingTimeout;

    if (!isDeleting && charIndex < title[currentIndex].length) {
      typingTimeout = setTimeout(() => {
        setCurrentText((prev) => prev + title[currentIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      typingTimeout = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (!isDeleting && charIndex === title[currentIndex].length) {
      typingTimeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % title.length);
      setCurrentColor(colors[(currentIndex + 1) % colors.length]);
    }

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, currentIndex, title, colors]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const [clicks, setClicks] = useState([]);
  const handleHeaderClick = (e) => {
    const newClick = {
      x: e.clientX,
      y: e.clientY,
      id: Date.now(),
    };
    setClicks([...clicks, newClick]);

    setTimeout(() => {
      setClicks((prevClicks) => prevClicks.filter((click) => click.id !== newClick.id));
    }, 500);
  };

  // Logic for showing "Ops! Sedang Maintance" on larger screens
  const isDesktop = window.innerWidth >= 768;

  return (
    <>
      <nav>
        <div className="logo">
          <h1>ArgiiAhm.</h1>
          <hr />
        </div>
        <div className="navbar">
          <ul className={isMenuOpen ? 'active' : ''}>
            <li><a href='public\about.html'>About</a></li>
            <li><a href='public\project.html'>Project</a></li>
            <li><a href='#contactMe'>Contact</a></li>
          </ul>
          <button className="hamburger" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </nav>

      <header id='jelajahi' onClick={handleHeaderClick}>
        <div className="title">
          <h1>Helloo! <br />I'm Argiiahm</h1>
          <p>Helloo <span style={{ color: currentColor }}>{currentText}</span></p>
          <div className="tombol">
            <a href='#jelajahi'><button>Jelajahi</button></a>
            <a href='#contactMe'><button className="tomboldua">Contact Me</button></a>
          </div>
        </div>
        <div className="ply">
          <img src={myImage2} alt="" />
        </div>

        {clicks.map((click) => (
          <div
            key={click.id}
            className="circle"
            style={{ top: `${click.y}px`, left: `${click.x}px` }}
          />
        ))}
      </header>

      <main>
        {isDesktop ? (
          <div className="maintance">
            <h1>Ops! Sedang Maintance</h1>
            <p>Silahkan Download Extensiones Mobile View!</p>
            <a href='https://chromewebstore.google.com/detail/mobile-simulator-responsi/ckejmhbmlajgoklhgbapkiccekfoccmk'>Download Disini!</a>
          </div>
        ) : (
          <>
            <div className="About">
              <div className="foto">
                <img src={ppMe} alt="profile" />
              </div>
              <div className="title_about">
                <p>About Me</p>
                <h1>Just A Dreamer.</h1>
                <h3>Front-End Job Is My Purpose</h3>
                <p className='desk'>
                  saya memiliki impian untuk menciptakan pengalaman pengguna yang luar biasa melalui antarmuka yang menarik dan responsif. Di portofolio ini, saya ingin menunjukkan berbagai proyek yang telah saya kerjakan, mulai dari halaman web statis hingga aplikasi web dinamis, semuanya dengan fokus pada desain yang bersih, fungsionalitas yang optimal, dan pengalaman pengguna yang mulus. <br />
                </p>
                <a href='#project'><button className='btnpro'>Lihat Project</button></a>
              </div>
            </div>

            <div className="iniareaskil">
              <div className="myskils">
                <div className="skil">
                  <h1>Purpose</h1>
                  <hr />
                </div>
                <div className="icon">
                  <div className="bd">
                    <img src={htmlIcon} alt="" />
                    <p>Mempelajari Html</p>
                  </div>
                  <div className="bd">
                    <img src={cssIcon} alt="" />
                    <p>Mempelajari Css</p>
                  </div>
                  <div className="bd">
                    <img src={jsIcon} alt="" />
                    <p>Mempelajari Js</p>
                  </div>
                  <div className="bd">
                    <img src={fluttericon} alt="" />
                    <p>Mempelajari Flutter</p>
                  </div>
                  <div className="bd">
                    <img src={reactjs} alt="" />
                    <p>Mempelajari React Js</p>
                  </div>
                  <div className="bd">
                    <img src={laravelIcon} alt="" />
                    <p>Mempelajari Laravel</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
      {!isDesktop && (
        <section>
          <div className="project" id='project'>
            <h1>Project Saya</h1>
            <img src={p1} alt="" />
            <h3>Portofolio Website</h3>
            <a href="">Lihat</a>
          </div>
          <div className="project2">
            <img src={p4} alt="" />
          </div>
          <div className="projects">
            <div
              className="project3"
              onMouseEnter={() => handleMouseEnter('project1')}
              onMouseLeave={handleMouseLeave}
            >
              <h3>WhatsApp Clone</h3>
              {hoveredProject === 'project1' && (
                <img
                  src={wa}
                  alt="WhatsApp Clone Preview"
                  style={{
                    position: 'absolute',
                    width: '100px',
                    height: '200px',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                  }}
                />
              )}
            </div>


            <div
              className="project3"
              onMouseEnter={() => handleMouseEnter('project2')}
              onMouseLeave={handleMouseLeave}
            >
              <h3>Lazada Clone</h3>
              {hoveredProject === 'project2' && (
                <img
                  src={laz}
                  alt="Lazada Clone Preview"
                  style={{
                    position: 'absolute',
                    width: '200px',
                    height: '100px',
                    top: '50%',
                    left: '50%',
                    filter:'drop-shadow(2px 3px 2px orange)',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                  }}
                />
              )}
            </div>

            <div
              className="project3"
              onMouseEnter={() => handleMouseEnter('olshop')}
              onMouseLeave={handleMouseLeave}
            >
              <h3>Olshop in</h3>
              {hoveredProject === 'olshop' && (
                <img
                  src={ols}
                  alt="Olshop in Preview"
                  style={{
                    position: 'absolute',
                    width: '200px',
                    height: '100px',
                    top: '50%',
                    left: '50%',
                    filter:'drop-shadow(2px 3px 2px orange)',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                  }}
                />
              )}
            </div>
            <div
              className="project3"
              onMouseEnter={() => handleMouseEnter('shopNow')}
              onMouseLeave={handleMouseLeave}
            >
              <h3>SkillUp Learning</h3>
              {hoveredProject === 'shopNow' && (
                <img
                  src={skp}
                  alt="SkillUp"
                  style={{
                    position: 'absolute',
                    width: '100px',
                    height: '200px',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                  }}
                />
              )}
            </div>
            <div
              className="project3"
              onMouseEnter={() => handleMouseEnter('marvel')}
              onMouseLeave={handleMouseLeave}
            >
              <h3>Marvel Stream</h3>
              {hoveredProject === 'marvel' && (
                <img
                  src={marvel}
                  alt="Marvel"
                  style={{
                    position: 'absolute',
                    width: '200px',
                    height: '100px',
                    // border: '1px solid white',
                    top: '50%',
                    filter:'drop-shadow(2px 3px 2px orange)',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                  }}
                />
              )}
            </div>
            <div className="viewall">
            <a href="">Get Source Code <b><br></br>(Coming Soon!)</b></a>
          </div>
          </div>
        </section>
      )}

      {!isDesktop && (
        <form action='https://formspree.io/f/xbljyklj' method='POST' id='contactMe'>
          <div className="contact-me">
            <h2>Contact Me</h2>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </div>
        </form>
      )}
      {!isDesktop && (
        <footer>
          <div className="footer-container">
            <p></p>
            <p>&copy; 2024 Argiahm.</p>
          </div>
        </footer>
      )}
    </>
  );
}

export default App;
