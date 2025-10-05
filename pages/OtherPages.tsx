
import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { Card, Button } from '../components/UI';
import { programs, teamMembers, events, newsArticles } from '../data/mockData';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-primary/10 py-16 text-center">
        <h1 className="text-4xl font-bold text-primary">{title}</h1>
        <p className="mt-2 text-lg text-neutral-dark max-w-2xl mx-auto">{subtitle}</p>
    </div>
);

export const AboutPage: React.FC = () => {
    const { t, language } = useLocalization();
    return (
        <div>
            <PageHeader title={t('about')} subtitle="Learn about our mission, vision, and the team making it happen." />
            
            <section className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8">{t('ourMission')}</h2>
                <p className="text-center text-lg max-w-3xl mx-auto text-neutral-dark">
                    Our mission is to empower underserved communities across Pakistan by providing access to quality education, healthcare, and sustainable livelihood opportunities. We believe in creating a world where every individual has the chance to reach their full potential.
                </p>
            </section>
            
            <section className="py-16 bg-neutral-light">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">{t('ourTeam')}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map(member => (
                            <Card key={member.name} imageUrl={member.imageUrl} imageAlt={member.name} className="text-center">
                                <h3 className="text-xl font-bold text-neutral-dark">{member.name}</h3>
                                <p className="text-primary font-semibold">{member.title[language]}</p>
                                <p className="mt-2 text-sm text-neutral-dark">{member.bio[language]}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export const ProgramsPage: React.FC = () => {
    const { t, language } = useLocalization();
    return (
        <div>
            <PageHeader title={t('ourPrograms')} subtitle="Discover the initiatives we are running to make a difference." />
            <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map(program => (
                        <Card key={program.id} imageUrl={program.imageUrl} title={program.title[language]} linkTo={`/programs/${program.id}`}>
                            <p className="text-neutral-dark">{program.summary[language]}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const DonatePage: React.FC = () => {
    const { t } = useLocalization();
    return (
        <div>
            <PageHeader title={t('donateNow')} subtitle="Your contribution can change lives. Support our cause today." />
            <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
                <Card>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Amount (PKR)</label>
                            <div className="mt-1 grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[1000, 2500, 5000, 10000].map(amount => (
                                    <button type="button" key={amount} className="p-4 border rounded-lg text-center hover:bg-primary/10 hover:border-primary">{amount.toLocaleString()}</button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700">Custom Amount</label>
                            <input type="number" id="custom-amount" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" placeholder="Enter amount" />
                        </div>
                         <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t('fullName')}</label>
                            <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('emailAddress')}</label>
                            <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                        </div>
                        <Button type="submit" variant="secondary" className="w-full">{t('donateNow')}</Button>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export const VolunteerPage: React.FC = () => {
     const { t } = useLocalization();
    return (
        <div>
            <PageHeader title={t('volunteer')} subtitle="Join our team of dedicated volunteers and make a hands-on impact." />
            <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
                 <Card>
                    <form className="space-y-6">
                         <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t('fullName')}</label>
                            <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('emailAddress')}</label>
                            <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                        </div>
                        <div>
                            <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Skills & Interests</label>
                            <textarea id="skills" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
                        </div>
                        <Button type="submit" className="w-full">{t('submit')}</Button>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export const EventsPage: React.FC = () => {
    const { t, language } = useLocalization();
    return (
        <div>
            <PageHeader title={t('upcomingEvents')} subtitle="Join us at our events to support our cause and connect with our community." />
            <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {events.map(event => (
                        <Card key={event.id} imageUrl={event.imageUrl} title={event.title[language]} linkTo={`/events/${event.id}`}>
                            <p className="font-semibold text-primary">{event.date} @ {event.location}</p>
                            <p className="mt-2 text-neutral-dark">{event.summary[language]}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const NewsPage: React.FC = () => {
    const { t, language } = useLocalization();
    return (
        <div>
            <PageHeader title={t('news')} subtitle="Stay updated with our latest activities, stories, and announcements." />
             <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsArticles.map(article => (
                        <Card key={article.id} imageUrl={article.imageUrl} title={article.title[language]} linkTo={`/news/${article.id}`}>
                            <p className="text-sm text-neutral-DEFAULT mb-2">{article.publishDate}</p>
                            <p className="text-neutral-dark">{article.summary[language]}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const ImpactPage: React.FC = () => {
    const { t } = useLocalization();
    return (
        <div>
            <PageHeader title={t('impact')} subtitle="See the tangible difference we are making together." />
            <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p>Impact reports and interactive charts will be displayed here.</p>
                <p className="mt-4">For now, please see our latest <a href="#" className="text-primary underline">Annual Report PDF</a>.</p>
            </div>
        </div>
    );
};

export const ContactPage: React.FC = () => {
    const { t } = useLocalization();
    return (
        <div>
            <PageHeader title={t('contactUs')} subtitle="We'd love to hear from you. Get in touch with our team." />
            <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                     <Card>
                        <h3 className="text-xl font-bold mb-4">Send us a message</h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t('fullName')}</label>
                                <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('emailAddress')}</label>
                                <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t('message')}</label>
                                <textarea id="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
                            </div>
                            <Button type="submit" className="w-full">{t('submit')}</Button>
                        </form>
                    </Card>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold">Contact Information</h3>
                        <p><strong>Address:</strong> 123 Hope Street, Karachi, Pakistan</p>
                        <p><strong>Phone:</strong> +92 123 4567890</p>
                        <p><strong>Email:</strong> info@globalhorizon.org</p>
                        <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                           <p className="text-neutral-DEFAULT">Map Placeholder</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
