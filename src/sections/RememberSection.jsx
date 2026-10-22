import { Brain, ClipboardList, MessageSquareText, Target, FileText, RefreshCw } from 'lucide-react';
import SectionTitle from '../components/SectionTitle.jsx';

const steps = [
  { letter: 'C', title: { en: 'Context', fa: 'زمینه' }, desc: { en: 'Who are you, and what should AI know?', fa: 'تو کی هستی و هوش مصنوعی چه چیزی باید بداند؟' }, icon: Brain, example: { en: 'I am a beginner who knows basic JavaScript.', fa: 'من مبتدی هستم و JavaScript ابتدایی می‌دانم.' } },
  { letter: 'L', title: { en: 'Limit & requirements', fa: 'شرایط و محدودیت‌ها' }, desc: { en: 'Say what to include, avoid, or keep short.', fa: 'بگو چه چیزهایی شامل شود یا از چه چیزهایی دوری کند.' }, icon: ClipboardList, example: { en: 'Use simple words and one short example.', fa: 'از کلمات ساده و یک مثال کوتاه استفاده کن.' } },
  { letter: 'E', title: { en: 'Exact task', fa: 'وظیفه دقیق' }, desc: { en: 'Use a clear action: explain, build, compare, or write.', fa: 'وظیفه را واضح بگو: توضیح بده، بساز، مقایسه کن یا بنویس.' }, icon: Target, example: { en: 'Explain React props to me.', fa: 'React props را برایم توضیح بده.' } },
  { letter: 'A', title: { en: 'Answer format', fa: 'قالب پاسخ' }, desc: { en: 'Choose steps, bullets, a table, or code.', fa: 'قالب را انتخاب کن: مرحله‌ها، بولت‌ها، جدول یا کد.' }, icon: FileText, example: { en: 'Use 3 bullet points, then show code.', fa: 'از ۳ نکته بولت‌دار استفاده کن و بعد کد را نشان بده.' } },
  { letter: 'R', title: { en: 'Review & refine', fa: 'بررسی و بهترسازی' }, desc: { en: 'Check the answer and ask for a specific improvement.', fa: 'پاسخ را بررسی کن و بهبود مشخصی بخواه.' }, icon: RefreshCw, example: { en: 'Make it clearer and explain each line.', fa: 'آن را واضح‌تر کن و هر خط را توضیح بده.' } },
];

export default function RememberSection({ lang }) {
  const fa = lang === 'fa';
  return <section className="section remember-section" id="remember"><div className="wrap">
    <SectionTitle eyebrow={fa ? 'روش آسان برای به یاد ماندن' : 'A SIMPLE WAY TO REMEMBER'} title={fa ? 'روش CLEAR را به خاطر بسپار' : 'Remember the CLEAR method'} subtitle={fa ? 'پیش از فرستادن هر پرامپت، این پنج نکته را بررسی کن.' : 'Before sending a prompt, quickly check these five points.'}/>
    <div className="clear-grid">{steps.map(({letter,title,desc,icon:Icon,example}) => <article className="clear-card" key={letter}><div className="clear-card-top"><span className="clear-letter">{letter}</span><Icon size={20}/></div><h3>{title[lang]}</h3><p>{desc[lang]}</p><div className="clear-example"><b>{fa ? 'مثال' : 'EXAMPLE'}</b><span>{example[lang]}</span></div></article>)}</div>
    <div className="clear-memory"><MessageSquareText size={22}/><p><b>{fa ? 'یادآوری سریع:' : 'Quick reminder:'}</b> {fa ? 'زمینه بده، شرایط را مشخص کن، وظیفه را واضح بگو، قالب پاسخ را تعیین کن و نتیجه را بررسی کن.' : 'Give context, set requirements, state the exact task, choose the answer format, then review the result.'}</p></div>
  </div></section>;
}
