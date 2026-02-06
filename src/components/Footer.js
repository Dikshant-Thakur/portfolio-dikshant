import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Fade from "../components/animations/Fade"
import "../css/resume.scss"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
// Icon import kar rahe hain
import { FaDownload } from "react-icons/fa"

const ResumeContent = () => {
  const { language } = useLanguage();
  
  // Google Drive File ID (Jo tumhare link mein 'd/' ke baad tha)
  // Maine tumhare link se ID nikal li hai: "1p8jaOpyaeOmtPBCX8BgHewX8gFHLsNdf"
  const fileId = "1p8jaOpyaeOmtPBCX8BgHewX8gFHLsNdf";

  // Do alag links banaaye - Ek dikhane ke liye, ek download ke liye
  const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  
  const resumeTitle = getText(data.nav.resume, language);

  return (
    <div className="section" id="resume">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>{resumeTitle}</h1>
        </Fade>

        {/* Download Button Section */}
        <Fade bottom duration={1000} distance="20px">
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <a 
              href={downloadUrl} 
              className="btn btn-primary" // Bootstrap classes ya tumhari custom CSS class
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 20px",
                backgroundColor: "#333", // Apne theme ke hisab se change kar lena
                color: "#fff",
                textDecoration: "none",
                borderRadius: "5px",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              <FaDownload /> Download Resume
            </a>
          </div>
        </Fade>

        {/* Resume Preview */}
        <Fade bottom duration={1000} distance="20px">
          <div className="resume-container" style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", maxWidth: "100%", background: "#f0f0f0" }}>
            <iframe 
              src={previewUrl} 
              allow="autoplay" 
              className="Resume" 
              title={resumeTitle}
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            >
              {resumeTitle}
            </iframe>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default function Resume() {
  return (
    <div>
      <Layout>
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <SEO title="Resume" />
        <ResumeContent />
      </Layout>
    </div>
  )
}