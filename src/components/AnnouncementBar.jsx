import React, { useState, useEffect } from 'react';
import { Truck, ShieldCheck, RefreshCw, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const AnnouncementBar = () => {
  const { t, isRTL } = useLanguage();
  const [mobileIndex, setMobileIndex] = useState(0);

  const icons = [
    <Truck size={14} className="announcement-icon" key="truck" />,
    <ShieldCheck size={14} className="announcement-icon" key="shield" />,
    <RefreshCw size={14} className="announcement-icon" key="refresh" />,
    <Sparkles size={14} className="announcement-icon" key="sparkles" />
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % t.announcements.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [t.announcements.length]);

  return (
    <div className="announcement-bar" role="region" aria-label="Store Announcements">
      <div className="container announcement-bar__inner">
        {/* Desktop 4 Items in one row */}
        <div className="announcement-bar__desktop">
          {t.announcements.map((item, index) => (
            <div key={index} className="announcement-item">
              <span className="announcement-item__icon">{icons[index]}</span>
              <span className="announcement-item__text">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="announcement-bar__mobile">
          <button
            type="button"
            className="announcement-nav"
            onClick={() =>
              setMobileIndex((prev) => (prev - 1 + t.announcements.length) % t.announcements.length)
            }
            aria-label="Previous announcement"
          >
            {isRTL ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
          </button>
          <div className="announcement-item announcement-item--active">
            <span className="announcement-item__icon">{icons[mobileIndex]}</span>
            <span className="announcement-item__text">{t.announcements[mobileIndex].text}</span>
          </div>
          <button
            type="button"
            className="announcement-nav"
            onClick={() =>
              setMobileIndex((prev) => (prev + 1) % t.announcements.length)
            }
            aria-label="Next announcement"
          >
            {isRTL ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
