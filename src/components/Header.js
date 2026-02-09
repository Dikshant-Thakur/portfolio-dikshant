import React, { useEffect, useState } from "react"
import Fade from "./animations/Fade"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
import { Typewriter } from "react-simple-typewriter"

// Dhumdhaam se dono photos import karein
import imgUrl from "../images/headerphoto2.jpeg"      // Desktop wali
import mobileImgUrl from "../images/mobile_robot.png" // Mobile wali (Yahan apna file name check karein)

const Header = () => {
  const { language } = useLanguage();
  const [isLandscape, setIsLandscape] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                 (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      setIsIOS(iOS);
      
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i.test(userAgent);
      setIsDesktop(!isMobile);
      
      setIsLandscape(window.innerWidth > window.innerHeight);
      
      const handleResize = () => {
        setIsLandscape(window.innerWidth > window.innerHeight);
        setIsDesktop(window.innerWidth >= 1024);
      };

      try {
        window.addEventListener("resize", handleResize);
      } catch (error) {
        console.warn('Error adding resize listener:', error);
      }
      handleResize();
      
      return () => {
        try {
          window.removeEventListener("resize", handleResize);
        } catch (error) {
          console.warn('Error removing resize listener:', error);
        }
      };
    }
  }, []);

  const italianRoles = [
    "Ingegnere Robotico", "Ingegnere dell'Automazione Industriale", "Sviluppatore di Simulazioni", 
    "Calciatore", "Giocatore di Cricket", "Corridore", "Appassionato di Viaggi", "Beatboxer", "Giocatore di Ping Pong"
  ];

  const englishRoles = [
    "Robotics Engineer", "Industrial Automation Engineer", "Simulation Developer", 
    "Football Player", "Cricket Player", "Runner", "Travel Enthusiast", "Beatboxer", "Table Tennis Player"
  ];

  // --- LOGIC: Screen ke hisaab se photo choose karo ---
  // Agar Desktop hai to 'imgUrl', agar mobile hai to 'mobileImgUrl'
  const currentBackground = isDesktop ? imgUrl : mobileImgUrl;

  if (isIOS) {
    return (
      <div className="section" id="home">
        <div className="container">
          <div className="header-wrapper ios-device">
            <div 
              className="ios-background" 
              style={{
                // iOS ke liye bhi same logic
                backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(${mobileImgUrl})`,
              }}
            />
            <div className="content-wrapper">
              <Fade bottom>
                <h2>{getText({ en: "Hi, I am", it: "Ciao, sono" }, language)} {getText(data.name, language)}{" "}</h2>
              </Fade>
              <Fade bottom>
                <div className="heading-wrapper">
                  <h1>
                    {/* {getText({ en: "I am a", it: "Sono un" }, language)}{" "}
                    <span style={{ color: "#2FF3E0", fontWeight: "700" }}>
                      <Typewriter loop cursor cursorStyle="_" typeSpeed={70} deleteSpeed={50} delaySpeed={1200} words={language === 'it' ? italianRoles : englishRoles} />
                    </span> */}
                    <span className="gradient-text">
                      <Typewriter
                        loop
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1200}
                        words={language === 'it' ? italianRoles : englishRoles}
                      />
                    </span>
                  </h1>
                </div>
              </Fade>
              <Fade bottom><p>{getText(data.headerParagraph, language)}</p></Fade>
              <Fade bottom>
                <a href={`https://www.linkedin.com/in/dikshantthakur/`} className="primary-btn">
                  {getText({ en: "CONNECT WITH ME!", it: "CONTATTAMI!" }, language)}
                </a>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section" id="home">
      <div className="container">
        <div 
          className={`header-wrapper ${isLandscape ? 'landscape' : 'portrait'} ${isDesktop ? 'desktop' : 'mobile'}`}
          style={{
            // YAHAN MAGIC HOGA: Background image change hogi variable ke hisaab se
            backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(${currentBackground})`,
          }}
        >
          <Fade bottom>
            <h2>{getText({ en: "Hi, I am", it: "Ciao, sono" }, language)} {getText(data.name, language)}{" "}</h2>
          </Fade>
          <Fade bottom>
            <div className="heading-wrapper">
              <h1>
                {getText({ en: "I am a", it: "Sono un" }, language)}{" "}
                <span style={{ color: "#00B4D8"}}>
                  <Typewriter loop cursor cursorStyle="_" typeSpeed={70} deleteSpeed={50} delaySpeed={1200} words={language === 'it' ? italianRoles : englishRoles} />
                </span>
              </h1>
            </div>
          </Fade>
          <Fade bottom><p>{getText(data.headerParagraph, language)}</p></Fade>
          <Fade bottom>
            <a href={`https://www.linkedin.com/in/dikshantthakur/`} className="primary-btn">
              {getText({ en: "CONNECT WITH ME!", it: "CONTATTAMI!" }, language)}
            </a>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Header