// src/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    
    <div className="footer" style={{ marginTop: '10%' }}>
    <div className="footer-content">
      <div className="footer-section about">
        <h1 className="logo-text">Tech2<span>xplore</span></h1>
        <p>Tech2xplore is a Blog Type Web Side.</p>
        <div className="contact">
          <i className="fa fa-phone"> &nbsp; 9328480107</i>
        </div>
        <div className="social">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
        </div>
      </div>
      <div className="footer-section quick-links">
        <h2>QUICK LINKS</h2>
        <ul>
          <a href="/events"><li>Events</li></a>
          <a href="/contact"><li>Contact</li></a>
          <a href="/write-for-us"><li>Write for us</li></a>
          <a href="/terms"><li>Terms and conditions</li></a>
        </ul>
      </div>
      <div className="footer-section contact-form-div">
        <h2>Contact Us</h2>
        <form action="/contact" method="post">
          <div className="mb-3">
            <select name="type" id="type" className="form-select" required style={{ background: '#272727', color: '#6c757d', border: '1px solid #272727', fontFamily: "'Lora', serif" }}>
              <option value="bug_report">Feedback Type ...</option>
              <option value="bug_report">Bug Report</option>
              <option value="general">General</option>
              <option value="feature_request">Feature Request</option>
            </select>
          </div>
          <div className="mb-3">
            <textarea name="message" cols="30" rows="3" className="text-input contact-input" placeholder="Message..." style={{ minWidth: '250px', minHeight: '150px', maxHeight: '200px' }}></textarea>
          </div>
          <button type="submit" name="send-msg-btn" className="send-msg-btn">
            <i className="fa fa-send"></i> Send
          </button>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Footer;
