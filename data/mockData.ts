
import { Program, TeamMember, Event, NewsArticle } from '../types';

export const programs: Program[] = [
  {
    id: 'edu-001',
    title: {
      en: 'Community Education',
      ur: 'کمیونٹی ایجوکیشن',
    },
    summary: {
      en: 'Establishing after-school learning centers for 300 children in rural areas.',
      ur: 'دیہی علاقوں میں 300 بچوں کے لیے اسکول کے بعد سیکھنے کے مراکز کا قیام۔',
    },
    imageUrl: 'https://picsum.photos/seed/education/600/400',
    region: 'Punjab',
    theme: 'Education',
  },
  {
    id: 'health-001',
    title: {
      en: 'Mobile Health Clinics',
      ur: 'موبائل ہیلتھ کلینکس',
    },
    summary: {
      en: 'Providing free medical checkups and essential medicines to remote villages.',
      ur: 'دور دراز دیہاتوں کو مفت طبی معائنے اور ضروری ادویات کی فراہمی۔',
    },
    imageUrl: 'https://picsum.photos/seed/health/600/400',
    region: 'Sindh',
    theme: 'Healthcare',
  },
  {
    id: 'lively-001',
    title: {
      en: 'Vocational Training for Women',
      ur: 'خواتین کے لیے پیشہ ورانہ تربیت',
    },
    summary: {
      en: 'Empowering women with skills in tailoring and handicrafts for financial independence.',
      ur: 'خواتین کو مالی خودمختاری کے لیے سلائی اور دستکاری میں مہارتوں سے بااختیار بنانا۔',
    },
    imageUrl: 'https://picsum.photos/seed/lively/600/400',
    region: 'KPK',
    theme: 'Livelihood',
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Ayesha Khan',
    title: { en: 'Founder & CEO', ur: 'بانی اور سی ای او' },
    imageUrl: 'https://picsum.photos/seed/ayesha/400/400',
    bio: { en: 'Ayesha has over 20 years of experience in the social development sector.', ur: 'عائشہ کو سماجی ترقی کے شعبے میں 20 سال سے زیادہ کا تجربہ ہے۔' },
  },
  {
    name: 'Bilal Ahmed',
    title: { en: 'Director of Programs', ur: 'ڈائریکٹر پروگرامز' },
    imageUrl: 'https://picsum.photos/seed/bilal/400/400',
    bio: { en: 'Bilal leads our field operations and program implementation with passion.', ur: 'بلال جذبے کے ساتھ ہمارے فیلڈ آپریشنز اور پروگرام کے نفاذ کی قیادت کرتے ہیں۔' },
  },
  {
    name: 'Fatima Ali',
    title: { en: 'Head of Fundraising', ur: 'فنڈ ریزنگ کی سربراہ' },
    imageUrl: 'https://picsum.photos/seed/fatima/400/400',
    bio: { en: 'Fatima builds strategic partnerships to fuel our mission.', ur: 'فاطمہ ہمارے مشن کو آگے بڑھانے کے لیے اسٹریٹجک شراکتیں استوار کرتی ہیں۔' },
  },
];

export const events: Event[] = [
  {
    id: 'event-001',
    title: { en: 'Annual Charity Gala 2024', ur: 'سالانہ چیریٹی گالا 2024' },
    date: '2024-12-15',
    location: 'Karachi',
    summary: { en: 'Join us for a night of inspiration and fundraising to support our upcoming projects.', ur: 'ہمارے آنے والے منصوبوں کی حمایت کے لیے प्रेरणा اور فنڈ ریزنگ کی ایک رات کے لیے ہمارے ساتھ شامل ہوں۔' },
    imageUrl: 'https://picsum.photos/seed/gala/600/400',
  },
  {
    id: 'event-002',
    title: { en: 'Community Health Camp', ur: 'کمیونٹی ہیلتھ کیمپ' },
    date: '2024-11-20',
    location: 'Lahore',
    summary: { en: 'Free health screenings and awareness sessions for the local community.', ur: 'مقامی کمیونٹی کے لیے مفت صحت کی اسکریننگ اور آگاہی سیشن۔' },
    imageUrl: 'https://picsum.photos/seed/camp/600/400',
  },
];

export const newsArticles: NewsArticle[] = [
  {
    id: 'news-001',
    title: { en: 'GHF Opens 10 New Schools in Punjab', ur: 'جی ایچ ایف نے پنجاب میں 10 نئے اسکول کھولے' },
    author: 'Admin',
    publishDate: '2024-10-01',
    summary: { en: 'Our latest initiative brings quality education to over 1000 out-of-school children.', ur: 'ہماری تازہ ترین پہل 1000 سے زیادہ اسکول سے باہر بچوں کو معیاری تعلیم فراہم کرتی ہے۔' },
    imageUrl: 'https://picsum.photos/seed/news1/600/400',
  },
  {
    id: 'news-002',
    title: { en: 'Successful Flood Relief Campaign in Sindh', ur: 'سندھ میں کامیاب سیلاب ریلیف مہم' },
    author: 'Admin',
    publishDate: '2024-09-15',
    summary: { en: 'We distributed essential supplies to over 5000 families affected by the recent floods.', ur: 'ہم نے حالیہ سیلاب سے متاثرہ 5000 سے زیادہ خاندانوں میں ضروری سامان تقسیم کیا۔' },
    imageUrl: 'https://picsum.photos/seed/news2/600/400',
  },
];
