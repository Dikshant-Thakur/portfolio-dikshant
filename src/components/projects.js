import React, { useState, useEffect } from "react"
import Fade from "./animations/Fade"
import { Carousel, Modal, Button } from "react-bootstrap" // Modal aur Button import kiya
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
import "../styles/projects.scss"

// Images/Videos import
import DigitalTwin from "../images/workPhotos/DigitalTwin.webm"
import autonomous_vehicle from "../images/workPhotos/autonomous_vehicle.webm"
import UVMS from "../images/workPhotos/UVMS.webm"
import ManipTPIK from "../images/workPhotos/ManipulatorsTPIK.webm"
import PLC from "../images/workPhotos/PLC_w_PC.jpg"
import Injection_Molding from "../images/workPhotos/Injection_Molding.jpg"

const Project = () => {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [currentModalData, setCurrentModalData] = useState(null);

  // Media mapping
  const mediaMap = {
    DigitalTwin: DigitalTwin,
    autonomous_vehicle: autonomous_vehicle,
    UVMS: UVMS,
    ManipTPIK: ManipTPIK,
    PLC: PLC,
    Injection_Molding: Injection_Molding
  };

  // Data Process kar rahe hain
  const carouselItems = data.projectsCarouselItems.map(item => ({
    ...item,
    media: mediaMap[item.media],
    modalMedia: item.modalMedia ? mediaMap[item.modalMedia] : null,
    title: getText(item.title, language),
    subtitle: getText(item.subtitle, language),
    description: getText(item.description, language),
    // Detailed description ko bhi translate kar rahe hain agar wo exist karta hai
    detailedDescription: item.detailedDescription 
      ? item.detailedDescription.map(d => getText(d, language))
      : [],
    buttons: item.buttons.map(btn => ({
      ...btn,
      text: getText(btn.text, language)
    }))
  }));

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    try {
      window.addEventListener('resize', checkMobile);
    } catch (error) {
      console.warn('Error adding resize listener:', error);
    }
    return () => {
      try {
        window.removeEventListener('resize', checkMobile);
      } catch (error) {
        console.warn('Error removing resize listener:', error);
      }
    };
  }, []);

  const handleCarouselSelect = (selectedIndex) => {
    try {
      setActiveIndex(selectedIndex);
    } catch (error) {
      console.error('Error in projects carousel selection:', error);
    }
  };

  // Button Click Handler
  const handleButtonClick = (button, item) => {
    if (item.isModal) {
      // Agar isModal true hai, toh popup kholo
      setCurrentModalData(item);
      setShowModal(true);
    } else {
      // Nahi toh purana behavior (new tab open)
      window.open(button.url);
    }
  };

  return (
    <div className="section" id="projects">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>{getText(data.sections.projects, language)}</h1>
        </Fade>
        <div className="project-wrapper">
          <Carousel 
            className="masterCarousel" 
            activeIndex={activeIndex}
            onSelect={handleCarouselSelect}
            touch={true} 
            interval={3000}
            indicators={!isMobile}
            controls={true}
            keyboard={false}
            slide={true}
            wrap={true}
            variant="dark"
          >
              {carouselItems.map((item, index) => (
                <Carousel.Item key={index}>
                  {item.type === 'video' ? (
                    <div className="video-container">
                      <video
                        className="d-block"
                        src={item.media}
                        autoPlay
                        muted
                        loop
                        playsInline
                        loading="lazy"
                        preload="metadata"
                      />
                    </div>
                  ) : (
                    <img
                      className="d-block w-100"
                      src={item.media}
                      alt={item.title}
                      loading="lazy"
                    />
                  )}
                  <Carousel.Caption className="carouselCaption">
                    <h3>{item.title}</h3>
                    <h4>{item.subtitle}</h4>
                    <p>{item.description}</p>
                    {item.buttons.map((button, buttonIndex) => (
                      <button
                        key={buttonIndex}
                        // Yahan humne click handler change kiya hai
                        onClick={() => handleButtonClick(button, item)}
                        type="button"
                        className="btn"
                      >
                        {button.text}
                      </button>
                    ))}
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
      </div>

      {/* Modal / Popup Component */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)}
        size="lg"
        centered
        className="project-modal" // Aap SCSS mein styling add kar sakte hain
      >
        {currentModalData && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{currentModalData.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div style={{ marginBottom: '20px' }}>
                {/* Logic: Check karo ki Modal ke liye alag media hai ya nahi */}
                {(currentModalData.modalMedia || currentModalData.media) && (
                  <>
                    {/* Check karo ki wo Video hai ya Image */}
                    {(currentModalData.modalType === 'video') ? (
                        <video 
                          src={currentModalData.modalMedia || currentModalData.media} 
                          controls 
                          autoPlay 
                          muted 
                          style={{ width: '100%', borderRadius: '8px' }} 
                        />
                    ) : (
                        <img 
                          src={currentModalData.modalMedia || currentModalData.media} 
                          alt={currentModalData.title} 
                          style={{ width: '100%', borderRadius: '8px' }} 
                        />
                    )}
                  </>
                )}
              </div>
              
              {/* Description Points */}
              <div className="modal-description">
                {currentModalData.detailedDescription && currentModalData.detailedDescription.length > 0 ? (
                  <ul>
                    {currentModalData.detailedDescription.map((point, i) => (
                      <li key={i} style={{ marginBottom: '10px' }}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{currentModalData.description}</p>
                )}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                {language === 'it' ? 'Chiudi' : 'Close'}
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  )
}

export default Project