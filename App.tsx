
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider, useLocalization } from './context/LocalizationContext';
import { Header, Footer } from './components/Layout';
import HomePage from './pages/HomePage';
import { AboutPage, ProgramsPage, DonatePage, VolunteerPage, EventsPage, ContactPage, NewsPage, ImpactPage } from './pages/OtherPages';

const AppContent: React.FC = () => {
    const { language } = useLocalization();

    return (
        <div dir={language === 'ur' ? 'rtl' : 'ltr'}>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/programs" element={<ProgramsPage />} />
                    <Route path="/donate" element={<DonatePage />} />
                    <Route path="/volunteer" element={<VolunteerPage />} />
                    <Route path="/events" element={<EventsPage />} />
                    <Route path="/news" element={<NewsPage />} />
                    <Route path="/impact" element={<ImpactPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

const App: React.FC = () => {
    return (
        <LanguageProvider>
            <HashRouter>
                <AppContent />
            </HashRouter>
        </LanguageProvider>
    );
};

export default App;
