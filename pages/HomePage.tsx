
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocalization } from '../context/LocalizationContext';
import { Button, Card } from '../components/UI';
import { programs, newsArticles, events } from '../data/mockData';

const Hero: React.FC = () => {
    const { t } = useLocalization();
    return (
        <section className="relative bg-cover bg-center text-white" style={{ backgroundImage: 'url(https://picsum.photos/seed/hero/1600/900)' }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">{t('heroTitle')}</h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">{t('heroSubtitle')}</p>
                <div className="mt-8 flex justify-center gap-4">
                    <NavLink to="/donate"><Button variant="secondary">{t('donateNow')}</Button></NavLink>
                    <NavLink to="/volunteer"><Button variant="ghost" className="bg-white/20 hover:bg-white/30 text-white">{t('getInvolved')}</Button></NavLink>
                </div>
            </div>
        </section>
    );
};

const ImpactNumbers: React.FC = () => {
    const { t } = useLocalization();
    const stats = [
        { label: t('beneficiaries'), value: '50,000+' },
        { label: t('projects'), value: '200+' },
        { label: t('fundsRaised'), value: '$2M+' },
    ];
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {stats.map(stat => (
                        <div key={stat.label}>
                            <p className="text-4xl font-bold text-primary">{stat.value}</p>
                            <p className="mt-2 text-neutral-dark font-semibold">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeaturedProgram: React.FC = () => {
    const { t, language } = useLocalization();
    const featured = programs[0];
    return (
        <section className="py-16 bg-neutral-light">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8">{t('featuredProgram')}</h2>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white shadow-xl rounded-lg overflow-hidden">
                   <img src={featured.imageUrl} alt={featured.title[language]} className="w-full h-full object-cover" />
                   <div className="p-8">
                       <h3 className="text-2xl font-bold text-primary">{featured.title[language]}</h3>
                       <p className="mt-4 text-neutral-dark">{featured.summary[language]}</p>
                       <NavLink to="/programs" className="mt-6 inline-block">
                           <Button variant="primary">Learn More</Button>
                       </NavLink>
                   </div>
                </div>
            </div>
        </section>
    );
};

const LatestNews: React.FC = () => {
    const { t, language } = useLocalization();
    const latestNews = newsArticles.slice(0, 2);
    const latestEvent = events[0];

    return (
        <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">{t('latestNews')}</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {latestNews.map(article => (
                        <Card key={article.id} imageUrl={article.imageUrl} title={article.title[language]} linkTo="/news">
                            <p className="text-sm text-neutral-DEFAULT mb-2">{article.publishDate}</p>
                            <p className="text-neutral-dark">{article.summary[language]}</p>
                        </Card>
                    ))}
                    <Card className="bg-primary text-white" imageUrl={latestEvent.imageUrl} title={latestEvent.title[language]} linkTo="/events">
                         <p className="text-sm mb-2">{latestEvent.date} - {latestEvent.location}</p>
                         <p>{latestEvent.summary[language]}</p>
                    </Card>
                </div>
            </div>
        </section>
    );
};


const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <ImpactNumbers />
            <FeaturedProgram />
            <LatestNews />
        </>
    );
};

export default HomePage;
