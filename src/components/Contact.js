import React from 'react';
import '../styles/contact.scss';

// Importing Icons
import mail from '../images/contactIcon/mail.png';
import linkedin from '../images/contactIcon/linkedin.png';
import github from '../images/contactIcon/github.svg';
import gscholar from '../images/contactIcon/gscholar.png';
import devpost from '../images/contactIcon/devpost.png';

const Contact = () => {
  const contacts = [
    { 
      name: 'Email', 
      icon: mail, 
      link: 'mailto:dikshantthakur12@gmail.com', // Apna email yahan update karein
      bg: '#e8f0fe' // Light Blue background
    },
    { 
      name: 'LinkedIn', 
      icon: linkedin, 
      link: 'https://linkedin.com/in/dikshant-thakur', // Apna LinkedIn URL dalein
      bg: '#eef6fc'
    },
    { 
      name: 'GitHub', 
      icon: github, 
      link: 'https://github.com/Dikshant-Thakur', 
      bg: '#f0f0f0'
    },
    // { 
    //   name: 'Scholar', 
    //   icon: gscholar, 
    //   link: 'https://scholar.google.com/', 
    //   bg: '#fff8e1'
    // },
    // { 
    //   name: 'Devpost', 
    //   icon: devpost, 
    //   link: 'https://devpost.com/', 
    //   bg: '#e0f7fa'
    // },
  ];

  return (
    <div className="contact-section">
      <h2 className="section-title">Let's Connect</h2>
      <p className="section-subtitle">Don't forget to smile!</p>
      
      <div className="contact-grid">
        {contacts.map((contact, index) => (
          <a 
            key={index} 
            href={contact.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-card"
            style={{ '--hover-bg': contact.bg }}
          >
            <div className="icon-box">
              <img src={contact.icon} alt={contact.name} />
            </div>
            <span className="contact-name">{contact.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;