import { useEffect, useState } from 'react';
import { content } from './data/content.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import CourseSection from './sections/CourseSection.jsx';
import ExamplesSection from './sections/ExamplesSection.jsx';
import RememberSection from './sections/RememberSection.jsx';
import VideoSection from './sections/VideoSection.jsx';
import QuizSection from './sections/QuizSection.jsx';
import ReferencesSection from './sections/ReferencesSection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
 const [lang,setLang]=useState(()=>localStorage.getItem('promptly-language')||'en');
 const [theme,setTheme]=useState(()=>localStorage.getItem('promptly-theme')||'light');
 const t=content[lang];
 useEffect(()=>{document.documentElement.lang=lang==='fa'?'fa-AF':'en';document.documentElement.dir=lang==='fa'?'rtl':'ltr';document.title=lang==='fa'?'Promptly — آکادمی پرامپت انجینیرینگ':'Promptly — Prompt Engineering Academy';localStorage.setItem('promptly-language',lang)},[lang]);
 useEffect(()=>{document.documentElement.dataset.theme=theme;localStorage.setItem('promptly-theme',theme)},[theme]);
 return <div className={`app lang-${lang}`}><Navbar t={t} lang={lang} setLang={setLang} theme={theme} setTheme={setTheme}/><main><Hero t={t} lang={lang}/><RememberSection lang={lang}/><CourseSection t={t} lang={lang}/><ExamplesSection t={t} lang={lang}/><VideoSection t={t} lang={lang}/><QuizSection t={t} lang={lang}/><ReferencesSection t={t} lang={lang}/></main><Footer t={t} lang={lang}/></div>;
}
