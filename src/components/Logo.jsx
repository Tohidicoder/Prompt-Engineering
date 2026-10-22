import { Sparkles } from 'lucide-react';
export default function Logo({ lang }) {
  return <a className="brand" href="#top" aria-label="Promptly home"><span className="brand-mark"><Sparkles size={21} strokeWidth={2.5}/></span><span><strong>Promptly</strong><small>{lang === 'fa' ? 'آکادمی پرامپت' : 'PROMPT ACADEMY'}</small></span></a>;
}
