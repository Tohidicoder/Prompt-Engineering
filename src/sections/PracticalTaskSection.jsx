import { CheckCircle2, Copy, ClipboardCheck } from 'lucide-react';
import { useState } from 'react';
import SectionTitle from '../components/SectionTitle.jsx';

export default function PracticalTaskSection({ lang }) {
  const [copied, setCopied] = useState('');
  const fa = lang === 'fa';
  const prompts = fa ? {
    original: 'برایم یک کامپوننت React بساز.',
    improved: 'مثل یک آموزگار صبور React عمل کن. یک کامپوننت قابل استفاده مجدد به نام ProfileCard با functional component و props بساز. نام، وظیفه و معرفی کوتاه را نمایش بده. از CSS ساده و طراحی واکنش‌گرا استفاده کن. کد کامل، نام فایل‌ها، مثال استفاده و توضیح کوتاه هر بخش را ارائه کن.'
  } : {
    original: 'Make me a React component.',
    improved: 'Act as a patient React tutor. Build a reusable ProfileCard component using a functional component and props. Display a name, role, and short bio. Use simple CSS and make it responsive. Provide the complete code, file names, a usage example, and a short explanation of each part.'
  };
  async function copyPrompt(key, value) {
    try { await navigator.clipboard.writeText(value); setCopied(key); window.setTimeout(() => setCopied(''), 1500); }
    catch { window.prompt(fa ? 'پرامپت را کاپی کن' : 'Copy this prompt', value); }
  }
  return <section className="section practical-section" id="practical"><div className="wrap">
    <SectionTitle eyebrow={fa ? 'تمرین عملی' : 'PRACTICAL TASK'} title={fa ? 'یک پرامپت را بهتر بساز' : 'Improve one prompt'} subtitle={fa ? 'این نمونه را در ChatGPT یا Gemini آزمایش کن و نتیجه واقعی را با اسکرین‌شات در تحقیق خود اضافه کن.' : 'Test this example in ChatGPT or Gemini, then include the real result and a screenshot in your research.'}/>
    <div className="practical-grid">
      <article className="practical-card original-card"><span className="prompt-label"><span className="prompt-dot dot-weak"/>{fa ? 'پرامپت اولیه' : 'ORIGINAL PROMPT'}</span><p className="practical-prompt">{prompts.original}</p><p className="practical-note">{fa ? 'مشکل: هدف، محتوا، محدودیت‌ها و قالب پاسخ مشخص نیست.' : 'Problem: the goal, content, constraints, and answer format are not specified.'}</p><button className="copy-prompt" onClick={() => copyPrompt('original', prompts.original)}><Copy size={15}/>{copied === 'original' ? (fa ? 'کاپی شد' : 'Copied') : (fa ? 'کاپی' : 'Copy prompt')}</button></article>
      <article className="practical-card improved-card"><span className="prompt-label"><span className="prompt-dot dot-good"/>{fa ? 'پرامپت بهبودیافته' : 'IMPROVED PROMPT'}</span><p className="practical-prompt">{prompts.improved}</p><p className="practical-note">{fa ? 'بهتر است چون نقش، وظیفه، شرایط و قالب پاسخ را مشخص می‌کند.' : 'Better because it defines the role, task, requirements, and output format.'}</p><button className="copy-prompt" onClick={() => copyPrompt('improved', prompts.improved)}><Copy size={15}/>{copied === 'improved' ? (fa ? 'کاپی شد' : 'Copied') : (fa ? 'کاپی و آزمایش کن' : 'Copy and test')}</button></article>
    </div>
    <div className="compare-checklist"><h3><ClipboardCheck size={19}/>{fa ? 'هنگام مقایسه، این نکته‌ها را بنویس' : 'When comparing, record these points'}</h3><ul>{(fa ? ['آیا پاسخ به خواسته من نزدیک بود؟','کدام جزئیات باعث بهتر شدن پاسخ شد؟','چه چیزی هنوز کم بود؟','بعد از آزمایش، چه تغییری در پرامپت می‌دهم؟'] : ['Did the result match what I wanted?','Which details made the answer better?','What was still missing?','What would I change after testing?']).map(item => <li key={item}><CheckCircle2 size={16}/>{item}</li>)}</ul><p>{fa ? 'نکته: نتیجه AI را خودت اجرا و بررسی کن؛ متن این صفحه جای اسکرین‌شات و مشاهده واقعی را نمی‌گیرد.' : 'Note: run and review the AI result yourself. This example does not replace your own test or screenshot.'}</p></div>
  </div></section>;
}
