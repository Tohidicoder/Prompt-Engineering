import { ArrowUpRight } from 'lucide-react';

export default function LessonCard({ lesson, lang }) {
  return (
    <article className={`lesson-card tone-${lesson.color}`}>
      <div className="lesson-card-top">
        <span className="lesson-tag">{lesson.tag}</span>
      </div>
      <h3>{lesson.title}</h3>
      <p className="lesson-definition">{lesson.definition}</p>
      <div className="lesson-example">
        <span>{lang === 'fa' ? 'مثال ساده' : 'SIMPLE EXAMPLE'}</span>
        <p>{lesson.example}</p>
      </div>
      <div className="lesson-takeaway">
        <span aria-hidden="true">•</span>
        <span>{lesson.takeaway}</span>
      </div>
      <a className="lesson-anchor" href="#examples" aria-label={lang === 'fa' ? 'دیدن مثال‌ها' : 'See examples'}>
        <ArrowUpRight size={18} />
      </a>
    </article>
  );
}
