// Skills Icons
import plcIcon from "./images/skillsIcon/PLC.png"
import rosIcon from "./images/skillsIcon/ROS.jpg"
import openCVIcon from "./images/skillsIcon/yolo.webp"
import MobileRoboticsicon from "./images/skillsIcon/mobile-robotics.jpg"
import matlabicon from "./images/skillsIcon/MATLAB.svg"
import pythonicon from "./images/skillsIcon/Python.png"
import C_Icon from "./images/skillsIcon/C_lang.png"
// Social Icon
import githubIcon from "./images/contactIcon/github.svg"
import linkedinIcon from "./images/contactIcon/linkedin.png"


// Company icon
import GodrejVideo from "./images/company/GodrejIntroductionVideo.mp4"
import reckitticon from "./images/company/reckitt.png"
import ReckittBenckiserVideo from "./images/company/ReckkitBenikster.mp4"
import Godrej_me_with_robot from "./images/workPhotos/Godrej_me.jpeg"
import Maruti_Video from "./images/company/Maruti_Video.mp4"



// School images
import Unigelogo from "./images/school/Universityofgenoa.png"
import UPESlogo from "./images/school/UPES.jpg"
import UPESlogo2 from "./images/school/UPESlogo2.png"
import MarutiPhoto from "./images/company/MarutiSuzuki.jpg"
import UnigeUr5e from "./images/school/me_with_ur5e.jpeg"



// Helper function for getting text in current language
export const getText = (textObj, language = 'en') => {
  // If it's already a string, return as-is (backward compatibility)
  if (typeof textObj === 'string') return textObj;
  
  // If it's an object with language keys, return the appropriate language
  if (textObj && typeof textObj === 'object') {
    return textObj[language] || textObj.en || textObj.it || Object.values(textObj)[0] || '';
  }
  
  // Fallback
  return textObj || '';
};

