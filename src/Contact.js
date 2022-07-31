import React from "react";
import linkedInLogo from "./assets/linkedin-logo.png";
import gitHubLogo from "./assets/github-logo.png";
import mediumLogo from "./assets/medium-logo.png";
import mailIcon from "./assets/mail-logo.png";

const Contact = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div id="contact-links">
        <div className="contact-group">
          <div className="contact-link">
            <button>
              <img
                src={linkedInLogo}
                onClick={() =>
                  openInNewTab("https://www.linkedin.com/in/jeremyw00d/")
                }
                alt="Check out my LinkedIn."
              />
            </button>
            <p>LinkedIn</p>
          </div>
          <div className="contact-link">
            <button>
              <img
                src={gitHubLogo}
                onClick={() => openInNewTab("https://github.com/J5Wood")}
                alt="Check out my GitHub."
              />
            </button>
            <p>GitHub</p>
          </div>
        </div>
        <div className="contact-group">
          <div className="contact-link">
            <button>
              <img
                src={mediumLogo}
                onClick={() => openInNewTab("https://jwood206.medium.com/")}
                alt="Check out my blog on Medium"
              />
            </button>
            <p>Medium</p>
          </div>
          <div className="contact-link">
            <button>
              <img
                src={mailIcon}
                onClick={() =>
                  (window.location.href = "mailto:js.wood206@gmail.com")
                }
                alt="Send me an email."
              />
            </button>
            <p id="email">Js.Wood206@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
