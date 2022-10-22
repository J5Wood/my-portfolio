import React from "react";
import linkedInLogo from "./assets/linkedin-logo.png";
import gitHubLogo from "./assets/github-logo.png";
import mediumLogo from "./assets/medium-logo.png";
import mailIcon from "./assets/mail-logo.png";
import raccoon from "./assets/raccoon.png";

//  ***** add more raccoons!

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
          <div
            className="contact-link"
            onClick={() =>
              openInNewTab("https://www.linkedin.com/in/jeremyw00d/")
            }
          >
            <button>
              <img src={linkedInLogo} alt="Check out my LinkedIn." />
              <div className="raccoon-container raccoon-li">
                <img
                  className="raccoon"
                  src={raccoon}
                  alt="The face of a raccoon"
                />
              </div>
            </button>
            <p>LinkedIn</p>
          </div>
          <div
            className="contact-link"
            onClick={() => openInNewTab("https://github.com/J5Wood")}
          >
            <button>
              <img src={gitHubLogo} alt="Check out my GitHub." />
              <div className="raccoon-container raccoon-gh">
                <img
                  className="raccoon"
                  src={raccoon}
                  alt="The face of a raccoon"
                />
              </div>
            </button>
            <p>GitHub</p>
          </div>
        </div>
        <div className="contact-group">
          <div
            className="contact-link"
            onClick={() => openInNewTab("https://jwood206.medium.com/")}
          >
            <button>
              <img src={mediumLogo} alt="Check out my blog on Medium" />
              <div className="raccoon-container raccoon-med">
                <img
                  className="raccoon"
                  src={raccoon}
                  alt="The face of a raccoon"
                />
              </div>
            </button>
            <p>Medium</p>
          </div>
          <div
            className="contact-link"
            onClick={() =>
              (window.location.href = "mailto:js.wood206@gmail.com")
            }
          >
            <button>
              <img src={mailIcon} alt="Send me an email." />
            </button>
            <p id="email">Js.Wood206@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
