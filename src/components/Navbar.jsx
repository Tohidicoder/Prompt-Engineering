import { useState } from 'react';
import { Menu, X, Languages, Sun, Moon } from 'lucide-react';
import Logo from './Logo.jsx';
export default function Navbar({ t, lang, setLang, theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const links = [['remember', '#remember'], ['course', '#course'], ['examples', '#examples'], ['video', '#video'], ['quiz', '#quiz']];
  return <header className="site-header"><nav className="navbar wrap"><Logo lang={lang}/><div className={`nav-links ${open ? 'nav-open' : ''}`}>{links.map(([key, href])=><a key={key} href={href} onClick={()=>setOpen(false)}>{t.nav[key]}</a>)}</div><div className="nav-actions"><button className="theme-button" onClick={()=>setTheme(theme === 'light' ? 'dark' : 'light')} aria-label={theme === 'light' ? (lang === 'fa' ? 'فعال کردن حالت تاریک' : 'Switch to dark mode') : (lang === 'fa' ? 'فعال کردن حالت روشن' : 'Switch to light mode')} title={theme === 'light' ? (lang === 'fa' ? 'حالت تاریک' : 'Dark mode') : (lang === 'fa' ? 'حالت روشن' : 'Light mode')}>{theme === 'light' ? <Moon size={17}/> : <Sun size={17}/>}<span>{theme === 'light' ? (lang === 'fa' ? 'تاریک' : 'Dark') : (lang === 'fa' ? 'روشن' : 'Light')}</span></button><button className="language-button" onClick={()=>setLang(lang === 'en' ? 'fa' : 'en')}><Languages size={17}/>{lang === 'en' ? 'دری' : 'English'}</button><button className="menu-button" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>{open ? <X/> : <Menu/>}</button></div></nav></header>;
}
