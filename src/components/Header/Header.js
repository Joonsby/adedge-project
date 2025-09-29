import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import './Header.css';

const Header = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
      if (window.innerWidth > 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavMouseEnter = () => {
    if (!isMobile) {
      setShowSubmenu(true);
    }
  };

  const handleNavMouseLeave = () => {
    if (!isMobile) {
      setShowSubmenu(false);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <header className="pof width-100 flex">
      <div className="logo dib">
        <a href="/" className="color-black">(주)그린미디어허브</a>
      </div>
      
      {!isMobile && (
        <>
          <nav 
            className="dib poa width-60" 
            onMouseEnter={handleNavMouseEnter}
            onMouseLeave={handleNavMouseLeave}
          >
            <ul className="flex main-menu">
              <li><a href="#" className="show">홈</a></li>
              <li><a href="#" className="show">제품소개</a></li>
              <li><a href="#" className="show">특장점</a></li>
              <li><a href="#" className="show">가격정책</a></li>
              <li><a href="#" className="show">광고신청</a></li>
            </ul>
          </nav>

          {showSubmenu && (
            <div 
              id="all-submenu" 
              className="poa width-100"
              onMouseEnter={() => setShowSubmenu(true)}
              onMouseLeave={handleNavMouseLeave}
            >
              <div className="flex width-60">
                <ul className="width-100">
                  <li className="por"><a href="#">회사개요</a></li>
                  <li className="por"><a href="#">사업개요</a></li>
                  <li className="por"><a href="#">조직구조</a></li>
                  <li className="por"><a href="#">주요 협력사&고객사</a></li>
                </ul>
                <ul className="width-100">
                  <li className="por"><a href="#">헬스케어솔루션</a></li>
                  <li className="por"><a href="#">친환경스마트박스</a></li>
                  <li className="por"><a href="#">IPTV/케이블광고</a></li>
                </ul>
                <ul className="width-100">
                  <li className="por"><a href="#">차별화/경쟁력</a></li>
                  <li className="por"><a href="#">성과/추진현황</a></li>
                </ul>
                <ul className="width-100">
                  <li className="por"><a href="#">헬스케어솔루션 광고</a></li>
                  <li className="por"><a href="#">친환경스마트박스 광고</a></li>
                </ul>
                <ul className="width-100">
                  <li className="por"><a href="#">헬스케어솔루션 광고</a></li>
                  <li className="por"><a href="#">친환경스마트박스 광고</a></li>
                  <li className="por"><a href="#">광고신청방법</a></li>
                </ul>
              </div>
            </div>
          )}

          <ul id="right-menu" className="flex">
            <li style={{display: 'none'}}><a href="#">MY페이지</a></li>
            <li><a href="/login">로그인</a></li>
            <li><a href="#">회원가입</a></li>
          </ul>
        </>
      )}

      {isMobile && (
        <div id="hamburger-menu" onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}

      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
    </header>
  );
};

export default Header;