import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-info">
          <div className="footer-logo">(주)그린미디어허브</div>
          <div className="company-info">
            <p>상호: 주식회사 그린미디어허브(Green Media Hub Inc.)</p>
            <p>사업자등록번호: 000-00-00000</p>
            <p>주소: 강원도 영월군</p>
            <p>대표: 이봉재</p>
          </div>
          <div className="contact-info">
            <p>대표번호: 070-7011-5207</p>
            <p>메일주소: 0000@gmediahub.com</p>
          </div>
        </div>
        <div className="copyright">
          &copy; 2025 (주)그린미디어허브. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;