const siteData = {

 
  name: {
    en: "Dikshant Thakur",
    it: "Dikshant Thakur"
  },
 
  headerParagraph: {
    en: "I am a robotics engineering enthusiast passionate about bringing autonomous robots to life, with more than 2 years of experience in the industrial automation field.",
    it: "Sono un appassionato di ingegneria robotica, desideroso di dare vita a robot autonomi e ho più di 2 anni di esperienza nel campo dell'automazione industriale."
  },

  // Navigation labels
  nav: {
    home: { en: "Home", it: "Home" },
    work: { en: "Work", it: "Lavoro" },
    projects: { en: "Projects", it: "Progetti" },
    contact: { en: "Contact", it: "Contatto" },
    resume: { en: "Resume", it: "Curriculum" }
  },

  // Section titles  
  sections: {
    about: { en: "About", it: "Chi sono" },
    // nvidia: { en: "NVIDIA", it: "NVIDIA" },
    publications: { en: "Publications", it: "Pubblicazioni" },
    education: { en: "Education", it: "Istruzione" },
    internships: { en: "Work & Internships", it: "Lavoro & Tirocini" },
    projects: { en: "Projects", it: "Progetti" },
    skills: { en: "Skills", it: "Competenze" },
    contact: { en: "Contact", it: "Contatto" }
  },

  // Button text translations
  buttons: {
    explore: { en: "Explore", it: "Esplora" },
    readMore: { en: "Read More", it: "Leggi di più" },
    close: { en: "Close", it: "Chiudi" }
  },

  contactEmail: "dikshantthakur12@gmail.com",

  education: [
    {
      title: {
        en: "University of Petroleum and Energy Studies",
        it: "University of Petroleum and Energy Studies"
      },
      para: {
        en: "Bachelor of Technology in Mechatronics Engineering",
        it: "Laurea in Tecnologia in Ingegneria Meccatronica"
      },
      imageSrc: UPESlogo2,
      workImg: UPESlogo,
      url: "https://www.upes.ac.in/school-of-advanced-engineering/",
      description: [
        {
          en: "Mechatronics Engineering",
          it: "Ingegneria Meccatronica"
        }
      ],
    },
    {
      title: {
        en: "University of Genoa",
        it: "Università di Genova"
      },
      para: {
        en: "Msc in Robotics engineering (In Progress)",
        it: "Msc in Ingegneria Robotica (In Corso)"
      },
      imageSrc: Unigelogo,
      workImg: UnigeUr5e,
      url: "https://unige.it/",
      description: [

        {
          en: "Learned about advanced robotics concepts including robot kinematics, dynamics, control, perception, and machine learning applications in robotics.",
          it: "Appreso concetti avanzati di robotica, tra cui cinematica, dinamica, controllo, percezione e applicazioni di apprendimento automatico nella robotica."
        },

      ],
    }
  ],

  projects: [
    {
      title: {
        en: "Godrej & Boyce",
        it: "Godrej & Boyce"
      },
      position: {
        en: "Assistant Manager - Godrej & Boyce",
        it: "Assistant Manager - Godrej & Boyce"
      },
      para: {
        en: "Responsible for industrial automation projects in the manufacturing sector.",
        it: "Responsabile dei progetti di automazione industriale nel settore manifatturiero."
      },
      imageSrc:
        GodrejVideo,
      
      url: "/work/godrej/",

      date: "01/2021 - 08/2023 ",

      description: [
        {
          en: 'Managed the full lifecycle of CAPEX projects, from initial requirements gathering and system design to final on-site commissioning',
          it: 'Gestito l\'intero ciclo di vita dei progetti CAPEX, dalla raccolta dei requisiti iniziali e progettazione del sistema fino alla messa in servizio finale in loco'
        },
        {
          en: 'Developed, modified, and debugged complex PLC and HMI programs using Siemens (TIA Portal, WinCC) and Allen-Bradley, ensuring systems met functional specifications and passed FAT/SAT',
          it: 'Sviluppato, modificato e debugged complessi programmi PLC e HMI utilizzando Siemens (TIA Portal, WinCC) e Allen-Bradley, garantendo che i sistemi soddisfacessero le specifiche funzionali e superassero FAT/SAT'
        },
        {
          en: 'Provided technical assistance for industrial systems, performing hardware and software diagnostics to minimize downtime and ensure production continuity.',
          it: 'Fornito assistenza tecnica per sistemi industriali, eseguendo diagnosi hardware e software per ridurre al minimo i tempi di inattività e garantire la continuità della produzione.'
        },
        {
          en: 'Conducted detailed troubleshooting during project execution, ensuring all systems complied with technical documentation and passed rigorous testing.',
          it: 'Condotto un\'analisi approfondita durante l\'esecuzione del progetto, garantendo che tutti i sistemi fossero conformi alla documentazione tecnica e superassero test rigorosi.'
        }
      ],

      workImg:
        Godrej_me_with_robot,
    },
    {
      title: {
        en: "Reckitt Benckiser Italy",
        it: "Reckitt Benckiser Italia"
      },
      position: {
        en: "OT Engineer - Reckitt Benckiser",
        it: "OT  - Reckitt Benckiser"
      },
      para: {
        en: "Responsible for a physical survey of the plant to list all PLCs, HMIs, and SCADA systems, creating a clear map of the network connections.",
        it: "Responsabile di un'indagine fisica dell'impianto per elencare tutti i PLC, gli HMI e i sistemi SCADA, creando una mappa chiara delle connessioni di rete."
      },
      imageSrc:
        ReckittBenckiserVideo ,

      url: "/work/reckitt/",
      
      date: "10/2025 - 11/2025 ",

      description: [
        {
          en: "Carried out a physical survey of the plant to list all PLCs, HMIs, and SCADA systems, creating a clear map of the network connections.",
          it: "Eseguito un'indagine fisica dell'impianto per elencare tutti i PLC, HMI e sistemi SCADA, creando una mappa chiara delle connessioni di rete."
        },
        {
          en: "Checked the existing asset database against the actual hardware installed on the floor, correcting errors to ensure the documentation matched reality.",
          it: "Controllato il database degli asset esistente rispetto all'hardware effettivamente installato sul campo, correggendo errori per garantire che la documentazione corrispondesse alla realtà."
        },
      ],
      
      workImg:
        reckitticon,
    },

    {
      title: {
        en: "Maruti Suzuki India",
        it: "Maruti Suzuki India"
      },
      position: {
        en: "Internship - Maruti Suzuki India",
        it: "Tirocinio - Maruti Suzuki India"
      },
      para: {
        en: "XYZ Internship",
        it: "Tirocinio XYZ"
      },
      
      imageSrc:
        Maruti_Video,
      
      url: "/work/maruti/",

      date: "04/2015 - 06/2015 ",

      description: [
        {
          en: "XYZ",
          it: "XYZ"
        },

      ],
      
      
      workImg:
        MarutiPhoto,
    },


  ],

// About Section --------------
aboutParaOne: {
  en: "I am a robotics engineer student with more than 2 years in Industrial Automation",
          it: "Sono uno studente di ingegneria robotica con più di 2 anni di esperienza in automazione industriale"
},
aboutParaTwo: {
  en: "I am doing my Master's degree (Thesis Completed) from University of Genoa (Italy) and I earned Bachelor's degree in Mechatronics Engineering from the University of Petroleum and Energy Studies (India)",
          it: "Sto conseguendo la laurea magistrale (tesi completata) presso l'Università di Genova (Italia) e ho conseguito la laurea triennale in Ingegneria meccatronica presso l'Università di studi sul petrolio e l'energia (India)."
},
aboutParaThree: {
  en: "When I'm not building technical projects, you can find me hiking, doing running and calisthenics, learning guitar (fingerstyle), doing beatbox and reading something fictional.",
          it: "Quando non sto realizzando progetti tecnici, mi puoi trovare a fare escursioni, a correre e fare ginnastica, a imparare a suonare la chitarra (fingerstyle), a fare beatbox e a leggere qualcosa di narrativo."
},

UnigeTime: {
  en: "2023 to Present",
  it: "Dal 2023 a oggi"
},

UnigeExperience: [
  {
    en: "At Unige -- I need to write something here.",
    it: ",我负责"
  }
],

// NVIDIA Carousel Items
UnigeCarouselItems: [
  {
    media: "Video_of_the_Unige",
    type: 'video',
    title: {
      en: "Title_of_the_Video",
      it: "Titolo_del_Video"
    },
    description: {
      en: "Description of Video",
      it: "Descrizione_del_Video"
    }
  }
],

// Projects Carousel Items
projectsCarouselItems: [
  {
    media: "DigitalTwin",
    type: 'video',
    title: {
      en: "Digital Twin Project",
      it: "Progetto Digital Twin"
    },
    // subtitle: {
    //   en: "Subtitle of Project 1",
    //   it: "Sottotitolo del Progetto 1"
    // },
    description: {
      en: "A digital Twin approach for the monitoring of the floating roof tanks for the oil refinery with UAVs.",
      it: "Un approccio di gemello digitale per il monitoraggio dei serbatoi a tetto galleggiante per la raffineria di petrolio con UAV."
    },
    buttons: [
      {
        text: { en: "Read More", it: "Scopri di più" },
        url: "https://github.com/Dikshant-Thakur/VR_Project.git"
      }
    ]
  },
    {
    media: "autonomous_vehicle",
    type: 'video',
    title: {
      en: "Sense-Plan-Act (Custom Autonomous Vehicle)",
      it: "Progetto Veicolo Autonomo"
    },
    // subtitle: {
    //   en: "Subtitle of Project 1",
    //   it: "Sottotitolo del Progetto 1"
    // },
    description: {
      en: " developed a custom autonomous robot that explores its environment to find and scan all ArUco markers. Using smart planning, it identifies the marker with the lowest ID and automatically navigates back to that specific location.",
      it: "Ha sviluppato un robot autonomo personalizzato che esplora l'ambiente circostante per individuare e scansionare tutti i marker ArUco. Grazie a una pianificazione intelligente, identifica il marker con l'ID più basso e torna automaticamente in quella posizione specifica."
    },
    buttons: [
      {
        text: { en: "Read More", it: "Scopri di più" },
        url: "https://github.com/Dikshant-Thakur/exp_assignment_2.git"
      }
    ]
  }
],


  skills: [
    {
      img: C_Icon,
      para:
        "C, C++, C#, CUDA",
    },
    {
      img: pythonicon,
      para:
        "Python, MATLAB, R",
    },

    {
      img: openCVIcon,
      para:
        "OpenCV, YOLO, Pytorch",
    },
    {
      img: MobileRoboticsicon,
      para:
        "Mobile Robotics, SLAM, Path Planning",
    },
    {
      img: rosIcon,
      para:
        "ROS, ROS2, Gazebo",
    },
    {
      img: matlabicon,
      para:
        "MATLAB, Simulink",
    },
    {
      img: plcIcon,
      para:
        "PLC Programming, Industrial Automation",
    },
    
  ],

  // End Skills Section --------------------------

  //   Contact Section --------------

  contactSubHeading: {
  en: "Let's chat about robots!",
  it: "Parliamo di robot!"
},
  social: [

    { img: githubIcon, 
      url: "https://github.com/Dikshant-Thakur"
    },
    // {
    //   img: googleScholarIcon,
    //   url: "https://scholar.google.com/citations?hl=en&user=0YSkT7UAAAAJ",
    // },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/dikshantthakur/",
    },

  ],

  // End Contact Section ---------------
}

export default siteData;