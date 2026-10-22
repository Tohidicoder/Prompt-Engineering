import SectionTitle from '../components/SectionTitle.jsx';
import LessonCard from '../components/LessonCard.jsx';
export default function CourseSection({ t, lang }) { return <section className="section wrap" id="course"><SectionTitle eyebrow={lang==='fa'?'مسیر یادگیری':'YOUR LEARNING PATH'} title={t.courseTitle} subtitle={t.courseSub}/><div className="lesson-grid">{t.lessons.map(lesson=><LessonCard key={lesson.title} lesson={lesson} lang={lang}/>)}</div></section>; }
