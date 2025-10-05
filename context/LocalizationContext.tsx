
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'ur';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Header
  home: { en: 'Home', ur: 'صفحہ اول' },
  about: { en: 'About', ur: 'ہمارے بارے میں' },
  programs: { en: 'Programs', ur: 'پروگرام' },
  donate: { en: 'Donate', ur: 'عطیہ کریں' },
  volunteer: { en: 'Volunteer', ur: 'رضاکار' },
  events: { en: 'Events', ur: 'تقریبات' },
  news: { en: 'News', ur: 'خبریں' },
  impact: { en: 'Impact', ur: 'اثرات' },
  contact: { en: 'Contact', ur: 'رابطہ' },
  getInvolved: { en: 'Get Involved', ur: 'شامل ہوں' },

  // Hero
  heroTitle: { en: 'Empowering communities in Pakistan to thrive', ur: 'پاکستان میں کمیونٹیز کو بااختیار بنانا' },
  heroSubtitle: { en: 'We provide education, healthcare, and livelihoods to underserved families.', ur: 'ہم غیر محفوظ خاندانوں کو تعلیم، صحت اور روزگار فراہم کرتے ہیں۔' },
  donateNow: { en: 'Donate Now', ur: 'ابھی عطیہ کریں' },

  // Impact Numbers
  beneficiaries: { en: 'Beneficiaries Served', ur: 'مستفید کنندگان' },
  projects: { en: 'Projects Completed', ur: 'مکمل منصوبے' },
  fundsRaised: { en: 'Funds Raised', ur: 'جمع شدہ فنڈز' },

  // Other
  featuredProgram: { en: 'Featured Program', ur: 'نمایاں پروگرام' },
  latestNews: { en: 'Latest News & Events', ur: 'تازہ ترین خبریں اور تقریبات' },
  ourMission: { en: 'Our Mission', ur: 'ہمارا مشن' },
  ourTeam: { en: 'Our Team', ur: 'ہماری ٹیم' },
  ourPrograms: { en: 'Our Programs', ur: 'ہمارے پروگرام' },
  upcomingEvents: { en: 'Upcoming Events', ur: 'آنے والی تقریبات' },
  contactUs: { en: 'Contact Us', ur: 'ہم سے رابطہ کریں' },
  fullName: { en: 'Full Name', ur: 'پورا نام' },
  emailAddress: { en: 'Email Address', ur: 'ای میل اڈریس' },
  message: { en: 'Message', ur: 'پیغام' },
  submit: { en: 'Submit', ur: 'جمع کرائیں' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ur' : 'en'));
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLocalization = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLocalization must be used within a LanguageProvider');
  }
  return context;
};
