import React, { useState } from 'react';

const Sidebar = ({ isOpen, onClose }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    {
      title: '홈',
      submenu: ['회사개요', '사업개요', '조직구조', '주요 협력사&고객사']
    },
    {
      title: '제품소개',
      submenu: ['헬스케어솔루션', '친환경스마트박스', 'IPTV케이블광고']
    },
    {
      title: '특장점',
      submenu: ['차별화/경쟁력', '성과', '추진현황']
    },
    {
      title: '가격정책',
      submenu: ['헬스케어솔루션 광고', '친환경 스마트박스 광고']
    },
    {
      title: '광고신청',
      submenu: ['헬스케어솔루션 광고', '친환경스마트박스 광고', '광고신청방법']
    }
  ];

  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.5)',
            zIndex: 9998
          }}
          onClick={handleBackdropClick}
        />
      )}
      <div className={`sidebar-menu ${isOpen ? 'active' : ''}`}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className={`sidebar-item ${activeMenu === index ? 'active' : ''}`}>
              <button 
                className="sidebar-toggle" 
                onClick={() => toggleMenu(index)}
              >
                {item.title} <span className="arrow">&#9660;</span>
              </button>
              <ul className="sidebar-submenu">
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <a href="#" onClick={onClose}>{subItem}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="sidebar-bottom">
          <a href="/login" className="sidebar-login" onClick={onClose}>
            <span className="sidebar-icon">&#128274;</span> 로그인
          </a>
          <a href="#" className="sidebar-signup" onClick={onClose}>
            <span className="sidebar-icon">&#128100;</span> 회원가입
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;